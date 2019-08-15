var express = require('express');
var router = express.Router();
const querystring = require('querystring');
let Article = require('../model/article');



/* 查询文章 */
router.get('/', async (req, res, next) => {

      let id = req.query.id;
      console.log('id:',id)
      if(id){
        let article = await Article.findById(id);
        res.send(article); 
      }else{
        let articles = await Article.find({});
        res.send(articles);
      }
     
});

/** 添加文章 */
router.post('/',(req,res)=>{

    let {title,desc,author,img_url,content} = req.body;

    let article = new Article({
      title,desc,author,img_url,content
    })
  
    article.save((err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
    })

  // let thunk = ""
  // req.on('data',(data)=>{
  //   thunk += data;
  // })

  // req.on('end',()=>{
  //   let formData = decodeURIComponent(thunk)   // 转码
  //   let param = querystring.parse(formData)   // 转成object对象，方便使用

  //    console.log(param["title"])
  //   let article = new Article({
  //     ...param
  //   })
  
  //   article.save((err,result)=>{
  //     if(err){
  //         console.log(err)
  //     }else{
  //         res.send(result)
  //     }
  //   })
  // })

})

/** 删除文章 */
router.delete('/',async(req,res)=>{
  let _id = req.query.id;
  try {
      let result = await Article.findByIdAndRemove(_id)
      res.send(result)
  } catch (error) {
    res.send(error)
  }
  
})

/** 编辑文章 */
router.put('/',async(req,res)=>{
  let _id = req.body._id;
  console.log('编辑文章:',_id);
  if(_id){
    let {author,desc,title,content,img_url} = req.body;
    let result = await Article.findByIdAndUpdate(_id,{
      author,desc,title,img_url,content
    })
    res.send(result);
  }else{
    res.send({msg:"客户端参数错误",body:req.body})
  }

  
})


/*图片上传*/
router.post('/upload',async function(req,res){
	console.log('files>>>>>>>',req.files)

	var img_url = 'http://localhost:3000/upload/' + req.files[0].filename;
	
  res.send({img_url})
})

module.exports = router;
