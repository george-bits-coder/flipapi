const express = require("express");
const serverless = require("serverless-http");

const connect = require("../config/db");
const mongoose = require('mongoose');
const Users = require('../models/user.model');
const app = express();
const router = express.Router();

router.get("/sample", (req, res) => {
  res.json({
    hello: "koo clone api!"
  });
});

router.get("/p", (req, res) => {
  res.json({
    hello: "koo clone api!"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
