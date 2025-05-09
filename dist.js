var request = require('request');

var options = { 
  url: 'https://app.zipcodebase.com/api/v1/distance?apikey=d5668f60-29d8-11f0-b664-7566d958dde4&code=686141&compare=688505,10007&country=in' 
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
}

request(options, callback);
