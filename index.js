require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database");
const bookRouter = require("./routes/book");
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(bookRouter);
app.use(userRouter);

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);

    next();
}
connectDatabase().then(() => {
    app.listen(port, () => {
        console.log("Server running at http://localhost:3002");
    });
});
