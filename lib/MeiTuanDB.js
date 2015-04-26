var MongoClient = require('mongodb').MongoClient;
var async = require('async');


var url = 'mongodb://meituan:b933defa@112.124.117.146:27017';

function MeiTuanDB() {
	this.user_document = 'meituan_user';
	this.order_document = 'meituan_order';
	this.user_count = 0;
}

MeiTuanDB.prototype.connect = function(callback) {
	var self = this;

	MongoClient.connect(url, function (err, db) {
		if (err) {
			callback(err, null);
		} else {
			self.db = db;
			self.user_collection = self.db.collection(self.user_document);
			self.order_collection = self.db.collection(self.order_document);
			callback(null, null);
		}
	})
}


MeiTuanDB.prototype.getCollection = function (collectionName, callback) {
	var self = this;

	var collection = self.db.collection(collectionName);

	collection.find({}).toArray(function(err, docs) {
		callback(err, docs);
	});
}

MeiTuanDB.prototype.add = function(data ,callback) {
	var self = this;

	var info = {
		mobile : data.mobile,
		address : data.address,
		name : data.name,
		shop : data.shop,
		payment : data.payment,
		time : data.time
	};

	async.waterfall([
			function (next) {
				self.user_collection.findOne({mobile :data.mobile}, {}, function (err, doc){
					if (err) {
						next(err, null);
					}
					next(null, doc);
				})
			},function (document, next) {
				if (document) {
					console.log('user exist, mobile = ' + data.mobile);
					next(null, null)
				} else {
					console.log('insert new user, mobile = ' + data.mobile);
					self.user_count ++ ;
					self.user_collection.insert([
							info
						], function (err, result) {
							if (err) {
								next(err, null);
							} else {
								next(null, result);
							}
						})
				}
			}, function (result, next) {
				console.log('insert new order, time = ' + data.time);
				self.order_collection.insert([
						info
					], function (err, result) {
						if (err) {
							next(err, null);
						} else {
							next(null, result);
						}
					})
			}
		], function (err, result){
			if (callback) {
				callback(err, result);
			}
		});
}

/*
MeiTuanDB.prototype.record = function(data, callback) {
	var self = this;

	self.collection.insert([
			data
		], function (err, result) {
			callback(err, result);
		});
}
*/

function create(){
	return new MeiTuanDB();
}

exports.MeiTuanDB = MeiTuanDB;
exports.create = create;