// const mongoose = require('mongoose')
// const Schema = mongoose.Schema


// const userSchema = new Schema({
//     name: {
//         type: String
//     },
//     email: {
//         type: String
//     },
//     phone: {
//         type: String
//     },
//     password: {
//         type: String
//     },
// }, {timestamps: true})


// const User = mongoose.model('User', userSchema)
// module.exports = User;

const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
})

const User = Mongoose.model("user", UserSchema)
module.exports = User