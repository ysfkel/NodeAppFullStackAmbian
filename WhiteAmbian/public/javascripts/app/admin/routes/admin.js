define(['app/modules/app','ui-router'
		//VIEW RESOURCES
		,'app/admin/viewResources/resource'
		
	],function(app,uiRouter
		 //VIEW RESOURCES
		 ,viewResources
	 ){

		app.config(function($stateProvider,$urlRouterProvider){
			
		
		$stateProvider
		.state('cuisine',{
			abtract:true,
			templateUrl:'/javascripts/app/admin/templates/layout.html'
		})
		.state('cuisine.list',{
			url:'/cuisine/list',
				views:{
					'view-container':viewResources.cuisine.list
				}
			
		})
		.state('cuisine.add',{
			url:'/cuisine/add',
			views:{
					'view-container':viewResources.cuisine.add
			}
			
		})
		.state('cuisine.update',{
			url:'/cuisine/update/:id'
			,views:{
				'view-container':viewResources.cuisine.update
			}
		})
		
		//CATEGORY
			.state('category',{
			abtract:true,
			templateUrl:'/javascripts/app/admin/templates/layout.html'
		})
		.state('category.list',{
			url:'/category/list',
				views:{
					'view-container':viewResources.category.list
				}
			
		})
		.state('category.add',{
			url:'/category/add',
			views:{
					'view-container':viewResources.category.add
			}
			
		})
		.state('category.update',{
			url:'/category/update/:id'
			,views:{
				'view-container':viewResources.category.update
			}
		})
		//Ingredient
		.state('ingredient',{
			abtract:true,
			templateUrl:'/javascripts/app/admin/templates/layout.html'
		})
		.state('ingredient.list',{
			url:'/ingredient/list',
				views:{
					'view-container':viewResources.ingredient.list
				}
			
		})
		.state('ingredient.add',{
			url:'/ingredient/add',
			views:{
					'view-container':viewResources.ingredient.add
			}
			
		})
		.state('ingredient.update',{
			url:'/ingredient/update/:id'
			,views:{
				'view-container':viewResources.ingredient.update
			}
		})
		//Meal
		.state('meal',{
			abtract:true,
			templateUrl:'/javascripts/app/admin/templates/layout.html'
		})
		.state('meal.list',{
			url:'/meal/list',
				views:{
					'view-container':viewResources.meal.list
				}
			
		})
		.state('meal.add',{
			url:'/meal/add',
			views:{
					'view-container':viewResources.meal.add
			}
			
		})
		.state('meal.update',{
			url:'/meal/update/:id'
			,views:{
				'view-container':viewResources.meal.update
			}
		})
		
		     $urlRouterProvider.otherwise("/notfound");
			
		})
})