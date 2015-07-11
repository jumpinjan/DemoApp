'use strict';

eventsApp.controller('EventController',
	function EventController($scope,eventData) {
	
	    $scope.snippet = '<span stype="color:red">Hello Sweet Ebby Puppy</span>'    
	    $scope.boolValue = false;
	    $scope.sortorder= 'name';
	    $scope.myStyle={color:'red'};
	    $scope.myClass="blue";
	    $scope.buttonDisabled = false;
		$scope.event = eventData.getEvent();
		
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};
	
    }	



);