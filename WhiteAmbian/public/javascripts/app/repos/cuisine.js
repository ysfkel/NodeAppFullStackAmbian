define([
	'app/modules/app'
], function(app) {
	'use strict';
	var resource=app.factory('cuisineRepository',['$resource',function($resource){
		
		return $resource('/api/cuisine/:id',{id:'@id'},{update:{method:'PUT'}} );
	}]);
	
	
	
	return resource;
});



