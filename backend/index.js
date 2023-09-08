const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("./db/models/User");
const Product = require("./db/models/Product");
const Order = require("./db/models/Order");
const app = express();
var cors = require("cors");
const { findById } = require("./db/models/Order");

const port = 5000;
const saltRounds = 10;
const jwt_secret = "secret";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

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
        res
          .status(200)
          .json({ msg: "Login Successful!", name: user.name, token });
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

app.post("/api/v1/cart", authenticate_JWT, async (req, res) => {
  const { user_id } = req.user;
  const { productId, quantity } = req.body;
  const user = await User.findById(user_id);

  const cartItemIndex = user?.cart.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (cartItemIndex > -1) {
    user.cart[cartItemIndex].quantity += quantity;
  } else {
    user.cart.push({ productId, quantity });
  }

  await user.save();

  res.status(200).send(user.cart);
});

app.get("/api/v1/cart", authenticate_JWT, async (req, res) => {
  try {
    const { user_id } = req.user;
    const user = await User.findById(user_id);

    await user.populate("cart.productId");

    res.status(200).send(user.cart);
  } catch (error) {
    console.error(error);
  }
});

app.delete("/api/v1/cart/:id", authenticate_JWT, async (req, res) => {
  try {
    const { user_id } = req.user;
    const { id } = req.params;
    const user = await User.findById(user_id);

    const cartItemIndex = user?.cart.findIndex(
      (item) => item._id.toString() === id
    );

    if (cartItemIndex > -1) {
      user.cart.splice(cartItemIndex, 1);
      await user.save();
      res.status(200).json({ msg: "item removed" });
    } else {
      res.status(400).json({ msg: "No item with this id" });
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/v1/orders", authenticate_JWT, async (req, res) => {
  try {
    const { user_id } = req.user;
    const user = await User.findById(user_id);
    const cart = await user.populate("cart.productId");

    console.log("cart: ", cart);
    let totalPrice;

    const orderItems = cart.cart.map((item) => ({
      productId: item._id,
      title: item.title,
      quantity: item.quantity,
      price: item.price,
    }));

    cart.cart.forEach((item) => {
      totalPrice += item.price;
    });

    const newOrder = Order.create({
      user: user_id,
      orderItems,
      ...req.body,
      totalPrice,
    });

    res.status(200).json({ msg: "Order Placed" });
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
