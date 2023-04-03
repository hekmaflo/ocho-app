import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = (props) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/login",
        formValues
      );
      const user = response.data.user;
      const userId = user._id;
      setFormValues({ email: "", password: "" });
      navigate(`/home/${userId}`);
      props.setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="List-input-container">
      <div>
        <div>
          {/* <label>Email:</label> */}
          <input
            className="List-input"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input
            className="List-input"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <button className="List-input-button" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
};
export default UserLogin;
