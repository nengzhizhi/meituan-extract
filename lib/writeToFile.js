var async = require('async');
var fs = require('fs');
var DB = require('./MeiTuanDB.js');

var db = DB.create();

var data = '';

async.waterfall([
		function (next) {
			db.connect(next);
		}, function (result, next) {
			db.getCollection('meituan_user', next);
		}, function (documents, next) {
			documents.forEach(function (document){
				var record = document.mobile + ',' + document.name + ',' + document.address + ',' + document.time + ',' +document.payment + '\r\n';
				console.log(record);
				data = data + record;
			});

			fs.writeFile('m.txt', data);
			/*
			var options = { encoding: options, mode: 438, flag: 'w' };
			async.concat(documents, function (document, callback){
				var record = document.mobile + ',' + document.name + ',' + document.address + ',' + document.time + ',' +document.payment + '\r\n';
				
				fs.writeFile('m.txt', record, options, function (err){
					callback(err);
				});
			}, function (err, result){
				next(err, result);
			});
			*/
		}
	])