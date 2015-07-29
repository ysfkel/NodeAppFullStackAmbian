var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
 var User=mongoose.model('User')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin2',function(req,res,next){
  res.render('admin2',{title:'Admin'})
})

router.get('/admin',function(req,res,next){
  res.render('admin',{title:'admin'})
})

router.get('/admi')

router.get('/about',function(req,res,next){
  res.render('about',{title:'About White Ambian'})
})


router.get('/usersList',function(req,res){
 
    User.find(function(err,users){
      if(err){
        return res.send(500,err);
      }
      console.log('Users',users[0].name)
      res.render('users',{
        "users":users
      });
    })
})


router.get('/add-user',function(req,res){
 
    res.render('newuser',{
      ttle:'Add new user'
    })
})

router.post('/add-user',function(req,res){
    var user=new User();
    user.name=req.body.name;
    user.email=req.body.email;
    user.password=req.body.password;
    user.save(function(err,user){
      if(err){
        return res.send(500,err)
      }
      console.log('new users added successfully')
      return res.redirect('usersList')
    })
})



module.exports = router;

