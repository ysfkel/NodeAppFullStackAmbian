define([
     'app/repos/repo'
], function(
	   Repository
) {
	'use strict';
	var controller=function($scope,category,categoryRepository,$state){
		
		console.log('category',category)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
     $scope.form.data.cuisine=(!!category)?category:{};

		var changeView=function(){
			$state.go('category.list')
		}
		
		$scope.controller.actions.save=function(valid){
			
			var repo=new Repository(categoryRepository);
			
			if(!!$scope.form.data.category._id){
				var id=$scope.form.data.category._id;
				repo.update(id,$scope.form.data.category).$promise.then(function(data){
			   changeView();
			})
			}else{
				repo.add($scope.form.data.category).$promise.then(function(data){
			   changeView();
			})
			}
			
		}
	}
	
	return controller;
});