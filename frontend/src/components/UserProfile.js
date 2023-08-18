import React from "react";

const UserProfile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Your Orders</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Account</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customer Service</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
