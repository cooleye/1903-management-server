//加载mongoose
let mongoose = require('mongoose');
const consola = require('consola')
const autoIncrement = require('mongoose-auto-increment')

//数据库连接地址：
const  URL = "mongodb://localhost:27017/1903demo";

const connect = () =>{

	mongoose.connect(URL,{
		useCreateIndex: true,
		useNewUrlParser: true,
		promiseLibrary: global.Promise
	});

	mongoose.connection.on('connected',function(){
		
		consola.ready('数据库连接成功!',URL)
	})

	mongoose.connection.on('error',function(err){
		console.log('连接错误',err)
	})

	mongoose.connection.on('disconnected',function(){
		console.log('连接断开。。。')
	})

	autoIncrement.initialize(mongoose.connection);

	return mongoose;
}

module.exports.connect = connect;
module.exports.mongoose = mongoose;
