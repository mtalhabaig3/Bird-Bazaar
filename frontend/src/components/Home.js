import React from "react";
import parrotImage from "../assets/imgs/parrot.JPG";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    image: parrotImage,
    title: "parrot_1",
    description: "This is parrot 1",
  },
  {
    id: 2,
    image: parrotImage,
    title: "parrot_2",
    description: "This is parrot 2",
  },
  {
    id: 3,
    image: parrotImage,
    title: "parrot_3",
    description: "This is parrot 3",
  },
  {
    id: 4,
    image: parrotImage,
    title: "parrot_4",
    description: "This is parrot 4",
  },
  {
    id: 5,
    image: parrotImage,
    title: "parrot_5",
    description: "This is parrot 5",
  },
  {
    id: 6,
    image: parrotImage,
    title: "parrot_6",
    description: "This is parrot 6",
  },
];

const renderFeatured = () => {
  return featuredProducts.map((product) => {
    return (
      <div>
        <div className="col mb-5">
          <div className="card h-100">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <Link to={"products/2"} class="btn btn-primary">
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Featured</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {renderFeatured()}
      </div>
    </div>
  );
};

export default Home;
