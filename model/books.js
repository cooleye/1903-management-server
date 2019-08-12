let {mongoose} = require('../core/db');

let Schema = mongoose.Schema;

let Student = new Schema({
    title:String,
    price:Number,
    desc:String
})

let StudentModel =  mongoose.model("books",Student)
module.exports = StudentModel;