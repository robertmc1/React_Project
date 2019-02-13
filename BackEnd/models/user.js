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
    Surname: {
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
    telephone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 15,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(true),
            message: '{VALUE} is not a valid User, only characters (A-Z, a-z)'
        }
    },
    roleId: {
        type: String,
        required: true
    }
}, { strict: true });


const UserModel = mongoose.model('user', UserSchema)
module.exports = {UserSchema, UserModel};