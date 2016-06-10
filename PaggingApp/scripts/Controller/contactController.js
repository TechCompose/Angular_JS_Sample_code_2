angular.module('uiRouterDemo').controller('contactController',function($scope,$timeout){
	$scope.msg_success = false
	$scope.subjects = ["Discussion", "Queries", "Question Answering"];

	var target = angular.element('#appBusyIndicator');	
	$scope.submit_data = function(contact){				
		$scope.msg_success = true		
		$scope.user = {
			name: '',
			email: '',
			selectedSubject: '',
			contactDecs: ''
		}				
		$timeout(function() {        			
        	$scope.msg_success = false        	
    	}, 1000);		 	
    		
	};
});