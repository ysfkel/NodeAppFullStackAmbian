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
			
				var cuisines= getValues($scope.form.temp.categories,'_id')
				
				$scope.form.data.cuisines=(!!cuisines && cuisines.length>0)?cuisines:null;
			
			if(!!$scope.form.data.category._id){
				var id=$scope.form.data.category._id;
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
        }
        $scope.controller.localActions.removeFromCollection = function (collection, item, key) {

            angular.forEach(collection, function (data, i) {
                if (data.key === key) {
                    collection.splice(i, 1)
                }
            });

        }
		
	   var getValues = function (items, key) {

            var itemsValues = [];
         var l=null;
            for (var i = 0; l = items.length, i < l; i++) {
                var id = items[i].value[key];
                itemsValues.push(id);

            }
            return itemsValues;

        }
		//
	}
	
	return controller;
});