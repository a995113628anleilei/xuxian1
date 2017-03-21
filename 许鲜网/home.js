
 app.controller("homeCtrl",['$scope', '$http', '$timeout', function($scope,$http,$timeout){
 	 	var self =this;
	$scope.name = 'leilei';
	
	
	//请求轮播图数据
	$http.get('data/shouye.json').success(function(data){
		$scope.data = data.data.blocks[0][0].sale_as;	
	});
	
	// 初始化轮播
	new Swiper(".swiper-container", {
		direction: 'horizontal',
		autoplay: 2000,
		observer:true,
		autoplayDiableOnInteraction: false,
		pagination: ".swiper-pagination",
		loop: true
	});

 }])
 