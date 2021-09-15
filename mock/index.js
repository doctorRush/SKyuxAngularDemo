
var mockServer = require('node-mock-server');
var path = require('path');

mockServer({
	'title': 'Api mock server',
	'version': '1',
	'headers': {},
	'contentType': 'application/json',
	'accessControlExposeHeaders': 'X-Total-Count',
	'accessControlAllowOrigin': '*',
	'accessControlAllowMethods': 'GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD',
	'accessControlAllowHeaders': 'origin, x-requested-with, content-type',
	'accessControlAllowCredentials': 'false',
	'urlBase': 'http://localhost:3001',
	'urlPath': '/rest/v1',
	'port': '3001',
	'uiPath': '/',
	'funcPath': path.join(__dirname, '/func'),
	'restPath': path.join(__dirname, '/rest'),
	'dirName': __dirname
});
