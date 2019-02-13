const mongoose = require('mongoose');

const UserSchema = require('./user');

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not a valid User, only characters (A-Z, a-z)'
        }
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(true),
            message: '{VALUE} is not a valid User, only characters (A-Z, a-z)'
        }
    },
    teamId: {
        type: String,
        required: true
    }
}, { strict: true });


const UserModel = mongoose.model('user', UserSchema)
module.exports = {UserSchema, UserModel};