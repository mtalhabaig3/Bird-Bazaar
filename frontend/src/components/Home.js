import React from "react";
import parrotImage from "../assets/imgs/parrot.JPG";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Featured</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col">
          <div className="card h-100">
            <img src={parrotImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link to={"products/2"} class="btn btn-primary">
                View details
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={parrotImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                View details
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={parrotImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary">
                View details
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={parrotImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                View details
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={parrotImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                View details
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={parrotImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn btn-primary">
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
