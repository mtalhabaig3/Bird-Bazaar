import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            Amazon
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"products"} className="nav-link" href="#">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"login"} className="nav-link" href="#">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"signUp"} className="nav-link" href="#">
                  Sign Up
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"cart"} className="nav-link" href="#">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"userProfile"} className="nav-link" href="#">
                  Account
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <div className="bg-dark row py-5">
        <div className="card text-bg-dark border-dark col-3">
          <h5 className="card-header">Get to Know Us</h5>
          <div className="card-body">
            <p className="card-text">Carrers</p>
            <p className="card-text">Blogs</p>
            <p className="card-text">About Amazon</p>
          </div>
        </div>
        <div className="card text-bg-dark border-dark col-3">
          <h5 className="card-header">Make Money with Us</h5>
          <div className="card-body">
            <p className="card-text">Sell products on Amazon</p>
            <p className="card-text">Sell on Amazon Business</p>
            <p className="card-text">Sell apps on Amazon</p>
          </div>
        </div>
        <div className="card text-bg-dark border-dark col-3">
          <h5 className="card-header">Amazon Payment Products</h5>
          <div className="card-body">
            <p className="card-text">Amazon Business Card</p>
            <p className="card-text">Shop with Points</p>
            <p className="card-text">Reload Your Balance</p>
          </div>
        </div>
        <div className="card text-bg-dark border-dark col-3">
          <h5 className="card-header">Let Us Help You</h5>
          <div className="card-body">
            <p className="card-text">Amazon and COVID-19</p>
            <p className="card-text">Your Account</p>
            <p className="card-text">Your Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
