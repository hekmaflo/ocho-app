import React, { useState } from "react";
import axios from "axios";

const Upload = (props) => {
  const [fileInputState, serFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const id = props.listId;

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewfile(file);
  };

  const previewfile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource, id);
  };

  const uploadImage = async (base64EncodedImage, id) => {
    try {
      console.log(id);
      const response = await axios.post(`/api/items/list/${id}`, {
        image: base64EncodedImage,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>uploas</h1>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button type="submit">Upload IMG</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "150px" }} />
      )}
    </div>
  );
};

export default Upload;
