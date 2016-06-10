
var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

app.controller('myCtrl', function($scope) {
  $scope.list = [ ];
  $scope.objIndex = null;
  	$scope.popup = {
    	opened: false
  	};

  $scope.submit = function(person) {      	  	  		  		   	
  	if($scope.objIndex==null ){
  		$scope.list.push(person)  		
  	}else{  		
  		$scope.list[$scope.objIndex] = person
  		$scope.objIndex =null;
  	}
  	
  	$scope.person= { 
  		pName: '',
  		pMail: '',
  		pContact: '',
  		pDob:  new Date()
  	}
  };
  $scope.edit = function(person, index){  	
  	$scope.person = angular.copy(person)
  	$scope.objIndex = index;  	
  };
  $scope.remove = function(item){  	
  	$scope.list.splice(item, 1); 
  };
  $scope.open =function(){
  		$scope.popup.opened = true;
  }

  // custom slider
  $scope.images = [{
    src: 'slid1.jpg',
    title: 'Pic 1'
  }, {
    src: 'slid2.jpg',
    title: 'Pic 2'
  }, {
    src: 'slid3.jpg',
    title: 'Pic 3'
  }];
});

  app.directive('mySlider', function($timeout) {    
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        images: '='
      },
      link: function(scope, elem, attrs) {

        scope.currentIndex = 0; 
        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;          
        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;          
        };

        scope.$watch('currentIndex', function() {
          scope.images.forEach(function(image) {
            image.visible = false; 
          });
          scope.images[scope.currentIndex].visible = true; 
        });

        var timer;
        var autoSlide = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(autoSlide, 1000);
          }, 1000);
        };
        autoSlide();
      },
      templateUrl: 'templates/templateurl.html'
    };    
  });


