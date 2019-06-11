const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    }
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

const User = mongoose.model('user',UserSchema);
module.exports = User;