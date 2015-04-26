
/*
 * GET users listing.
 */

var MeiTuan = require('../lib/MeiTuan.js');
var async = require('async');

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){
	res.render('login', null);
};

exports.doLogin = function(req, res){
	//todo
	//check login

	req.session.user = req.body.username;
	res.render('historyOrders', null);
}

exports.historyOrders = function(req, res){
	var mt = MeiTuan.build();

	async.waterfall([
			function (next) {
				mt.login('dxlh2', '18651821789', next);
			},  function (result, next) {
				mt.getHistoryOrders(next);
			}, function (result, next) {
				res.render('historyOrders', {historyOrders : result});
			}
		], function (error, result){

		});

	/*
	if(req.session && req.session.user){
		res.render('historyOrders', null);
	} else {
		res.redirect('/login');
	}
	*/
}