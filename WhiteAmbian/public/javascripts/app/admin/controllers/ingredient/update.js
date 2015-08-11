define([
	'ngUpload',
	'app/repos/repo'
],function(ngUpload,Repository){
	var controller=function($scope,Upload,ingredientRepository,ingredient,$state){
		$scope.form={
			data:{
				ingredient:(!!ingredient)?ingredient:{}
			},
		}
		$scope.controller={
				actions:{}
			}
			
	 var changeView=function(){
			$state.go('ingredient.list')
		}
		
 
	  $scope.controller.actions.save=function(valid){

		  if(valid===true){
			  var repo=new Repository(ingredientRepository);
			  if(!!$scope.form.data.ingredient._id){
				  var id=$scope.form.data.ingredient._id;
				  repo.update(id,$scope.form.data).$promise.then(function(data){
					  changeView();
				  })
			  }else{
				    repo.add($scope.form.data).$promise.then(function(data){
					  changeView();
				  })
			  }
		  }
	  }
		
	}
	
	return controller;
})