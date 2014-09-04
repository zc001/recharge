var CryptoJS = require('crypto-js');

function AES_verify () {
	//text是获取到的堆成加密密文
	var text = 'hDhid85RVclRIUmM6v2IyAnRfO9GARNN8EAS0unm0hONCfpFmwxAdQRBlegNTLYpJPLdO7KOgdsPc4CCw2FKsPppo5sLzWBJAIbOuF1mRcsoHF43Z904NbhKJcZ0AdjR/Cqr9lZxCuhG+DTI1j2wPm89t6ktJkwDe/BHj09puodVWXRlvJql8ARLgK5DOpqcNNK/hXjWy9jZHnsYqDdem7E8Va4h0s/i6wB0jxzrfj3NFphVC/wnVymqKchKrisA6V1BAzTwPyclTeicb7AY7A==';
	//平台，比如这是北纬提供的密钥
	var key = "xdgvsa3264ndkmdm";
	//使用crypto-js模块解密
	var a = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {mode: CryptoJS.mode.ECB});

	console.log('a: ', a.toString(CryptoJS.enc.Utf8));
}

AES_verify();

/*
	这里就是AES_verify解密后的明文，然后进行相关支付操作
	var result = {
	    "state": "1",
	    "extraData": "13802507341711000",
	    "gameServerZone": "sg_server000",
	    "consumeId": "712381",
	    "gameId": "30",
	    "userId": "hanjietest",
	    "consumeValue": "1",
	    "userNumId": "5011451",
	    "reqtime": 1380251090000
	}
*/