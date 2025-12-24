const express = require("express")
const router = express.Router();
const controller = require("../controllers/todo.controller")
const { authenticate } = require("../middleware/auth.middleware")

router.use(authenticate)
router.post("/", controller.create)
router.get("/", controller.list)
router.put("/:id", controller.update)
router.patch("/:id", controller.toggle)
router.delete("/:id", controller.trash)

module.exports = router