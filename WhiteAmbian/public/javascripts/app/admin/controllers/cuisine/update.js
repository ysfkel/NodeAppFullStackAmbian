define([

], function() {
	'use strict';
	var controller=function($scope,cuisine){
		
		console.log('cuisine',cuisine)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
		if(!!cuisine){
			$scope.form.data.cuisine=cuisine;
		}
		
		
		
		$scope.controller.actions.save=function(valid){
			console.log('form is valid',valid)
		}
	}
	
	return controller;
});