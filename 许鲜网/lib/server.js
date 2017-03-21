
var app = angular.module("myApp",['ui.router'])
				.config(['$stateProvider', '$urlRouterProvider', 
				function ($stateProvider, $urlRouterProvider) {
             	 $urlRouterProvider.when("", "/home");
		            $stateProvider.state('home', {
		                url: '/home',
		                templateUrl: './home/home.html',
		               	controller: 'homeCtrl'
		            }).state('shop',{
		            	url: '/shop',
		                templateUrl: './shop/shop.html'
		            })
		            .state('cart', {
		                url: '/cart',
		                templateUrl: './cart/cart.html'
		            }).state('mine', {
		                url: '/mine',
		                templateUrl: './mine/mine.html'
		            })
		            //搜索路由
		            .state('search', {
		                url: '/search',
		                templateUrl: './search/search.html'
		            })
		        }]);
