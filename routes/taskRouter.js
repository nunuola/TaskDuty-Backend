const express = require("express");

const { createTask, getALLtask, editTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/create", createTask);
router.get("/get", getALLtask);
router.patch("/:id", editTask)
router.delete("/:id", deleteTask)

module.exports = router;
