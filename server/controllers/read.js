const dbConnect = require("../db/connect.js");
const Personalfaq = require("../models/personalfaq.js");

const read = async (req, res) => {
  try {
    dbConnect();
    let data = await Personalfaq.find(req.params);
    if (data.length == 0)
      res.status(404).json({ error: true });
    else {
      const COUNT = 5;
      data = data[0];

      //randomly selects 5 FAQs
      if (data.QA.length > COUNT) {
        let random_qa = [];
        let i = 1;
        while (i <= COUNT) {
          const random_qa_pair = data.QA[Math.floor(Math.random() * data.QA.length)];
          if (random_qa.includes(random_qa_pair) || random_qa_pair.answer.length === 0)
            continue;
          random_qa.push(random_qa_pair);
          i++
        }
        data.QA = random_qa;
      }

      //send the final data
      res.status(200).json({
        error: false,
        data: data
      });
    }

  }
  catch (error) {
    console.log(error);
  }

}

module.exports = read;
