const mongoose = require('mongoose');

const UserSchema = require('./user');

const CitySchema = mongoose.Schema({
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
    address: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator:  (address) => Boolean(name.match(/^[0-9A-Za-z \-,]+$/)),
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
            validator: (telephone) => Boolean(true),
            message: '{VALUE} is not a valid City, only characters (A-Z, a-z)'
        }
    },
}, { strict: true });


const CityModel = mongoose.model('user', CitySchema);
module.exports = {CitySchema, CityModel};