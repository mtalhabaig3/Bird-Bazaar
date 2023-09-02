import React, { useEffect, useState } from "react";
import parrotImage from "../assets/imgs/parrotUp.JPG";
import axios from "axios";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("token");
      try {
        const items = await axios.get("http://localhost:5000/api/v1/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(items.data);
        console.log(items);
        console.log("Successfully received cart!");
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const calculatePrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.productId.price * product.quantity;
    });

    return totalPrice;
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div className="card mx-5" style={{ width: "540px" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={parrotImage}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.productId.title}</h5>
                <p className="card-text">${product.productId.price}</p>
                <p className="card-text">quantity: {product.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container mt-5 row">
      {renderProducts()}
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Sub Total: ${calculatePrice()}</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Proceed to checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
