const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.get("/api/v1/login", (req, res) => {
  res.send("Login!");
});

app.get("/api/v1/register", (req, res) => {
  res.send("Register!");
});

async function main() {
  return await mongoose
    .connect(
      "mongodb+srv://mtalhabaig3:nZF01kNhZzuNySU8@taskmanager.z1ighrp.mongodb.net/Ecommerce-app?&retryWrites=true&w=majority"
    )
    .then(console.log("Connected to database"));
}

app.listen(port, () => {
  try {
    main();
    console.log(`app listening on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
