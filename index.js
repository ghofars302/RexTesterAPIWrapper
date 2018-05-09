/*
* Created by Monodoxy / github.com/ghofars302
* API Wrapper for rextester.com in node.js
* Node-fetch require for this module.
*/

const {URL} = require('url');
const fetch = require('node-fetch');
const api = require('./RexEndpoints.json');

class RexTester {
    constructor() {
        let self = this;
        let baseURL = 'http://rextester.com/rundotnet/api?';
        Object.keys(api).forEach(async (endpoints) => {
            self[`${endpoints}`] = async function (code) {
                let encoded = encodeURIComponent(code);
                let url = new URL(`${baseURL}LanguageChoice=${api[endpoints]}&Program=${encoded}`);
                let raw = await fetch(url, {
                    method: 'POST'
                });

                return raw;
            }
        })
    } 
}

module.exports = RexTester;