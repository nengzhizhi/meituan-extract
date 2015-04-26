var https = require("https");
var http = require("http");
var zlib = require("zlib");
var request = require("request");
var async = require("async");
var WebSocketClient = require('websocket').client;
var querystring = require("querystring");

function MeiTuan() {
	this.cookies = [];
}

MeiTuan.prototype.login = function(username, password, callback) {
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
							//self.cookies[cookie_key_value[0].trim()] = cookie_key_value[1].trim();
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

MeiTuan.prototype.connect = function (callback) {
	var self = this;

	self.client = new WebSocketClient();
	self.client.on('connect', function (connection) {
		console.log('WebSocket Client Connected');

		connection.on('error', function(error) {
			console.log("Connection Error: " + error.toString());
		});

		connection.on('close', function() {
			console.log('echo-protocol Connection Closed');
		});

		connection.on('message', function(message) {
			console.log(message);
			if (message.type === 'utf8') {
				console.log("Received: '" + message.utf8Data + "'");
			}
		});		
	});

	if (self.cookies['token']) {
		self.client.connect('wss://wpush.meituan.com/websocket/waimai_e/' + self.cookies['token']);
	}
}

MeiTuan.prototype.checkNewOrders = function (orderId) {
	var self = this;

	var postData = {
		'wmPoiId' : '',
		'acctId' : '',
		'appType' : '3',
		'token' : self.cookies['token'],
		'lastOrderId' : ''
	}

	var options = {
		hostname : 'waimaie.meituan.com',
		port : 80,
		path : '/api/order/new/orderList/v3',
		
		method : 'POST',
		headers : {
			'Connection': 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': postData.length,
		}		
	}
}

MeiTuan.prototype.getHistoryOrders = function (callback) {
	var self = this;

	var date = new Date().toLocaleDateString();
	console.log(self.cookies);
	self.cookies.push('appVersion=3.0.1.0');
	var options = {
		hostname : 'waimaie.meituan.com',
		port : 443,
		path : '/order/history/orders?date=' + date + '&random=' + Math.random(),

		method : 'GET',
		headers : {
			'Connection' : 'keep-alive',
			'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'User-Agent' : 'MeituanWaimai/3.0.1.0/32 Windows/6.3 Id/{2F9C23DC-7642-471F-85EB-A33433C51A25}',
			'Referer' : 'https://waimaie.meituan.com/?time=1429629544617',
			'Accept-Encoding' : 'gzip,deflate',
			'Accept-Language' : 'en-us,en',
			'Cookie' : self.cookies
			/*
			'Cookie': [
						'appVersion=3.0.1.0', 
						'acctId=1181174',
						'token=6426abdd-80d9-4520-98c7-5644d128b05c',
						'wmPoiId=-1',
						'userName=%20dxlh2', 
						'tokenSaved=true',
						'JSESSIONID=3js2uax18uzw1ahr4kq8bi916',
						'wpush_server_url=wss://wpush.meituan.com',
						'count=0'
					]
			*/
		}
	}

	/*
	var req = https.request(options, function(res) {
		console.log("statusCode: ", res.statusCode);
		console.log('HEADERS: ' + JSON.stringify(res.headers));
		
		res.on('data', function(data) {
			console.log(data.toString());
		});
	});

	req.end();

	req.on('error', function(e) {
		console.log(e);
	});
	*/


	var chunks = [];
	var size = 0;
	async.waterfall([
		function (next){
			var request = https.request(options, function (result){
				console.log(result.headers);
				next(null, result);
			});
			request.end();
		}, function (result, next) {
			result.on('data', function(chunk){
				chunks.push(chunk);
				/*
				console.log('data:' + chunk.toString());
				chunks.push(chunk);
				size += chunk.length;
				//console.log(chunk.toString());
				*/
			});

			result.on('end', function(){
				var body = Buffer.concat(chunks);
				zlib.gunzip(body, function (error, data){
					console.log(data.toString());
				});
			});
		}
	], function (error, result) {
		callback(error, result);
	});
}


MeiTuan.prototype.getOrders = function (callback) {
	var self = this;

	var date = new Date().toLocaleDateString();
	self.cookies.push('appVersion=3.0.1.0');

	request({
		url : 'http://baidu.com',
		method : 'GET',
		headers : {
			'Connection' : 'keep-alive',
			'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'User-Agent' : 'MeituanWaimai/3.0.1.0/32 Windows/6.3 Id/{2F9C23DC-7642-471F-85EB-A33433C51A25}',
			'Referer' : 'http://e.waimai.meituan.com/?time=1429624868181',
			'Accept-Encoding' : 'gzip,deflate',
			'Accept-Language' : 'en-us,en'
		}
	}, function (error, response, body) {
		console.log(body.toString());
	});
}


function build(){
	return new MeiTuan();
}

exports.MeiTuan = MeiTuan;
exports.build = build;