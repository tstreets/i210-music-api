const express = require("express");
const cors = require("cors");

const app = express();

const allArtists = require("../data.json");

app.use(express.json());

app.use(cors());

app.get("/artists", function (req, res) {
  res.status(200).json(allArtists);
});

module.exports = app;
