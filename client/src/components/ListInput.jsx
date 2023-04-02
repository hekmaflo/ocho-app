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
        `http://localhost:3001/api/lists/user/${props.userId}`,
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
    <>
      <h1>List Form:</h1>
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
        </div>
        <div>
          <button type="submit">Creat List</button>
        </div>
      </form>
    </>
  );
};

export default ListInput;
