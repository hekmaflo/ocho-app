const User = require("../models/user");
const List = require("../models/list");
const Item = require("../models/item");

const createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    description: null,
    image: null,
    lists: [],
  });
  try {
    // const exsistingUser = await User.findOne({ email });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("lists");
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Lists

const getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getListsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const lists = await List.find({ user: userId }).populate("items");
    if (lists == null) {
      return res.status(404).json({ message: "Lists not found" });
    }
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getListById = async (req, res) => {
  try {
    const list = await List.findById(req.params.id).populate("items");
    if (list == null) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createList = async (req, res) => {
  const userId = req.params.userId;
  const list = new List({
    title: req.body.title,
    description: req.body.description,
    user: userId,
    items: req.body.items,
  });
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newList = await list.save();
    user.lists.push(newList._id);
    await user.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createListByUser = async (req, res) => {
  const userId = req.params.userId;
  const list = new List({
    title: req.body.title,
    description: req.body.description,
    user: req.body.user,
    // user: userId,
    items: req.body.items,
  });
  try {
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateList = async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.json({ message: "List deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Items

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getItemsByList = async (req, res) => {
  try {
    const listId = req.params.listId;
    const items = await Item.find({ list: listId });
    if (items == null) {
      return res.status(404).json({ message: "Itmes not found" });
    }
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createItem = async (req, res) => {
  const listId = req.params.listId;
  const item = new Item({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    url: req.body.image,
    list: listId,
  });
  try {
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ message: "User not found" });
    }
    const newItem = await item.save();
    list.items.push(newItem._id);
    await list.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  loginUser,
  createUser,
  getListsByUser,
  createListByUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getLists,
  getListById,
  createList,
  updateList,
  deleteList,
  getItems,
  getItemsByList,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
