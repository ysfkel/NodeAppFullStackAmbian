var express=require('express');
var router=express.Router();

var mongoose=require('mongoose');
var Cuisine=mongoose.model('Cuisine');


router.route('/cuisine')

.get(function(req,res){
	
	Cuisine.find(function(err,doc){
		if(err){
			return res.send(500,err)
		}
		
		return res.json(doc)
		
	})
})

.post(function(req,res){
	
	var cuisine=new Cuisine();
	cuisine.name=req.body.name;
	
	cuisine.save(function(err,data){
		if(err){
			return res.send(500,err);
		}

		return res.json(data);
	})
	
	
})


router.route('/cuisine/:id')

.get(function(req,res){
	
	var id=req.params.id;
	
	Cuisine.findById(id,function(err,doc){
		if(err){
			return res.send(500,err);
		}
		return res.json(doc);
	})
})

.put(function(req,res){
	
	var id=req.params.id;
	
	  Cuisine.findById(id,function(err,cuisine){
		  
		  if(err){
			  return res.send(500,err)
		  }

		  cuisine.name=req.body.name;
		  cuisine.mealCategories=(!!req.mealCategories && req.body.mealCategories.length>0)?req.body.mealCategories:null;
		  cuisine.save(function(err,data){
			  if(err){
				  return res.send(500,err);
			  }
			  return res.json(data);
		  })
		  
	  })
	
})



.delete(function(req,res){
	  var id=req.params.id;

	  Cuisine.remove({_id:id},function(err,doc){
	
		  if(err){
			  return res.send(500,err);
		  }
		  return res.json(doc.result)
	  })
})

module.exports=router;

