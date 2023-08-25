const Personalfaq = require("../models/personalfaq");
const dbConnect = require("../db/connect.js")

const update = async (req, res) => {
  if (Object.values(req.body)[0].length === 0)
    res.status(400).json({ message: "Question not provided" });
  else {
    try {
      dbConnect();
      let update_to_push = {
        ...req.body,
        answer: ""
      }

      await Personalfaq.updateOne(
        req.params,
        { $push: { QA: update_to_push } }
      );
      res.status(200).json({ message: "Question posted" });
    }
    catch (error) {
      console.log(error);
    }
  }
}

module.exports = update;

