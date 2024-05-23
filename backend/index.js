const app = require("./app");

require("dotenv").config();
const port = 8000;

const db = require("./src/models");

const { sequelize } = require("./src/models");

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  // await sequelize.authenticate();
  console.log("Database connected");
});
