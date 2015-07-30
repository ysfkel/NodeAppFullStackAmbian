define([
     'app/repos/repo'
], function(
	   Repository
) {
	'use strict';
	var controller=function($scope,cuisines,category,categories,categoryRepository,$state){
		
		console.log('category',category,cuisines)
		$scope.controller={
			actions:{},
			localActions:{}
		}

		$scope.form={
			data:{
				
			},
			resources:{
				cuisines:cuisines
			},
			temp:{
				categories:[]
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
     $scope.form.data.category=(!!category)?category:{};

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
		
		//
		$scope.controller.actions.categoryState_change = function (data, checkedState) {
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
  console.log('collection', collection)
        }
        $scope.controller.localActions.removeFromCollection = function (collection, item, key) {

            angular.forEach(collection, function (data, i) {
                if (data.key === key) {
                    collection.splice(i, 1)
  console.log('collection r', collection)
                }
            });

        }
		
		//
	}
	
	return controller;
});