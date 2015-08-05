define([
	'app/modules/app'
], function(app) {
	'use strict';
	var resource=app.factory('ingredientRepository',['$resource',function($resource){
		
		return $resource('/api/ingredient/:id',{id:'@id'},{update:{method:'PUT'}} );
	}]);
	
	
	
	return resource;
});



