const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {type: String, required: true, maxLength: 150, minLength: 1},
    user: {type: String, required: true, maxLength: 30, minLength: 1},
    added: {type: Date, default: () => Date.now(), immutable: true}
})

//export model

module.exports = mongoose.model("Message", MessageSchema)