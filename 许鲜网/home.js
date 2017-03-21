
 app.controller("homeCtrl",['$scope', '$http',  function($scope,$http){
 	 	var self =this;
	$scope.name = 'leilei';
	
	$http.get('data/shouye.json').success(function(data){
		$scope.data = data.data;
		console.log($scope.data);
	})
	 	
 }])
 