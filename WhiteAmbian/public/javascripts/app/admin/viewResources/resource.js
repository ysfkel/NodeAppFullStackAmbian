define([
	  'app/repos/resource'
	  ,'app/repos/repo'
	    ,'app/admin/controllers/cuisine/update'
		    ,'app/admin/controllers/cuisine/list'
	
],function(dataResource,Repository,cuisineUpdateController,cuisineListController){
	console.log('dataResource',dataResource.cuisine.collection)
    var cuisine={
		list:{
			templateUrl:'/javascripts/app/admin/templates/cuisine/list.html',
			controller:cuisineListController
		},
		add:{
		    templateUrl:'/javascripts/app/admin/templates/cuisine/update.html',
			controller:cuisineUpdateController,
			resolve:{
				cuisines:dataResource.cuisine.collection
			}
		},
		update:{
		    templateUrl:'/javascripts/app/admin/templates/cuisine/update.html',
			controller:cuisineUpdateController,
			resolve:{
				cuisine:dataResource.cuisine.item
			}
		}
	}
	
	return {
		cuisine:cuisine
	};
})