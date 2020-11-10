const request = require('request');

function post() {
	return request.post({
		headers: {
			'X-SENDER': 'slack',
			'Content-Type': 'application/json'
		},
		url: 'http://ikameshi.linecorp.com/notice',
		form: {
			channel: 'testnel',
			message: 'TestTest',	
			nickname: 'iOS App Test'
		}
	}, function(error, response, body){
		console.log(error);
		console.log(response);
		console.log(body);
	});
}

module.exports = {
    post: post
}