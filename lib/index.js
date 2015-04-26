var async = require('async');
var fs = require('fs');
var DB = require('./MeiTuanDB.js');
var Net = require('./MeiTuanNet.js');
var cheerio = require("cheerio");
var moment = require('moment');

var net = Net.create();
var db = DB.create();

var dates = [];
for(var i = 0; i < 30; i++) {
	var date = moment('20141016', 'YYYYMMDD').subtract(i, 'days').format("YYYY-MM-DD");
	dates.push(date);
}

var extract = function (date, callback) {
	async.waterfall([
		function (next) {
			console.log('Start download data from ' + date + ' to' + date + "!");
			net.getHistoryOrders(date , date, next);
		}, function (html, next) {
			console.log('Download data from ' + date + ' to' + date + " success!");

			var $ = cheerio.load(html);
			var writes = [];
			$('#orders-container li').each(function (i, element){
				var shop_info = [];
				$(this).children('div')
					.children('.details')
					.children('.panel')
					.children('.medFont').each(function (i, element){
						shop_info.push($(this).text());
					});

				var pay_info = $(this).children('div')
										.children('.details')
										.children('.warning')
										.text();

				var custom_info = [];
				$(this).children('div')
					.children('.details')
					.children('.custom-info')
					.children('.fontBold').each(function (i, element){
						custom_info.push($(this).text());
					});

				var record = {
					shop : shop_info[1],
					time : shop_info[2],
					payment : pay_info,
					name : custom_info[0],
					mobile : custom_info[1],
					address : custom_info[2]
				}
				
				var write = function (callback) {
					console.log('write record: ' + record.time);
					db.add(record, callback);
				}
				writes.push(write);
			});

			async.parallel(writes, function (err, results){
				next(err, results);
			});
		}
	], function (err, result){
		console.log("user count = " + db.user_count);
		callback(err, result);
	});
}


async.waterfall([
		function (next) {
			net.login('dxlh2', '18651821789', next);
		}, function (result, next) {
			db.connect(next);
		}, function (result, next) {			
			async.concatSeries(dates, extract, function (err, result){
				next(err, result);
			});
		}
	],function (error, result){
		console.log("user count = " + db.user_count);
	});