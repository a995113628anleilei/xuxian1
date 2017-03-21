app.service('myService', function () {
	var arr = [];
	this.add = function (obj) {
		arr.push(obj);
	}
	this.getGoods = function () {
		return arr;
	}
})