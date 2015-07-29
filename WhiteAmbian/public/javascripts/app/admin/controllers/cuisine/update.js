define([
     'app/repos/repo'
], function(
	   Repository
) {
	'use strict';
	var controller=function($scope,cuisine,cuisineRepository,$state){
		
		console.log('cuisine',cuisine)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
     $scope.form.data.cuisine=(!!cuisine)?cuisine:{};

		var changeView=function(){
			$state.go('cuisine.list')
		}
		
		$scope.controller.actions.save=function(valid){
			
			var repo=new Repository(cuisineRepository);
			
			if(!!$scope.form.data.cuisine._id){
				var id=$scope.form.data.cuisine._id;
				repo.update(id,$scope.form.data.cuisine).$promise.then(function(data){
			   changeView();
			})
			}else{
				repo.add($scope.form.data.cuisine).$promise.then(function(data){
			   changeView();
			})
			}
			
		}
	}
	
	return controller;
});