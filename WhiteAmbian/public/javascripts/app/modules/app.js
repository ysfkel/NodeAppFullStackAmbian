define(['angular','require','ui-router','ng-material','ng-animate','ng-resource'],function(ng,req,uiRouter,ngAnitmate,ngMaterial,ngResource){
	
	return ng.module('appModule',['ui.router','ngMaterial','ngResource']) 
// 	.config(function ($mdThemingProvider, $mdIconProvider) {
// 
//                   $mdIconProvider
//                       .defaultIconSet("./Client/libs/angularMaterial/assets/svg/avatars.svg", 128)
//                       .icon("menu", "./Client/libs/angularMaterial/assets/svg/menu.svg", 24)
//                       .icon("share", "./Client/libs/angularMaterial/assets/svg/share.svg", 24)
//                       .icon("google_plus", "./Client/libs/angularMaterial/assets/svg/google_plus.svg", 512)
//                       .icon("hangouts", "./Client/libs/angularMaterial/assets/svg/hangouts.svg", 512)
//                       .icon("twitter", "./Client/libs/angularMaterial/assets/svg/twitter.svg", 512)
//                       .icon("phone", "./Client/libs/angularMaterial/assets/svg/phone.svg", 512);
// 
//                   $mdThemingProvider.theme('default')
//                       .primaryPalette('pink')
//                       .accentPalette('red');
// 
// 
// 
//               })
})