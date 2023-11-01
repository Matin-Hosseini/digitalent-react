const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT || 5000;

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("mongodb connected");
})();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
