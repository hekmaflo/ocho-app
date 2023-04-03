import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListEdit = (props) => {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/lists/${id}`,
        formValues
      );
      const user = response.data.user;
      const userId = user._id;
      setFormValues({ title: "", description: "" });
      //   props.handleToggle();
      navigate(-1);
      //   props.setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="List-input-container">
      <h1>List Form:</h1>

      {/* <label>Title:</label> */}
      <input
        className="List-input"
        type="title"
        name="title"
        value={formValues.title}
        onChange={handleChange}
        placeholder="Write a name for your list..."
      />

      {/* <label>Decription:</label> */}
      <input
        className="List-input"
        type="description"
        name="description"
        value={formValues.description}
        onChange={handleChange}
        placeholder="Write a short description..."
      />

      <button className="List-input-button" type="submit">
        <h1>+</h1>
      </button>
    </form>
  );
};

export default ListEdit;
