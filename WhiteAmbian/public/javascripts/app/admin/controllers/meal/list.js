define([

], function() {
	'use strict';
	var controller=function($scope,meals){
		
		console.log('meals',meals)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
		$scope.models={
				collections:{
					meals:[]
				}
			}
			
		if(!!meals){
			$scope.models.collections.meals=meals
				
			
		}
		
		
		
		$scope.controller.actions.save=function(valid){
			console.log('form is valid',valid)
		}
	}
	
	return controller;
});