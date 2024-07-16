const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("Successfuly connected to DB.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Express server link: http://localhost:3000/");
});
