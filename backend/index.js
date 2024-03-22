const app = require("./app");

require("dotenv").config();
const port = process.env.PORT || 5000;

const db = require("./src/api/v1/models");

const { sequelize } = require("./src/api/v1/models");

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await sequelize.authenticate();
  console.log("Database connected");
});
