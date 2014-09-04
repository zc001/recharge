var CryptoJS = require('crypto-js');

function test_1 () {
	var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
	console.log('encrypted: ', encrypted.toString());
	var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	console.log('decrypted: ', decrypted.toString());
	console.log('decrypted: ', decrypted.toString(CryptoJS.enc.Utf8));
}

// test_1();

function test_2 () {
	var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
	console.log('encrypted.key: ', encrypted.key.toString());
	console.log('encrypted.iv: ', encrypted.iv.toString());
	console.log('encrypted.salt: ', encrypted.salt.toString());
	console.log('encrypted.ciphertext: ', encrypted.ciphertext.toString());
	console.log('encrypted: ', encrypted.toString());
	var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	console.log('decrypted: ', decrypted.toString());
	console.log('decrypted: ', decrypted.toString(CryptoJS.enc.Utf8));
}

// test_2();

function test_3 () {
	var encrypted ="U2FsdGVkX1+dovNkl13BFqnnCae8WXHXEuoLEXqIDc4=";

	var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

	console.log('decrypted: ', decrypted.toString());
	console.log('decrypted: ', decrypted.toString(CryptoJS.enc.Utf8));
}

// test_3();

function test_4 () {
	var text = "j1RLRyw2/gQWh5xjuU2DOk9+CfUx13ePlqMoeLNZRBUk0M1jHHVtKDN/XFkvT2N3izI3Astm3sLX0urF/Kmqh/cv3YXy8PosPngxMTmeQtzIxP2yZjzpuDGhY9eXHn0ihhfMJ9w4XkV87STG2p2YJOG278xI6MABMqrSYTcODM1mCtP/sw/Cn9V2PM40IIGJRLF/jLlOhCrhy0XRXy/nAw==";

	var key = "gameserverurlkey";

	var a = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {mode: CryptoJS.mode.ECB});

	console.log('a: ', a.toString(CryptoJS.enc.Utf8));
}

// test_4();

function test_5 () {
	var key = CryptoJS.lib.WordArray.random(16);
	var iv = CryptoJS.lib.WordArray.random(16);
	var encrypted = CryptoJS.AES.encrypt("Message", key, {mode: CryptoJS.mode.ECB, iv: iv});
	console.log('encrypted: ', encrypted.toString());
	// var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), key, {mode: CryptoJS.mode.ECB, iv: iv});
	var decrypted = CryptoJS.AES.decrypt(encrypted, encrypted.key, {mode: CryptoJS.mode.ECB, iv: encrypted.iv});
	var decrypted = CryptoJS.AES.decrypt(encrypted, key, {mode: CryptoJS.mode.ECB, iv: iv});
	console.log('decrypted: ', decrypted.toString(CryptoJS.enc.Utf8));
}

// test_5();












