import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ItemCreation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  const [imageSelected, setImageSelected] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const uploadImage = () => {
    console.log(imageSelected);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "ps0hcf1m");

    axios
      .post("https://api.cloudinary.com/v1_1/diontizpt/image/upload", formData)
      .then((response) => {
        setUploadUrl(response.data.secure_url);
        console.log(uploadUrl);
        setFormValues({ ...formValues, image: response.data.secure_url });
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3001/api/items/list/${id}`,
        formValues
      );
      const user = response.data.user;
      setFormValues({ title: "", description: "", image: "", url: "" });
      navigate(-1);
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
            {/* <label>Title:</label> */}
            <input
              className="List-input"
              type="title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              placeholder="Name your item..."
            />
          </div>
          <div>
            {/* <label>Decription:</label> */}
            <input
              className="List-input"
              type="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              placeholder="Describe your item..."
            />
          </div>
          <div>
            <label>Image:</label>
            <form>
              <input
                type="file"
                name="image"
                value=""
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }}
                placeholder="image url"
              />
              <button type="button" onClick={uploadImage}>
                Upload Image
              </button>
            </form>
          </div>
          <div>
            {/* <label>URL:</label> */}
            <input
              className="List-input"
              type="url"
              name="url"
              value={formValues.url}
              onChange={handleChange}
              placeholder="URL for more info..."
            />
          </div>
        </div>
        <div>
          <button className="List-input-button-two" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default ItemCreation;
