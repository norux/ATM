'use strict';

define(['app'], function(app) {
	app.controller('issueListCtrl', ['$scope',
		function($scope) {
			//TODO test
			$scope.temp_data.push({checked: false, issue_no:"aaa-3333", issue_tit:"dddd", charge: "aaaa", "time": "30m"});
		}
	]);
});