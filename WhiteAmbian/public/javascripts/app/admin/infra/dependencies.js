require.config({
	baseUrl:'/javascripts/',
	paths:{
		'domReady':'libs/domready',
		'angular':'bower_components/angular/angular',
		'ng-resource':'bower_components/angular-resource/angular-resource.min',
		'ui-router':'bower_components/angular-ui-router/release/angular-ui-router.min',
		'ng-material':'bower_components/angular-material/angular-material.min',
		'ng-animate':'bower_components/angular-animate/angular-animate',
		'ng-aria':'bower_components/angular-aria/angular-aria.min',
	    'ngUpload':'bower_components/ng-file-upload/ng-file-upload.min',
		'ngUploadShim':'bower_components/ng-file-upload/ng-file-upload-shim.min'
		
	}
	,shim:{
		'angular':{
			exports:'angular'
		},
		'ng-resource':{
		    deps:['angular'],
			exports:'ng-resource'	
		},
		'ngUpload':{
		    deps:['angular'],
			exports:'ng-resource'
		},
		'ui-router':{
			deps:['angular'],
			exports:'ngUpload'
		},
		'ngUploadShim':{
			deps:['angular,ngUpload'],
			exports:'ngUploadShim'
		},
		'ng-material':{
			deps:['angular','ng-animate'],
			exports:'ng-material'
		},
		'ng-animate':{
			deps:['angular'],
			exports:'ng-animate'
		},
		 'ng-aria':{
            deps: ['angular'],
            exports: 'ng-aria'
        },
		
	},
	
	//kickstart application
	deps:['app/admin/infra/bootstrap','ng-aria']
		
	})
	
	
	
// 	
// require([ 'angular','app/admin/infra/bootstrap'], function (ng,bootstrap) {
//     require(["angular"]);
// });
