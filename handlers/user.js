const jwt = require("jsonwebtoken");
const Book = require("../database/book");
const { User } = require("../database/user");

const secret = "shjldldasb";


const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists",
            });
        } else {

            await User.create({ name, email, password });

            return res.status(201).send("User created successfully");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).send({
                message: "Invalid Login details",
            });
        } else {
            let token = jwt.sign({ _id: user._id }, secret);
            return res.status(200).send({ token: token });
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

const getUserDetail = async (req, res) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).send("No token provided");
        }
        const decoded = jwt.verify(token, secret);
        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};


const getList = async (req, res) => {
    try {
        const { name } = req.query;

        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.status(200).send({ bookList: user.books });
    } catch (error) {
        return res.status(500).send(error, "Internal Server Error");
    }
};

module.exports = {
    addUser,
    loginUser,
    getUserDetail,
    getList,
};