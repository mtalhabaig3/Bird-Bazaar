import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("token");
      try {
        const items = await axios.get(
          "http://localhost:5000/api/v1/users/orders",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setOrders(items.data);

        console.log(orders);
        console.log("Successfully received orders!");
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);
  const renderOrders = () => {
    return orders.map((order) => (
      <div className="card text-center my-5">
        <div className="card-body">
          <h5 className="card-title">total items: {order.orderItems.length}</h5>
          <p className="card-text">address : {order.shippingAddress.address}</p>
          <p className="card-text">total price : ${order.totalPrice}</p>
          <button className="btn btn-primary" onClick={{}}>
            View Details
          </button>
        </div>
        <div className="card-footer text-body-secondary">{order.createdAt}</div>
      </div>
    ));
  };
  return (
    <div className="container">
      <h1>Orders</h1>
      {renderOrders()}
    </div>
  );
};

export default OrderDetails;
