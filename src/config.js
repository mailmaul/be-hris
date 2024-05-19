const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://maul:123123mm@hris-db.ahxetks.mongodb.net/?retryWrites=true&w=majority&appName=hris-db");

connect.then(() => {
    console.log("Database connected Successfully");
}).catch(() => {
    console.log("Database can't be connected");
});

const LoginSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;