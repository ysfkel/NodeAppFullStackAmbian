var express=require('express');
var router=express.Router();

var mongoose=require('mongoose');
var Meal=mongoose.model('Meal');


router.route('/meal')
.get(function(req,res){

	Meal.find(function(err,data){
		if(err){
			return res.send(500,err);
		}
		res.json(data);
	});
	
	
	
})

.post(function(req,res){
	
	var meal=new Meal();
	meal.name=req.body.name;
	meal.price=req.body.price;
	meal.imageUrl=req.body.imageUrl;
	
	meal.ingredients=(!!req.body.ingredients && req.body.ingredients.length>0)?req.body.ingredients:null;
	meal.save(function(err,data){
		if(err){
			return res.send(500,err)
		}
		res.json(data);
	})
	
});

router.route('/meal/:id')

.get(function(req,res){
	var id=req.params.id;
	
		Meal.findById(id,function(err,data){
			if(err){
				return res.send(500,err);
			}
			res.json(data);
		});

})

.put(function(req,res){
	var id=req.params.id;
	Meal.findById(id,function(err,meal){
		if(err){
			return res.send(500,err);
		}

		meal.name=req.body.name;
		meal.imageUrl=req.body.imageUrl;
		meal.price=req.body.price;
		meal.ingredients=(!!req.body.ingredients && req.body.ingredients.length>0)?req.body.ingredients:null
		meal.save(function(err,data){
			if(err){
				return res.send(500,err);
			}
	
			res.json(data);
		});
	});
})

.delete(function(req,res){
	var id=req.params.id;
	if(!!id){
		Meal.remove({_id:id},function(err){
			if(err){
				return res.send(err);
				
			}
			res.json({msg:'deleted'})
		})
	}
	else{
		return res.send(400,'Bad Request');
	}
	
})



module.exports=router;
