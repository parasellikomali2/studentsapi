const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//create user
const createUser = async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.send(user);

    } catch (err) {

        res.send(err);

    }

}


//get all users
const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.send(users);

    } catch (err) {

        console.log(err);

    }

}


//get single user
const getSingleUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        res.send(user);

    } catch (err) {

        console.log(err);

    }

}


//update user
const updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.send(user);

    } catch (err) {

        console.log(err);

    }

}


//delete user
const deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.send("user deleted");

    } catch (err) {

        console.log(err);

    }

}


//register
const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.send("user already exists");
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashpassword
        });

        await user.save();

        res.send("user registered successfully");

    } catch (err) {

        console.log(err);

    }

}


//login
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.send("user not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send("invalid password");
        }

        const token = jwt.sign(
            { id: user._id },
            "secretkey",
            { expiresIn: "1h" }
        );

        res.send({
            message: "login successful",
            token
        });

    } catch (err) {

        console.log(err);

    }

}

module.exports = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    register,
    login
}