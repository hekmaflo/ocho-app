import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Upload from "../components/Upload";

const ImageUpload = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
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
      });
  };
  return (
    <div>
      <h1>IMG upload</h1>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
