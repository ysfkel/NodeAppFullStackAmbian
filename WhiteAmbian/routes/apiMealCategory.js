
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

  category.name=req.body.name;
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
		console.log('NODE: PUT ID')
	var id=req.params.id;
	
	  MealCategory.findById(id,function(err,category){
		  
		  if(err){
			  return res.send(500,err)
		  }

		  category.name=req.body.name;
     category.description=req.body.description;
      category.imageUrl=req.body.imageUrl;
		  category.save(function(err,data){
			  if(err){
				  return res.send(500,err);
			  }
			  return res.json(data);
		  })
		  
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



module.exports = router;