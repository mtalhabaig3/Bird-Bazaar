import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
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
      <button className="btn btn-primary mt-5" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserProfile;
