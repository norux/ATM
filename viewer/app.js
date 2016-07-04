'use strict';

define([
	'angular',
	'uiGrid'
], function(angular) {
	return angular.module('atmApp', ['ui.grid'])
	.controller('mainCtrl', function($scope) {
			$scope.temp_data = [
				{checked: false, issue_no:"WEB-3333", issue_tit:"테스트 데이터01", charge: "이상준", "time": "1h 30m"},
				{checked: false, issue_no:"WEB-3333", issue_tit:"테스트 데이터02", charge: "이상준", "time": "1h 30m"},
				{checked: false, issue_no:"WEB-3333", issue_tit:"테스트 데이터03", charge: "이상준", "time": "1h 30m"},
				{checked: false, issue_no:"WEB-3333", issue_tit:"테스트 데이터04", charge: "이상준", "time": "1h 30m"},
				{checked: false, issue_no:"WEB-3333", issue_tit:"테스트 데이터05", charge: "이상준", "time": "1h 30m"}
			];
			$scope.gridOptions = {
				data: 'temp_data',
				enableGridMenu: true,
				enableColumnMenus: false
			};
		});
	}
);