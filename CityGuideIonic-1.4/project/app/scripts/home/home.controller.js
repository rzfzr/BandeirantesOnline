(function() {
	'use strict';

	angular
		.module('listing.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['businessesService', 'state', '$ionicSlideBoxDelegate', 'homeService'];

	function HomeController(businessesService, state, $ionicSlideBoxDelegate, homeService) {
		var vm = angular.extend(this, {
			cityName: '',
			categories: [],
			businesses: [],
			navigate: navigate,
			loadBusinessesByCategory: loadBusinessesByCategory
		});

		(function activate() {
			loadFeaturedBusinesses();
			loadCategories();
			loadCityName();
		})();

		function loadBusinessesByCategory(item) {
			state.go('app.businesses', { category: item });
		}

		function navigate(businessId) {
			state.go('app.business-details', { businessId: businessId });
		}

		function loadCategories() {
			businessesService.getCategories().then(function(categories) {
				vm.categories = categories;
			});
		}

		function loadFeaturedBusinesses() {
			businessesService.getBusinessesByCategory('All', true)
				.then(function(businesses) {
					vm.businesses = businesses;
					$ionicSlideBoxDelegate.update();
					return businesses
				})
		}


		function loadCityName() {
			vm.cityName = homeService.getCityName() || 'City';
		}
	}
})();
