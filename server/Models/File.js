const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const File = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type:String},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
 
    user: {type: ObjectId, ref: 'User'},
    parent: {type: ObjectId, ref: 'File'},
    childs: [{type: ObjectId, ref: 'File'}],
})

module.exports = mongoose.model('File', File)
