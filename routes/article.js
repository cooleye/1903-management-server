var express = require('express');
var router = express.Router();

let Article = require('../model/article');

var cors = require('cors')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',cors(),(req,res)=>{

  // res.header("Access-Control-Allow-Origin","*")
  
  let title = req.body.title;
  let author = req.body.author;
  let content = req.body.content;

  console.log(title,author,content)
  // res.send({
  //   title,author,content
  // })
  let article = new Article({
    title,author,content
  })

  article.save((err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
  })

})

module.exports = router;
