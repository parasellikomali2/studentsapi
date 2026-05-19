const express = require("express");

const router = express.Router();

const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    register,
    login
} = require("../controllers/userController");

const verifyToken = require("../middleware/verifytoken");


//crud routes
router.post("/cars/add", createUser);

router.get("/users", verifyToken, getUsers);

router.get("/users/:id", getSingleUser);

router.put("/cars/update/:id", updateUser);

router.delete("/cars/:id", deleteUser);


//auth routes
router.post("/register", register);

router.post("/login", login);

module.exports = router;