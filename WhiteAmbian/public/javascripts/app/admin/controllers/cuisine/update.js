define([
     'app/repos/repo'
], function(
	   Repository
) {
	'use strict';
	var controller=function($scope,categories,cuisine,cuisineRepository,$state){
		
		console.log('cuisine',cuisine,categories)
	$scope.controller={
			actions:{},
			localActions:{}
		}
	  $scope.form={
			data:{
				
			},
			resources:{
				categories:categories
			},
			temp:{
				categories:[]
			}
		}
     $scope.form.data.cuisine=(!!cuisine)?cuisine:{};

		var changeView=function(){
			$state.go('cuisine.list')
		}
		
		$scope.controller.actions.save=function(valid){
			
			var repo=new Repository(cuisineRepository);
		    var categories=getValues($scope.form.temp.categories)
				
			$scope.form.data.cuisine.mealCategory=(!!categories && categories.length>0)?categories:null;
			console.log($scope.form.data)
			if(!!$scope.form.data.cuisine._id){
				var id=$scope.form.data.cuisine._id;
				
				
				
				repo.update(id,$scope.form.data).$promise.then(function(data){
			   changeView();
			})
			}else{
				repo.add($scope.form.data).$promise.then(function(data){
			   changeView();
			})
			}
			
		}
				//
		$scope.controller.actions.cuisineState_change = function (data, checkedState) {
            if (!!data) {
                var key = data._id;
				console.log (data, checkedState)
                if (!!checkedState) {

                  $scope.controller.localActions.addToCollection($scope.form.temp.categories, data, key);
                } else {
                 $scope.controller.localActions.removeFromCollection($scope.form.temp.categories, data, key)
                }
            }

        }
		//
		//
		$scope.controller.localActions.addToCollection = function (collection, item, key) {
            collection.push({ key: key, value: item });
        }
        $scope.controller.localActions.removeFromCollection = function (collection, item, key) {

            angular.forEach(collection, function (data, i) {
                if (data.key === key) {
                    collection.splice(i, 1)
                }
            });

        }
		
	   var getValueByKey = function (items, key) {

            var itemsValues = [];
         var l=null;
            for (var i = 0; l = items.length, i < l; i++) {
                var id = items[i].value[key];
                itemsValues.push(id);

            }
            return itemsValues;

        }
	   var getValues = function (items) {
        console.log('items',items)
            var itemsValues = [];
         var l=null;
            for (var i = 0; l = items.length, i < l; i++) {
                var value = items[i].value;
                itemsValues.push(value);

            }
			console.log('itemsValues',itemsValues)
            return itemsValues;

        }
		
	}
	
	return controller;
});