define([
	  'app/repos/resource'
	  ,'app/repos/repo'
	    ,'app/admin/controllers/cuisine/update','app/admin/controllers/cuisine/list'
			 ,'app/admin/controllers/category/update','app/admin/controllers/category/list'
	
],function(dataResource,Repository,cuisineUpdateController,cuisineListController
    
	       ,categoryUpdateController,categoryListController
){
	console.log('dataResource',dataResource.cuisine.collection)
    var cuisine={
		list:{
			templateUrl:'/javascripts/app/admin/templates/cuisine/list.html',
			controller:cuisineListController,
			resolve:{
				cuisines:dataResource.cuisine.collection
			}
		},
		add:{
		    templateUrl:'/javascripts/app/admin/templates/cuisine/update.html',
			controller:cuisineUpdateController,
			resolve:{
				cuisine:dataResource.cuisine.item
				,categories:dataResource.category.collection
			}
		},
		update:{
		    templateUrl:'/javascripts/app/admin/templates/cuisine/update.html',
			controller:cuisineUpdateController,
			resolve:{
				cuisine:dataResource.cuisine.item
				,categories:dataResource.category.collection
			}
		}
	}
	//CATEGORY
	  var category={
		list:{
			templateUrl:'/javascripts/app/admin/templates/category/list.html',
			controller:categoryListController,
			resolve:{
				categories:dataResource.category.collection
			}
		},
		add:{
		    templateUrl:'/javascripts/app/admin/templates/category/update.html',
			controller:categoryUpdateController,
			resolve:{
				category:dataResource.category.item
				,cuisines:dataResource.cuisine.collection
				,categories:dataResource.category.collection
			}
		},
		update:{
		    templateUrl:'/javascripts/app/admin/templates/category/update.html',
			controller:categoryUpdateController,
			resolve:{
				category:dataResource.category.item
				,categories:dataResource.category.collection
				,cuisines:dataResource.cuisine.collection
			}
		}
	}
	
	
	return {
		cuisine:cuisine
		,category:category
	};
})