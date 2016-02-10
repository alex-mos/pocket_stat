var https = require('https');
var querystring = require('querystring');

var options = {
	host: 'getpocket.com',
	path: '/v3/get',
	port: '443',
	method: 'POST'
};

var post_data = querystring.stringify({	"consumer_key": "51026-6da61e0b0e81e827f4bfff10",	"access_token": "294651e0-3d67-372c-052c-eb98f3",	"state": "unread",	"count":"10"});

var req = https.request(options, function(response) {


	var str = '';
	response.on('data', function (chunk) {
		str += chunk;
	});

	response.on('end', function () {
		console.log(str);
	});
});

req.write(post_data);

req.end();