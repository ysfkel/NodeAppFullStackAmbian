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

module.exports = router;
