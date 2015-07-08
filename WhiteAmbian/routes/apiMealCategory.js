
var express =require('express');
var router=express.Router();
var mongoose=require('mongoose');
var MealCategory=mongoose.model('MealCategory');

router.route('/mealCategory')

.get(function(req,res){
  console.log('categories api')
  MealCategory.find(function(err,categories){
    if(err){
       res.send(500,err);
    }
    res.json(categories);
     
  });
  
})

.post(function(req,res){
  
  var category=new MealCategory();
  category.name=req.bod.name;
  category.description=req.body.description;
  category.imageUrl=req.body.imageUrl;
  //category.meals=(!!req.body.meals && req.body.meals.length>0)?req.body.meals:null
  category.save(function(err,data){
    if(err){
      return res.send(500,err);
    }
    res.json(data);
  })
  
})


module.exports = router;