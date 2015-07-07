var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var User=mongoose.model('User');

/* GET users listing. */
router.get('/userlist', function(req, res, next) {
  
  User.find('users',function(err,users){
    if(err){
      res.send(500,err);
    }
    res.json(users)
  })
  
 // res.send('respond with a resource');
});

router.post('/adduser',function(req,res){
  console.log(req.body)
  
  var user=new User();
  user.name=req.body.name;
  user.email=req.body.email;
  user.password=req.body.password;
  
  user.save(function(err,doc){
    if(err){
      return res.send(500,err);
    }
     res.json(doc);
  })
  // User.save(req.body)
})

module.exports = router;
