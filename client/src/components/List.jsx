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
                <li key={item._id}>{item.title}</li>
              ))}
            </ul>
          </div>
          <TopItems listId={list._id} />
        </div>
      ))}
    </div>
  );
};

export default List;
