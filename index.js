/*
* Created by Monodoxy / github.com/ghofars302
* API Wrapper for rextester.com in node.js
* Node-fetch require for this module.
*/

const {URL} = require('url');
const fetch = require('node-fetch');
const api = require('./api.json');

module.exports = function RexTester(code, options) {
    if (!RexTester.Promise) {
        throw new Error('Native promise is missing, you can set it by do RexTester.Promise = (Your Promise)');
    }
    
    if (!options) options = { language: 'nodejs' };
    
    return new RexTester.Promise(async (resolve, reject) => {
        const body = await fetch('http://rextester.com/rundotnet/api', {
            "method": "POST",
            "qs": {
                "LanguageChoice": api.includes(options.language.toLowerCase()) ? api[options.language.toLowerCase()] : null;
                "Program": typeof code === 'string' || code.length > 0 ? code : '';
            }
        });
        
        const json = await body.json();
        
        return 
    })
}  
