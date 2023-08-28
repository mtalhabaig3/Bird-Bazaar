const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("./db/models/User");
const Product = require("./db/models/Product");
const app = express();

const port = 5000;
const saltRounds = 10;
const jwt_secret = "secret";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const createJWT = (user) => {
  const token = jwt.sign(
    { user_id: user._id, username: user.name },
    jwt_secret,
    { expiresIn: "30d" }
  );
  return token;
};

const authenticate_JWT = (req, res, next) => {
  const header = req.get("Authorization");
  if (!header || !header.startsWith("Bearer")) {
    res.status(401).json({ msg: "Unauthorized." });
  }

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, jwt_secret);

    const { user_id, username } = decoded;
    req.user = {
      user_id: user_id,
      username: username,
    };
    next();
  } catch (error) {
    console.error("error : ", error);
    res.status(401).json({ msg: "Unauthorized." });
  }
};

app.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).exec();
  try {
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = createJWT(user);
        res.status(200).json({ msg: "Login Successful!", token });
      } else {
        res.status(401).json({ msg: "wrong credentials!" });
      }
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/v1/register", async (req, res) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const user = await User.create({ ...req.body, password: hashedPassword });
    const token = createJWT(user);
    res.status(200).json({ msg: "user created!", token });
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/v1/getProducts", authenticate_JWT, async (req, res) => {
  const products = await Product.find({});

  res.status(200).send(products);
});

app.get("/api/v1/getProducts/:id", authenticate_JWT, async (req, res) => {
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
