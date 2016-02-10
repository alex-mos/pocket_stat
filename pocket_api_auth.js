var https = require('https');
var querystring = require('querystring');
var open = require('open');

var postData = querystring.stringify({
	"consumer_key": "51026-6da61e0b0e81e827f4bfff10",
	"redirect_uri": "https://www.google.com"
});


var options = {
	host: 'getpocket.com',
	path: '/v3/oauth/request',
	port: '443',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

//console.log(postData);

var req = https.request(options, function(response) {

	response.on('error', function (e) {
		console.log(e);
	});

	var result = '';
	response.on('data', function (data) {
		result += data;
	});

	response.on('end', function () {
		var request_token = querystring.decode(result).code;

		console.log(request_token);

		open('https://getpocket.com/auth/authorize?request_token=' + request_token + '&redirect_uri=REDIRECT_URI')
	});
});

req.end(postData); // string or buffer
