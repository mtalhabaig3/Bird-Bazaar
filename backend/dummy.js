const express = require("express");
const mongoose = require("mongoose");
const Product = require("./db/models/Product");

const app = express();

async function main() {
  return await mongoose
    .connect(
      "mongodb+srv://mtalhabaig3:nZF01kNhZzuNySU8@taskmanager.z1ighrp.mongodb.net/Ecommerce-app?&retryWrites=true&w=majority"
    )
    .then(console.log("Connected to database"));
}

app.listen((port = 5000), () => {
  try {
    main();
    console.log(`app listening on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});

const products = [
  {
    title: "parrot_1",
    description: "This is parrot 1",
    price: 10,
  },
  {
    title: "parrot_2",
    description: "This is parrot 2",
    price: 20,
  },
  {
    title: "parrot_3",
    description: "This is parrot 3",
    price: 30,
  },
  {
    title: "parrot_4",
    description: "This is parrot 4",
    price: 40,
  },
  {
    title: "parrot_5",
    description: "This is parrot 5",
    price: 50,
  },
  {
    title: "parrot_6",
    description: "This is parrot 6",
    price: 60,
  },
];

Product.insertMany(products)
  .then(() => {
    console.log("Products inserted!");
    mongoose.connection.close();
  })
  .catch((e) => {
    console.log("error: ", e);
  });
