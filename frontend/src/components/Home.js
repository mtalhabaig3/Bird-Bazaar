import React, { useEffect, useState } from "react";
import parrotImage from "../assets/imgs/parrot.JPG";
import { Link } from "react-router-dom";
import axios from "axios";
import CartModal from "./CartModal";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("token");
      try {
        const items = await axios.get(
          "http://localhost:5000/api/v1/getProducts",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProducts(items.data);
        console.log(items);
        console.log("Successfully received products!");
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const handleModal = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      const data = await axios.post(
        "http://localhost:5000/api/v1/cart",
        {
          productId: productId,
          quantity: 1,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Added to cart");
      console.log(data.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderFeatured = (products) => {
    return products.map((product) => {
      return (
        <div>
          <div className="col mb-5">
            <div className="card h-100">
              <img src={parrotImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <Link to={"products/2"} class="btn btn-primary">
                  View details
                </Link>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    handleModal(product._id);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h2>Cart</h2>

        <div>I am a modal</div>
        <button className="btn btn-primary" onClick={() => setShowModal(false)}>
          close
        </button>
      </Modal>
      <div className="container mt-5">
        <h1>Featured</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {renderFeatured(products)}
        </div>
      </div>
    </>
  );
};

export default Home;
