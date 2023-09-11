import React, { useEffect, useRef, useState } from "react";
import parrotImage from "../assets/imgs/parrotUp.JPG";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleOrderDetails = () => {
  const [order, setOrder] = useState([]);
  const { orderId } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("token");
      try {
        const items = await axios.get(
          `http://localhost:5000/api/v1/orders/${orderId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setOrder(items.data);

        console.log(order);
        console.log("Successfully received products from order!");
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const renderProducts = () => {
    return order.orderItems.map((product) => {
      return (
        <div className="card mx-5 my-2" style={{ width: "540px" }}>
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
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
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
      <h1>Order Details </h1>
      {renderProducts()}
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{order.orderItems.length} items</h5>
          <p class="card-text">totalPrice : ${order.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderDetails;
