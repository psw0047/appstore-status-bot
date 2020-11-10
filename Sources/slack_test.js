const request = require('request');

function main(params) {
	return request.post({
		headers: {
			'X-SENDER': 'slack',
			'Content-Type': 'application/json'
		},
		url: 'http://ikameshi.linecorp.com/privmsg',
		form: {
			channel: 'testnel',
			message: 'TestTest',
			nickname: 'iOS App Test'
		}
	}, function(error, response, body){
		console.log(body);
	});
}