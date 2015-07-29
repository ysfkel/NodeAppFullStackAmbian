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
		
		
		     $urlRouterProvider.otherwise("/notfound");
			
		})
})