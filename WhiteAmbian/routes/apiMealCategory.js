
var express =require('express');
var router=express.Router();
var mongoose=require('mongoose');
var MealCategory=mongoose.model('MealCategory');
var Cuisine=mongoose.model('Cuisine');
var Meal=mongoose.model('Meal')
var Repo=require('../repository/categoryRepo')
var utillity=require('../utillity/utillity')

router.route('/mealCategory')

.get(function(req,res){
  var callback=function(data){
		if(!!data.error){
			return res.send(data.error,data.message);
		}
		return res.json(data);
	}
	var repo= new Repo.Repository(MealCategory)
    repo.getAll(callback);
  
})



.post(function(req,res){

  var category=new MealCategory();
var cuisines=req.body.cuisines;
  category.name=req.body.category.name;
  category.description=req.body.category.description;
  category.imageUrl=req.body.category.imageUrl;
  
  //category.meals=(!!req.body.meals && req.body.meals.length>0)?req.body.meals:null
  category.save(function(err,data){
    if(err){
      
      return res.send(500,err);
    }
	  var _repo=new Repo.Repository(Cuisine);
	         _repo.addCategoryToCuisine(cuisines,category,function(){
				 
	 });
    res.json(data);
  })
  
})

router.route('/mealCategory/:id')

.get(function(req,res){
	var id=req.params.id;

	MealCategory.findById(id,function(err,doc){
		if(err){
			return res.send(500,err);
		}
		return res.json(doc);
	})
})



.put(function(req,res){
	
	var id=req.params.id;
	var cuisines=req.body.cuisines;

  	   var setProperties=function(category){
		    category.name=req.body.category.name;
            category.description=req.body.category.description;
            category.imageUrl=req.body.category.imageUrl;
     
		          return category;
	         }
	   var repo=new Repo.Repository(MealCategory);
	   repo.update(id,setProperties,function(category){
		
		       if(!!category.error){
			     return res.send(category.error,category.message);
	            }
			   
	        var _repo=new Repo.Repository(Cuisine);
	         _repo.addCategoryToCuisine(cuisines,category,function(){
				 
			 });
		   
		    //  _repo.addCategoryToCuisine(cuisines,category,function(_err,_data){
		    //   if(!!_data.error){
			//  return res.send(category.error,category.message);
		    //    }
			// 
		   // });
		
		return res.json(category);
      })	  
})



.delete(function(req,res){
	  var id=req.params.id;

	  MealCategory.remove({_id:id},function(err,doc){
	
		  if(err){
			  return res.send(500,err);
		  }
		  return res.json(doc.result)
	  })
})

function addCategory(catid){
	
}



module.exports = router;