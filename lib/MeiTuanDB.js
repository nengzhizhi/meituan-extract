var MongoClient = require('mongodb').MongoClient;
var async = require('async');


var url = 'mongodb://meituan:b933defa@112.124.117.146:27017';

function MeiTuanDB() {
	this.document_name = 'meituan_test';
}

MeiTuanDB.prototype.connect = function(callback) {
	var self = this;

	MongoClient.connect(url, function (err, db) {
		if (err) {
			callback(err, null);
		} else {
			self.db = db;
			self.collection = self.db.collection(self.document_name);

			callback(null, null);
		}
	})
}

MeiTuanDB.prototype.add = function(_mobile, _address, _shop ,callback) {
	var self = this;

	async.waterfall([
			function (next) {
				self.collection.findOne({mobile : _mobile}, {}, function (err, doc){
					if (err) {
						next(err, null);
					}
					next(null, doc);
				})
			}, function (result, next) {
				self.collection.insert([
						{
							mobile : _mobile,
							address : _address,
							shop : _shop
						}
					], function (err, result) {
						if (err) {
							next(err, null);
						} else {
							next(null, result);
						}
					})
			}
		], function (err, result){
			callback(err, result);
		});
}

function create(){
	return new MeiTuanDB();
}

exports.MeiTuanDB = MeiTuanDB;
exports.create = create;