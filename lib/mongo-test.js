var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://meituan:b933defa@112.124.117.146:27017';

MongoClient.connect(url, function (err, db) {
	console.log('err : ' + err);

	if (!err) {
		var collection = db.collection('documents');

		/*
		collection.insert([
				{a : 1}
			], function (err, result) {
				console.log('err : ' + err);
				console.log('result : ' + result);
			});
		*/
		collection.findOne({a:1}, {}, function (err, doc) {
			console.log('doc : ' + doc.toString());
		})
	}
})