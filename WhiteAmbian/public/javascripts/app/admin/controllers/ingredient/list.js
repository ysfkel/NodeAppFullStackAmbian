define([],function(){
	var controller=function($scope,ingredients){
		
			$scope.models={
				collections:{
					ingredients:[]
				}
			}
			
			console.log('ingredients',ingredients)
		if(!!ingredients){
			$scope.models.collections.ingredient=ingredients
		}
		
	}
	
	return controller;
})