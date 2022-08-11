const mongoose = require("mongoose");

async function connectDatabase() {
    const dbUri = "mongodb+srv://Irshad:ljxvr4UtmpT1X0AC@cluster0.81al9wp.mongodb.net/book?retryWrites=true&w=majority";
    try {
        await mongoose.connect(dbUri, { useNewUrlParser: true });
        console.log("Database connection successful");
    } catch (ex) {
        console.error("Error in initiating a database connection", ex.message);
        throw ex;
    }
}

module.exports = connectDatabase;
