const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet")

const app = express();

app.use(cors());
app.use(helmet())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(":method :url "));

app.get("/", (req, res) => {
  res.json({ msg: "hello", config: [{ id: 1 }, { id: 2 }] });
});

module.exports = app;
