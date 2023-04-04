import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ListInput from "../components/ListInput";
import List from "../components/List";
import axios from "axios";
const Home = () => {
  const { id } = useParams();

  const [lists, setLists] = useState([]);
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/lists/user/${id}`
        );
        setLists(response.data);
        const allItems = response.data.reduce((acc, list) => {
          return [...acc, ...list.items];
        }, []);
        setItems(allItems);
      } catch (error) {
        console.error(error);
      }
    };
    getLists();
  }, [id, toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDeleteList = async (listId) => {
    try {
      await axios.delete(`http://localhost:3001/api/lists/${listId}`);
      setLists(lists.filter((list) => list._id !== listId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = async (ItemId) => {
    try {
      await axios.delete(`http://localhost:3001/api/items/${ItemId}`);
      setItems(items.filter((item) => item._id !== ItemId));
      handleToggle();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="home">
      <div>
        <div className="user-part">
          <h1 className="home-title">Hola, here is your Homepage 👋</h1>
          {/* <h3>
            Stop scolling like a baboon and make social media more intentional.
          </h3>
          <h3>
            We don't care about your 85+ photos from your vacation trip. Just
            your top 8.
          </h3>
          <h3>
            Showcase your life through Movies, Music, Books, Concerts, Colors,
            Art, Trips...anything you find beautiful through your top 8.
          </h3> */}

          <ListInput userId={id} handleToggle={handleToggle} />
          <p>Your user id is: {id}</p>
        </div>
        <div>
          {lists.map((list) => (
            <div key={list._id} className="List-grid-container-home">
              <div className="List-editor">
                <h3>{list.title}</h3>
                {/* <p>{list.description}</p> */}

                <div>
                  <button
                    className="List-editor-button"
                    onClick={() => handleDeleteList(list._id)}
                  >
                    delete list
                  </button>
                  {/* <Link to={`/item/${list._id}`}>
                    <button className="List-editor-button">Add Item</button>
                  </Link> */}
                  <Link to={`/list/${list._id}`}>
                    <button className="List-editor-button">Edit List</button>
                  </Link>
                </div>
              </div>

              {list.items.map((item) => (
                <div
                  key={item._id}
                  className="Top-item-container-home"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <h3 className="item-title-home">{item.title}</h3>
                  {/* <img className="list-img-home" src={item.image} alt="moco" /> */}
                  {/* <p>{item.description}</p> */}
                  <div>
                    <button
                      className="item-button-home"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      delete item
                    </button>
                  </div>
                </div>
              ))}
              <div className="Add-item">
                <div>
                  <Link to={`/item/${list._id}`}>
                    <button className="List-input-button">
                      <h1 className="Add-item-text">+</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
