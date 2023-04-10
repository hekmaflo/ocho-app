import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ListInput = (props) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  //   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `/api/lists/user/${props.userId}`,
        formValues
      );
      const user = response.data.user;
      const userId = user._id;
      setFormValues({ title: "", description: "" });
      props.handleToggle();
      //   navigate(`/home/${props.userId}`);
      //   props.setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="List-input-container">
      <h2 className="list-title">Create a top 8 category here:</h2>

      {/* <label>Title:</label> */}
      <input
        className="List-input"
        type="title"
        name="title"
        value={formValues.title}
        onChange={handleChange}
        placeholder="Write a name for your top 8 catergory..."
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

export default ListInput;
