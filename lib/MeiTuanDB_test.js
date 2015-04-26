var async = require('async');
var MeiTuanDB = require('./MeiTuanDB.js');

var db = MeiTuanDB.create();

async.waterfall([
		function (next){
			db.connect(next);
		}, function (result, next) {
			db.add('13545654563', '菁菁堂4楼', '大学路', next);
		}, function (result, next) {
			db.add('13545654563', '菁菁堂4楼', '大学路', next);
		}
	], function (err, result){

	});
