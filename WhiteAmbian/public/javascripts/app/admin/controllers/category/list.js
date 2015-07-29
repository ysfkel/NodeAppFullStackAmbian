define([

], function() {
	'use strict';
	var controller=function($scope,categories){
		
		console.log('categories',categories)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
		$scope.models={
				collections:{
					categories:[]
				}
			}
			
		if(!!categories){
			$scope.models.collections.categories=categories
				
			
		}
		
		
		
		$scope.controller.actions.save=function(valid){
			console.log('form is valid',valid)
		}
	}
	
	return controller;
});