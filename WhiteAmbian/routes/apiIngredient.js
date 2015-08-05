var express=require('express');
var router=express.Router();

var mongoose=require('mongoose');
var Ingredient=mongoose.model('Ingredient');


router.route('/ingredient')
.get(function(req,res){

	Ingredient.find(function(err,data){
		if(err){
			return res.send(500,err);
		}
		res.json(data);
	});
	
	
	
})

.post(function(req,res){
	console.log('MY ingredient',req.body.ingredient)
	var ingredient=new Ingredient();
	ingredient.name=req.body.ingredient.name;

	ingredient.save(function(err,data){
		if(err){
			return res.send(500,err)
		}
		res.json(data);
	})
	
});

router.route('/ingredient/:id')

.get(function(req,res){
	var id=req.params.id;
	
		Ingredient.findById(id,function(err,data){
			if(err){
				return res.send(500,err);
			}
			res.json(data);
		});

})

.put(function(req,res){
	var id=req.params.id;
	console.log('id',id)
	Ingredient.findById(id,function(err,ingredient){
		if(err){
			return res.send(500,err);
		}

		ingredient.name=req.body.ingredient.name;

		ingredient.save(function(err,data){
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
		Ingredient.remove({_id:id},function(err){
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
