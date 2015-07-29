define([
	   'app/repos/cuisine'
		,'app/repos/repo'
],function(
	   cuisineRepository
	   ,Repository
	   ){
	
	   var cuisines=function(cuisineRepository){
		   var data=new Repository(cuisineRepository).getAll().$promise;
		   return data;
	   }
	   var cuisine=function(cuisineRepository,$stateParams,$http){
		   var id=$stateParams.id;
		   console.log('ID IS',id)
		   
		   
		   var data=new Repository(cuisineRepository).getById(id).$promise;
		   return data;
	   }
	
	return {
		cuisine:{
			collection:cuisines,
			item:cuisine
		}
	}
})