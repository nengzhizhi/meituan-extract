var https = require("https");
var querystring = require("querystring");

var postData = querystring.stringify({
			'userName' : 'dxlh2',
			'password' : '18651821789',
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

var request = https.request(options, function(result) {
	console.log("status: ", result.statusCode);
	console.log("headers: ", result.headers);

	result.on('data', function(data){
		console.log(data);
	});
});

request.write(postData);
request.end();

request.on('error', function(e){
	console.error(e);
});