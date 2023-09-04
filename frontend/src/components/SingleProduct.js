import axios from "axios";
import React, { useEffect, useState } from "react";
import parrotImage from "../assets/imgs/parrot.JPG";
import { useParams } from "react-router-dom";
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

const SingleProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  console.log("id: ", productId);

  useEffect(() => {
    const getProduct = async () => {
      const token = localStorage.getItem("token");
      try {
        const item = await axios.get(
          `http://localhost:5000/api/v1/getProducts/${productId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProduct(item.data);
        console.log(item);
        console.log("Successfully received single product!");
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
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
      <div className="container mt-5 row">
        <div className="card mx-5" style={{ width: "540px" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={parrotImage}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Price: ${product.price}</h5>

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
    </>
  );
};

export default SingleProduct;
