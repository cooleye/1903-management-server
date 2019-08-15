var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//图片上传中间件
var multer  = require('multer');
//设置图片上传路径
app.use(multer({ dest: 'public/upload/'}).array('avatar'));

// CORS跨域
var cors = require('cors')
app.use(cors({ "origin": "*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/article', articleRouter);




//设置跨域访问  
// app.all('*', function(req, res, next) {  
//   res.header("Access-Control-Allow-Origin", "*");  
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");  
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
//   res.header("X-Powered-By",' 3.2.1')  
//   res.header("Content-Type", "application/json;charset=utf-8");  
//   next();  
// });  

// 数据库初始化
let {connect} = require('./core/db');
connect();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
