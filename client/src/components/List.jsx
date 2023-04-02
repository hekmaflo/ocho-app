import React, { useState, useEffect } from "react";
import TopItems from "./TopItems";
import axios from "axios";

const List = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/lists/user/${props.userId}`
        );
        setLists(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getLists();
  }, [props.userId]);

  return (
    <div>
      {lists.map((list) => (
        <div key={list._id}>
          <div>
            <h3>{list.title}</h3>
            <p>{list.description}</p>

            <div className="List-grid-container">
              {list.items.map((item) => (
                <div className="Top-item-container" key={item._id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
