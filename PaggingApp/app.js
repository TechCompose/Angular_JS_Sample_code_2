var uiRouteDemo = angular.module('uiRouterDemo', ['ui.router']);

uiRouteDemo.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home/home.html"    
    }).state('project',{
    	url: "/projects",
      	templateUrl: "partials/project/project.html"    
	}).state('services',{
		url: "/services",
      	templateUrl: "partials/services/services.html"    
	}).state('contact',{
		url: "/contact",
      	templateUrl: "partials/contact/contact.html"    
	}).state('about',{
		url: "/about",
      	templateUrl: "partials/about/about.html"    
	});
});

