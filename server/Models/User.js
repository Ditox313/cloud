const mongoose = require('mongoose');
const ObjectId  = require("mongoose")
const Schema = mongoose.Schema;


// Создаем схему для таблицы users

const User = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    diskSpace: { type: Number, default: 1024 ** 3 * 10 },
    usedSpace: { type: Number, default: 0 },
    avatar: { type: String },
    //files: [{ type: ObjectId, ref: 'File' }]

});


// Создаем таблицу users
module.exports = mongoose.model('User', User);