/*
	这是node官方模块querystring和url的使用
*/
var querystring = require('querystring');  
var url = require('url');

var urlString = 'http://localhost:8888/hello?data=300&test=400';

console.log('urlString parse default: ', url.parse(urlString));
/*	这是打印结果
	{
	    protocol: 'http: ',
	    slashes: true,
	    auth: null,
	    host: 'localhost: 8888',
	    port: '8888',
	    hostname: 'localhost',
	    hash: null,
	    search: '?data=300&test=400',
	    query: 'data=300&test=400',
	    pathname: '/hello',
	    path: '/hello?data=300&test=400',
	    href: 'http: //localhost: 8888/hello?data=300&test=400'
	}
*/

console.log('urlString parse set true: ', url.parse(urlString, true));
/*	这是打印结果
	{
	    protocol: 'http: ',
	    slashes: true,
	    auth: null,
	    host: 'localhost: 8888',
	    port: '8888',
	    hostname: 'localhost',
	    hash: null,
	    search: '?data=300&test=400',
	    query: {
	        data: '300',
	        test: '400'
	    },
	    pathname: '/hello',
	    path: '/hello?data=300&test=400',
	    href: 'http: //localhost: 8888/hello?data=300&test=400'
	}
*/

var urlObj = { protocol: 'http:',
  	slashes: true,
  	auth: null,
  	host: 'localhost:8888',
  	port: '8888',
  	hostname: 'localhost',
  	hash: null,
  	search: '?data=300&test=400',
  	query: 'data=300&test=400',
  	pathname: '/hello',
  	path: '/hello?data=300&test=400',
  	href: 'http://localhost:8888/hello?data=300&test=400' 
}

console.log('urlObj format : ', url.format(urlObj));
/*
	这是打印结果
	http://localhost:8888/hello?data=300&test=400
*/

var str = 'data=300&test=400';

console.log('str parse: ', querystring.parse(str));
/*
	这是打印结果
	{ data: '300', test: '400' }
*/

var json = {
	name: 'byvoid',
	email: 'byvoid@byvoid.com',
	address: 'testtest',
}

console.log('json stringify: ', querystring.stringify(json));
/*
	这是打印结果
	name=byvoid&email=byvoid%40byvoid.com&address=testtest
*/

