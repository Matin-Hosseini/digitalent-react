const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes/v1");
const { errorHandler, notFound } = require("./src/api/v1/middlewares/error");

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(":method :url "));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ msg: "hello", config: [{ id: 1 }, { id: 2 }] });
});

app.use("/api/v1", routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
