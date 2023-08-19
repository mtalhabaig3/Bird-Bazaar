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
];

const categories = [
  {
    image: parrotImage,
    title: "Males",
    description: "This is male category",
  },
  {
    image: parrotImage,
    title: "Females",
    description: "This is female category",
  },
  {
    image: parrotImage,
    title: "Kids",
    description: "This is kids category",
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

const renderCategories = () => {
  return categories.map((category) => {
    return (
      <div>
        <div className="col mb-5">
          <div className="card h-100">
            <img src={category.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>
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
      <h1>Categories</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {renderCategories()}
      </div>
    </div>
  );
};

export default Home;
