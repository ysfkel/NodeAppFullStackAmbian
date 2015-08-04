
var Repo=require('../repository/repo')
var utillity=require('../utillity/utillity')

Repo.Repository.prototype.addCategoryToCuisine=function(cuisines,category,callback){

  var cusinesIds=utillity.getPropertyArray(cuisines,'_id');
  

  //ADD CATEGORY TO CUISINES 
  if(!!cusinesIds){
    	this.Model.find({_id:{ $in: cusinesIds},mealCategory:{$ne:null}}).exec(function (err, cuisines) {

  
       cuisines.forEach(function(cuisine){
         console.log('cuisine 33',cuisine)
		   if(!utillity.contains(cuisine.mealCategory,category._id)){
			     cuisine.mealCategory.push(category)
	          cuisine.save();
        }  
	   })
 
   })
   
   //REMOVE CATEGORY FROM ALL CUISINES WHOSE IDS ARE NOT IN cuisineIds
   this.Model.find({_id:{ $nin: cusinesIds},mealCategory:{$ne:null}}).exec(function (err, cuisines) {
     
         cuisines.forEach(function(cuisine){
			     cuisine.mealCategory.pull(category._id)
	          cuisine.save(); 
           console.log('removed cuisine',cuisine)
	       })
   })
  }
  //IF CATEGORY IS UPDATED AND cuisine ids is empty, remove category from all cuisines
  else{
        this.Model.find({mealCategory:{$ne:null},$where:'this.mealCategory.length>0'},function(err,cuisines){
            cuisines.forEach(function(cuisine){
			      cuisine.mealCategory.pull(category._id)
	          cuisine.save(); 
            console.log('removed cuisine',cuisine)
	        })
        })
  }


}


module.exports=Repo;