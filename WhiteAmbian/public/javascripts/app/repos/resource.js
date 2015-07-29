define([
	    'app/repos/category',
	   'app/repos/cuisine',
		'app/repos/repo'
],function(
	   categoryRepository,
	   cuisineRepository,
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
	}
})