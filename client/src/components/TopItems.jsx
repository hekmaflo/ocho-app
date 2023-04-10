import React, { useState, useEffect } from "react";
import axios from "axios";

const TopItems = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`/api/items/list/${props.listId}`);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getItems();
  }, [props.listId]);

  return (
    <div>
      <h1>Top Items</h1>
      {items.map((item) => (
        <div key={item._id}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopItems;
