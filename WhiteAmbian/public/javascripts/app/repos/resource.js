define([
	    'app/repos/category',
	   'app/repos/cuisine',
	   'app/repos/ingredient',
	   'app/repos/meal',
		'app/repos/repo'
],function(
	   categoryRepository,
	   cuisineRepository,
	   ingredientRepository,
	   mealRepository,
	   Repository
	   ){
	
	   
	   var cuisines=function(cuisineRepository){
		   var data=new Repository(cuisineRepository).getAll().$promise;
		   return data;
	   }
	   var cuisine=function(cuisineRepository,$stateParams){
		   var id=$stateParams.id;
		   if(!!id){
			   	   var data=new Repository(cuisineRepository).getById(id).$promise;
		   return data;
		   }
		   return null;
	
	   }
	   
	   //CATEGORY
	  var categories=function(categoryRepository){
		     var data=new Repository(categoryRepository).getAll().$promise;
		   return data;
	  }
	     var category=function(categoryRepository,$stateParams){
		   var id=$stateParams.id;
		   if(!!id){
			   	   var data=new Repository(categoryRepository).getById(id).$promise;
		   return data;
		   }
		   return null;
	
	   }
	   var ingredients=function(ingredientRepository){
		   var data=new Repository(ingredientRepository).getAll().$promise;
		   return data;
	   }
	   var ingredient=function(ingredientRepository,$stateParams){
		   var id=$stateParams.id;
		   if(!!id){
			     var data =new Repository(ingredientRepository).getById(id).$promise;
		   return data;
		   }
		   return null;
	   }
	   //MEAL
	      var meals=function(mealRepository){
		   var data=new Repository(mealRepository).getAll().$promise;
		   return data;
	   }
	   var meal=function(mealRepository,$stateParams){
		   var id=$stateParams.id;
		   if(!!id){
			     var data =new Repository(mealRepository).getById(id).$promise;
		   return data;
		   }
		   return null;
	   }
	//PUBLIC
	return {
		cuisine:{
			collection:cuisines,
			item:cuisine
		}
		,category:{
			collection:categories,
			item:category
		}
		,ingredient:{
			collection:ingredients,
			item:ingredient
		},
		meal:{
			collection:meals,
			item:meal
		}
	}
})