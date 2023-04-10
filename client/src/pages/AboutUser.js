import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AboutUser = () => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`/api/users/${id}`, formValues);
      setFormValues((prevState) => ({
        ...prevState,
        description: "",
        image: "",
      }));
      navigate(`/home/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>About</h1>
      <form onSubmit={handleSubmit} className="List-input-container">
        <div>
          <div>
            <label>About Me</label>
            <input
              className="List-input"
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              placeholder="Write somthing about you... this will go on your profie..."
            />
          </div>
          <div>
            <label>Picture:</label>
            <input
              className="List-input"
              type="text"
              name="image"
              value={formValues.image}
              onChange={handleChange}
              placeholder="Use an URL here..."
            />
          </div>

          <div>
            <button
              className="List-input-button"
              type="submit"
              // disabled={
              //   !formValues.email ||
              //   !formValues.password ||
              //   !formValues.username ||
              //   !formValues.name
              // }
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AboutUser;
