const API = require('./index.js');
const Rex = new API();
let Code = 'from os import sys; from sys import platfrom; print platform';

Rex.Python(code).then(res => res.json()).then(res => {
		if (res.Error) {
			return console.log(res.Error)
		} else {
			if (res.Result.length < 1) return console.log('Empty output');
			console.log(res.Result);
		}
	}
)