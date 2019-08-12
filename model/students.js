let {mongoose} = require('../core/db');

let Schema = mongoose.Schema;

let Student = new Schema({
    name:String,
    age:Number,
    gender:Number,
    des:String
})

let StudentModel =  mongoose.model("Student",Student)
module.exports = StudentModel;