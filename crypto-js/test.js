var CryptoJS = require('crypto-js');

// var hash = CryptoJS.MD5("Message");
// console.log('hash hex: ', hash.toString());
// console.log('hash base64: ', hash.toString(CryptoJS.enc.Base64));

var hash = CryptoJS.SHA1("Message");
console.log('hash hex: ', hash.toString());
console.log('hash base64: ', hash.toString(CryptoJS.enc.Base64));



