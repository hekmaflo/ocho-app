const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.post("/login", controllers.loginUser);
router.post("/register", controllers.createUser);

router.get("/users", controllers.getAllUsers);
router.get("/users/:id", controllers.getUserById);
router.put("/users/:id", controllers.updateUser);
router.delete("/users/:id", controllers.deleteUser);

router.get("/lists/user/:userId", controllers.getListsByUser);
router.post("/lists/user/:userId", controllers.createList);
router.get("/lists", controllers.getLists);
router.get("/lists/:id", controllers.getListById);
router.post("/lists", controllers.createList);
router.put("/lists/:id", controllers.updateList);
router.delete("/lists/:id", controllers.deleteList);

router.get("/items", controllers.getItems);
router.get("/items/list/:id", controllers.getItemsByList);
router.get("/items/:id", controllers.getItemById);
router.post("/items/list/:listId", controllers.createItem);
router.put("/items/:id", controllers.updateItem);
router.delete("/items/:id", controllers.deleteItem);

module.exports = router;
