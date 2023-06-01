const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Lastname: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    City: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    Zip: {
        type: Number,
        require: true
    }
})

const User = new mongoose.model("USER" , userSchema);

module.exports = User;


