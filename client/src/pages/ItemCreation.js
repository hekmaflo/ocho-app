import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ItemCreation = () => {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  //   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3001/api/items/list/${id}`,
        formValues
      );
      const user = response.data.user;
      // const userId = user._id;
      setFormValues({ title: "", description: "", image: "", url: "" });

      //   navigate(`/home/${props.userId}`);
      //   props.setUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Item Creation:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Title:</label>
            <input
              type="title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              placeholder="Name your list"
            />
          </div>
          <div>
            <label>Decription:</label>
            <input
              type="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              placeholder="Describe your list"
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={formValues.image}
              onChange={handleChange}
              placeholder="image url"
            />
          </div>
          <div>
            <label>URL:</label>
            <input
              type="url"
              name="url"
              value={formValues.url}
              onChange={handleChange}
              placeholder="link your like"
            />
          </div>
        </div>
        <div>
          <button type="submit">Creat List</button>
        </div>
      </form>
    </>
  );
};

export default ItemCreation;
