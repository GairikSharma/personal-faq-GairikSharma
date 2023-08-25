require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = ()=>{
  return mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = dbConnect;
