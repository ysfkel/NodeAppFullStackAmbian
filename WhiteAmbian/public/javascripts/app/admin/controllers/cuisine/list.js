define([

], function() {
	'use strict';
	var controller=function($scope,cuisines){
		
		console.log('cuisine',cuisines)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
		$scope.models={
				collections:{
					cuisines:[]
				}
			}
			
		if(!!cuisines){
			$scope.models.collections.cuisines=cuisines
				
			
		}
		
		
		
		$scope.controller.actions.save=function(valid){
			console.log('form is valid',valid)
		}
	}
	
	return controller;
});