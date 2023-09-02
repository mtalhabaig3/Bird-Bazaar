import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post("http://localhost:5000/api/v1/login", {
        email: formData.email,
        password: formData.password,
      });
      const token = data.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="container my-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="emailHelp"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
