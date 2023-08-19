const express = require("express");
const mongoose = require("mongoose");
const User = require("./db/models/User");
const app = express();
const port = 5000;

app.use(express.urlencoded("extended"));
app.use(express.json());

app.get("/api/v1/login", (req, res) => {
  res.send("Login!");
});

app.get("/api/v1/register", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email }).exec();

  if (user) {
    return res.status(400).json({ msg: "user already exists" });
  }

  try {
    await User.create({ ...req.body });
    res.status(200).json({ msg: "user created!" });
  } catch (error) {
    console.error(error);
  }
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
