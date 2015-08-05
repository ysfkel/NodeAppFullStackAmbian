define([
     'app/repos/repo'
	 ,'app/utillity/utillity'
], function(
	   Repository
	   ,utillity
) {
	'use strict';
	var controller=function($scope,meal,cuisines,ingredients,mealRepository,$state){
		
		console.log('meal',meal,cuisines,ingredients)
		$scope.controller={
			actions:{}
		}
		$scope.form={
			data:{
				meal:(!!meal)?meal:{mealIngredients:[]}
			},
			resources:{
				cuisines:cuisines
				,ingredients:ingredients
			}
		}
		   $scope.auto={};
     
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
		
	    $scope.autoCompleteSearch = function () {
          //  form.selected.State.Neighborhoods
        }
        //
		//  $scope.auto.searchTextChange = function (text) {
        //    
		//       $scope.tempData=text;
	   // 
        // }
        // 
		$scope.controller.actions.add_ingredient=function(){
			console.log('tempData',$scope.auto.searchText)
			addIngredient($scope.auto.searchText);
		}
        // $scope.auto.searchTextChange = function (text) {
        //    
		//   if(!!text){
		// 	   if(!$scope.form.data.meal.mealIngredients){
		// 		    $scope.form.data.meal.mealIngredients=[];
		// 	      }
		// 		  
		// 	  if(!utillity.contains($scope.form.data.meal.mealIngredients,text)){
		// 		  $scope.form.data.meal.mealIngredients.push(text)
		// 	  }
		//   }
		//       console.log('      $scope.form.data.meal.mealIngredients',      $scope.form.data.meal.mealIngredients)
        // }

        $scope.auto.selectedItemChange = function (item)
		 {
			   console.log('itemitem',item)
          // if(!!item && !!item.name)
		   // {
			//  addIngredient(item.name);
            // }
        }
		
		var addIngredient=function(item)
		{
			
			console.log('$scope.auto.searchText',$scope.auto.searchText)
			 if(!$scope.form.data.meal.mealIngredients)
			  {
				    $scope.form.data.meal.mealIngredients=[];
			  }
              $scope.form.data.meal.mealIngredients.push(item)
		   // $scope.auto.searchText='';
		      console.log('INGREDIENT',$scope.form.data.meal.mealIngredients)
		}
			
	}
	
	return controller;
});