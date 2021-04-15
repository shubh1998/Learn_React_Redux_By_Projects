const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

//----------- Define User Schema -----------------
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true, minlength: 6, maxlength: 32, trim: true,},
    age: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
    auth_token: {type: String}
}, {
  timestamps: true  
});


//------- Virtual Relation mapping of user with TASK model (Used to fetch all tasks to a specific user)-------------
userSchema.virtual("notes", {
    ref: 'Notes',
    localField: '_id', 
    foreignField: 'user_id'
})


//-------To hide private data like password and auth_token---------
userSchema.methods.toJSON = function(){
    let userObject = this.toObject();
    delete userObject.password;
    delete userObject.auth_token;
    // console.log(userObject);
    return userObject;
}


//-------Generate auth token---------
userSchema.methods.generateJWTtoken = async function(){
    const user = this;
    const token = jwt.sign({ _id: user._id.toString(), role: "USER" }, process.env.JWT_SECRET);
    return token;
}


//-------Function Run before saving values------------
userSchema.pre('save', async function(next) {
    if (this.email) {
        if (!validator.isEmail(this.email || '')) {
            throw badRequestError(res, "Not a valid email address!");
        }
    }
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})


const User = mongoose.model("User", userSchema);

module.exports = User