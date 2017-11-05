(function() {
	'use strict';

	angular
		.module('listing.home')
		.factory('homeService', homeService);

	homeService.$inject = [];

	/* @ngInject */
	function homeService() {
		var service = {
			getCityName: getCityName
		};
		return service;

		// ***************************************************************

		function getCityName() {
			var cityName = 'Bandeirantes Online	';
			return cityName;
		}

	}
})();
