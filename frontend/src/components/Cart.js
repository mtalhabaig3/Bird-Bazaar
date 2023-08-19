import React from "react";
import parrotImage from "../assets/imgs/parrotUp.JPG";

const products = [
  {
    id: 1,
    image: parrotImage,
    title: "parrot_1",
    description: "This is parrot 1",
  },
  //   { image: parrotImage, title: "parrot_2", description: "This is parrot 2" },
];

const Cart = () => {
  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div className="card mx-5" style={{ width: "540px" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
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
          <h5 class="card-title">Sub Total: $100</h5>
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
