import axios from "axios";
import Modal from "react-modal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const AddressPayment = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    address_2: "",
    city: "",
    country: "",
    zip: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const data = await axios.post(
        "http://localhost:5000/api/v1/orders",
        {
          shippingAddress: {
            address: formData.address,
            city: formData.city,
            zipCode: formData.zip,
            country: formData.country,
          },
          paymentMethod: formData.payment,
          taxPrice: 10,
          shippingPrice: 15,
          totalPrice: 0,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
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
        <h2>Orders</h2>

        <div>Order placed!</div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/orderDetails")}
        >
          View Orders
        </button>
        <button className="btn btn-primary mx-5" onClick={() => navigate("/")}>
          Go home
        </button>
      </Modal>
      <div className="container mt-5">
        <h1 className="mb-5">Address and Payment</h1>
        <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              name="address_2"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={formData.address_2}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input
              name="city"
              type="text"
              className="form-control"
              id="inputCity"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Country
            </label>
            <select
              name="country"
              id="inputcountry"
              className="form-select"
              value={formData.country}
              onChange={handleChange}
            >
              <option selected> ...</option>
              <option>Pakistan</option>
              <option>Afghanistan</option>
              <option>USA</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input
              name="zip"
              type="text"
              className="form-control"
              id="inputZip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Payment Method
            </label>
            <select
              name="payment"
              id="inputcountry"
              className="form-select"
              value={formData.payment}
              onChange={handleChange}
            >
              <option selected>...</option>
              <option>Card</option>
              <option>Cash On Delivery</option>
              <option>Paypal</option>
            </select>
          </div>

          <div className="col-12">
            <button
              onClick={() => setShowModal(true)}
              type="submit"
              className="btn btn-primary"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressPayment;
