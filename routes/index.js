const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", controllers.getAllUsers);
router.get("/:id", controllers.getUserById);
router.post("/", controllers.createUser);
router.put("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);

module.exports = router;
