var express = require('express');
var router = express.Router();

let Student = require('../model/students');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addstu',(req,res) =>{

  let stu = new Student({
      name:"孙小兵2",
      age:22,
      gender:1,
      desc:"赌神1111111111"
  })
  
  stu.save((err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })

})

module.exports = router;
