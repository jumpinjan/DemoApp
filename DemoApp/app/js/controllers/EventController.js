'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
	
	    $scope.snippet = '<span stype="color:red">Hello Sweet Ebby Puppy</span>'    
	    $scope.boolValue = false;
	    $scope.sortorder= 'name';
	    $scope.myStyle={color:'red'};
	    $scope.myClass="blue";
	    $scope.buttonDisabled = false;
		$scope.event = {
			name: 'Ebonys awesome event',
			date: new Date(),
			time: '2:00 pm',
			location: {
				address: 'Janice HQ',
				city: 'Columbia',
				province: 'MD'
			},
			imageUrl: '/img/ebby.jpg',
			sessions: [
			           {
			        	   name: 'Tasty Rolling in the snow',
			        	   creatorName: 'Ebony',
			        	   duration: 1,
			        	   level: 'Fun',
			        	   abstract: 'Roll in the snow for fun',
			        	   upVoteCount: 0
			           },
			           {
			        	   name: 'Eating treats',
			        	   creatorName: 'Lizzie',
			        	   duration: 2,
			        	   level: 'Tasty',
			        	   abstract: 'Eat treats no more no less',
			        	   upVoteCount: 0
			           },
			           {
			        	   name: 'Naptime Spot Picking',
			        	   creatorName: 'Wink',
				           duration: 4,
				           level: 'Sleepy',
				           abstract: 'No dogs allowed',
				           upVoteCount: 0
			           }
			           
			           
			           
			           ]
		};
		
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};
	
    }	



);