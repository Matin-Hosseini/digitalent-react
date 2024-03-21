const app = require("./app");

require("dotenv").config();
const port = process.env.PORT || 5000;

const db = require("./src/api/v1/models");

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
