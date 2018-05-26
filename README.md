# RexTesterAPIWrapper

Install:

Note: currently this module not support global install.

```xl
npm i https://github.com/ghofars302/RexTesterAPIWrappper
```

Examples:

```js
const API = require('rextesterapiwrapper');
const Rex = new API();
let code = 'from os import sys; from sys import platfrom; print platform';

Rex.Python(code).then(res => res.json()).then(res => {
		if (res.Error) {
			return console.log(res.Error)
		} else {
			if (res.Result.length < 1) return console.log('Empty output');
			console.log(res.Result);
		}
	}
)
```
