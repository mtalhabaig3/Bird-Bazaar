import axios from "axios";
import React, { useState } from "react";

const Address_Payment = () => {
  const [formData, setFormData] = useState({
    address: "",
    address_2: "",
    city: "",
    country: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post("http://localhost:5000/api/v1/orders", {
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          zipCode: formData.zip,
          country: formData.country,
        },
        paymentMethod: "card",
        taxPrice: 10,
        shippingPrice: 15,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-5">Address and Payment</h1>
      <form className="row g-3">
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
            <option selected>Choose...</option>
            <option>...</option>
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

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address_Payment;
