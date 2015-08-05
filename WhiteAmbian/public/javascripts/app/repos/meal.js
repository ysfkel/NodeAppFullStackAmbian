define([
	'app/modules/app'
], function(app) {
	'use strict';
	var resource=app.factory('mealRepository',['$resource',function($resource){
		
		return $resource('/api/meal/:id',{id:'@id'},{update:{method:'PUT'}} );
	}]);
	
	
	
	return resource;
});



