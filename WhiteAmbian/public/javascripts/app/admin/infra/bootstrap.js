define(['require','angular','app/modules/app','app/admin/routes/admin'],function(req,ng,appModule,adminRoutes){
	'use strict';
	
	require(['domReady!'],function(document){
		ng.bootstrap(document,['appModule'])
	})
	
	
})