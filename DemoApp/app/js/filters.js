'use strict';

eventsApp.filter('durations', function() {
	return function(duration) {
		
		switch(duration) {
		case 1:
			return "Fur ever";
		case 2:
			return "30 seconds or 30 days";
		case 3:
			return "There is no case 3";
		case 4:
			return "All Day Every Day";
		
		
		
		}
		
		
	}
})




