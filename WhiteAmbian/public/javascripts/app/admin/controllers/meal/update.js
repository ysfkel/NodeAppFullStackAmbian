define([
     'app/repos/repo'
], function(
	   Repository
) {
	'use strict';
	var controller=function($scope,meal,mealRepository,$state){
		
		console.log('meal',meal)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				
			}
		}
     $scope.form.data.meal=(!!meal)?meal:{};

		var changeView=function(){
			$state.go('meal.list')
		}
		
		$scope.controller.actions.save=function(valid){
			
			var repo=new Repository(mealRepository);
			
			if(!!$scope.form.data.meal._id){
				var id=$scope.form.data.meal._id;
				repo.update(id,$scope.form.data.meal).$promise.then(function(data){
			   changeView();
			})
			}else{
				repo.add($scope.form.data.meal).$promise.then(function(data){
			   changeView();
			})
			}
			
		}
	}
	
	return controller;
});