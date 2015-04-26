var async = require('async');
var MeiTuan = require('./MeiTuan.js');

var m = MeiTuan.build();


async.waterfall([
		function (next) {
			m.login('dxlh2', '18651821789', next);
		}, function (result, next){
			m.getHistoryOrders(next);
			//console.log(result);
			//console.log(m.cookies);
		}, function (result, next){
			console.log(result);
		}
	], function (error, result) {
	// body...
})

https://waimaie.meituan.com/static/imgs/online_paid.png