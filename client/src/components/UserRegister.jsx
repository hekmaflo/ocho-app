import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/api/register", formValues);
      setFormValues({ name: "", username: "", email: "", password: "" });
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="User Name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        {/* <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        </div> */}
      </div>
      <div>
        <button
          type="submit"
          disabled={
            !formValues.email ||
            !formValues.password ||
            !formValues.username ||
            !formValues.name
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserRegister;
