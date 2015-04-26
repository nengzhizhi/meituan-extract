var https = require("https");
var async = require("async");
var zlib = require("zlib");
var querystring = require("querystring");

function MeiTuanNet () {
	this.cookies = [];
}

MeiTuanNet.prototype.login = function(username, password, callback) {
	var self = this;

	var postData = querystring.stringify({
			'userName' : username,
			'password' : password,
			'validCode' : '',
			'waimai_vcsid': 'be9daaec-89d2-4f8f-8adc-90e64b6a0284%22%22',
			'appType' : '3'
		});

	var options = {
		hostname : 'waimaie.meituan.com',
		port : 443,
		path : '/api/poi/logon/v4',
		method : 'POST',
		headers : {
			'Connection': 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': postData.length,
		}		
	}

	async.waterfall([
			function (next) {
				var request = https.request(options, function (result){
					next(null, result);
				});
				request.write(postData);
				request.end();
			}, function (result, next) {
				if (result.statusCode == 200) {
					result.headers['set-cookie'].forEach(
						function (cookie) {
							var cookie_key_value = cookie.split(';')[0].split('=');
							self.cookies.push(cookie_key_value[0].trim() + '=' + cookie_key_value[1].trim());
						}
					);

					result.on('data', function(data){
						next(null, data);
					});
				} else {
					next('no 200', null);
				}
			}, function (result, next) {
				next(null, result);
			}
		], function (error, result){
			callback(error, result);
		});
}

/*
* Get raw history order html page 
*/

MeiTuanNet.prototype.getHistoryOrders = function(startDate, endDate, callback) {
	var self = this;
	self.cookies.push('appVersion=3.0.1.0');

	var options = {
		hostname : 'waimaie.meituan.com',
		port : 443,
		path : '/order/history/orders?startDate=' 
				+ startDate
				+ '&endDate='
				+ endDate 
				+ '&index=1&count=1000&totalCount=1000&from=0&orderType=all',

		method : 'GET',
		headers : {
			'Connection' : 'keep-alive',
			'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'User-Agent' : 'MeituanWaimai/3.0.1.0/32 Windows/6.3 Id/{2F9C23DC-7642-471F-85EB-A33433C51A25}',
			'Referer' : 'https://waimaie.meituan.com/?time=1429629544617',
			'Accept-Encoding' : 'gzip,deflate',
			'Accept-Language' : 'en-us,en',
			'Cookie': self.cookies
		}	
	}

	var chunks = [],size = 0;
	async.waterfall([
			function (next) {
				var request = https.request(options, function (response){
					next(null, response);
				});
				request.end();				
			}, function (response, next) {
				response.on('data', function(chunk){
					chunks.push(chunk);
				});

				response.on('end', function(){
					var body = Buffer.concat(chunks);
					zlib.gunzip(body, function (error, data){
						next(null, data.toString());
					});
				});
			}
		], function (error, result) {
			callback(error, result);
		})
}

function create(){
	return new MeiTuanNet();
}

exports.MeiTuanNet = MeiTuanNet;
exports.create = create;