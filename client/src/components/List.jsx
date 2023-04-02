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
        <div className="List-grid-container" key={list._id}>
          <div>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
            <ul>
              {list.items.map((item) => (
                <div key={item._id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
