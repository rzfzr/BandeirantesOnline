(function() {
	'use strict';

	angular
		.module('listing.contact-us', [
			'ionic',
			'ngCordova',
			'listing.common'
		])
		.config(['stateDefinerProvider', function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();
			stateDefiner.define({
				templateUrl: 'scripts/contact-us/contact-us.html',
				controller: 'ContactUsController',
				state: 'app.contact-us',
				url: '/contact-us/:businessId',
				resolve: {
					business: ['$stateParams', 'businessesService', function($stateParams, businessesService) {
						return businessesService.getBusiness($stateParams.businessId);
					}]
				}
			});
		}]);
})();
