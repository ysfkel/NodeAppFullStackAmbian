var express=require('express');
var router=express.Router();

var mongoose=require('mongoose');
var Cuisine=mongoose.model('Cuisine');
var Repo=require('../repository/cuisineRepo')

router.route('/cuisine')

.get(function(req,res){

    var callback=function(data){
		if(!!data.error){
			return res.send(data.error,data.message);
		}
		return res.json(data);
	}
	var repo= new Repo.Repository(Cuisine)
    repo.getAll(callback);
})

.post(function(req,res){

	var cuisine=new Cuisine();
	cuisine.name=req.body.name;

	new Repo.Repository(Cuisine).add(cuisine,function(data){
		if(!!data.error){
			return res.send(data.error,data.message);
		}
		return res.json(data);
	})

})


router.route('/cuisine/:id')

.get(function(req,res){
	var id=req.params.id;
	new Repo.Repository(Cuisine).getById(id,function(data){
		if(!!data.error){
			return res.send(data.error,data.message);
		}
		return res.json(data);
	})
})

.put(function(req,res){
	var id=req.params.id;
	

	var setProperties=function(cuisine){
		cuisine.name=req.body.name;
        cuisine.mealCategories=(!!req.mealCategories && req.body.mealCategories.length>0)?req.body.mealCategories:null;
		return cuisine;
	}
	new Repo.Repository(Cuisine).update(id,setProperties,function(data){
		
		if(!!data.error){
			return res.send(data.error,data.message);
		}
		return res.json(data);
	})
	
})



.delete(function(req,res){
	  var id=req.params.id;

	 new Repo.Repository(Cuisine).remove(id,function(data){
		
		if(!!data.error){
			return res.send(data.error,data.message);
		}
		return res.json(data.result);
	})
})

module.exports=router;

