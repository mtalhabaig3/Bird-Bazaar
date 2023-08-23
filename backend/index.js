const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./db/models/User");
const Product = require("./db/models/Product");
const app = express();
const port = 5000;
const saltRounds = 10;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).exec();

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).json({ msg: "Login Successful!" });
    } else {
      res.status(401).json({ msg: "wrong credentials!" });
    }
  }
});

app.post("/api/v1/register", async (req, res) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    await User.create({ ...req.body, password: hashedPassword });
    res.status(200).json({ msg: "user created!" });
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/v1/getProducts", async (req, res) => {
  const products = await Product.find({});

  res.status(200).send(products);
});

app.get("/api/v1/getProducts/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.status(200).send(product);
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
