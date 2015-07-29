
define([
	'app/modules/app'
], function(app) {
	'use strict';
	var resource=app.factory('categoryRepository',['$resource',function($resource){
		
		return $resource('/api/mealCategory/:id',{id:'@id'},{update:{method:'PUT'}} );
	}]);
	
	
	
	return resource;
});






