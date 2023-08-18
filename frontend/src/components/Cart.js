import React from "react";
import parrotImage from "../assets/imgs/parrotUp.JPG";

const Cart = () => {
  return (
    <div classNameName="row container mt-5">
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={parrotImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

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
