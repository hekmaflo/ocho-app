import React, { useState, useEffect } from "react";
import TopItems from "./TopItems";
import axios from "axios";

const List = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(`/api/lists/user/${props.userId}`);
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
            <div className="Top-item-tile">
              <h2>{list.title}</h2>
              <p>{list.description}</p>
            </div>

            <div className="List-grid-container">
              {list.items.map((item) => (
                <div
                  className="Top-item-container"
                  key={item._id}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="item-description">
                    <h3 className="padding">{item.title}</h3>
                    <p className="padding">{item.description}</p>
                  </div>
                  {/* <img
                    className="list-img-profile"
                    src={item.image}
                    alt="moco"
                  /> */}
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
