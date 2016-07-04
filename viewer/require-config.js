'use strict';

requirejs.config({
	paths: {
		'angular': 'lib/components/angular/angular.min',
		'uiGrid': 'lib/components/angular-ui-grid/ui-grid.min',
		'app': 'app'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},

		'uiGrid': ['angular'],
		'app': {
			deps: ['angular']
		}
	}
});

requirejs([
		'angular',
		'app',

		'issueList/index',
		'issueTimer/index'
	],
	function(angular) {
		angular.element().ready(function() {
			angular.bootstrap(document, ['atmApp']);
		});
	}
);