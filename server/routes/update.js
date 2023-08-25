const express = require("express");
const update = require("../controllers/update.js"); 

const routes = express.Router();

routes.route("/:name").patch(update);

module.exports = routes;
