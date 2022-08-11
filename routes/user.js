const express = require("express");
const {
    addUser,
    loginUser,
    getUserDetail,
    getList,
} = require("../handlers/user");
const userRouter = express.Router();

userRouter.post("/addUser", addUser);
userRouter.post("/loginUser", loginUser);
userRouter.get("/getUserDetail", getUserDetail);
userRouter.get("/getList", getList);

module.exports = userRouter;