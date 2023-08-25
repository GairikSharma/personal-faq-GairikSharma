const express = require("express");
const read = require("../controllers/read.js"); 

const routes = express.Router();

routes.route("/:name").get(read);

module.exports = routes;
