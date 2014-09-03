var crypto = require('crypto');

var key = '207fbbb41d8ba1c367c2c4f28e83cc83e05fd5284801a7e5';

var query = { AppId: '107244',
  	ProductId: '107244',
 	  Act: '1',
  	ProductName: 'XXXX',
  	ConsumeStreamId: '2-25664-20130718161307-600-1827',
  	CooOrderSerial: '137413517563580118',
  	Uin: '407601397',
  	GoodsId: '60元宝',
  	GoodsInfo: '60元宝',
  	GoodsCount: '1',
  	OriginalMoney: '6.00',
  	OrderMoney: '6.00',
  	Note: 'sg_server000_test',
  	PayStatus: '1',
  	CreateTime: '2013-07-18 16:12:57',
  	Sign: '5eead9441c6290be19e0c5d804861831' 
}

var md5 = crypto.createHash('md5');
var sourceSign = query.Sign;
var strSource = query.AppId + query.Act + query.ProductName + query.ConsumeStreamId + query.CooOrderSerial 
				+ query.Uin + query.GoodsId  + query.GoodsInfo + query.GoodsCount + Number(query.OriginalMoney).toFixed(2) 
				+ Number(query.OrderMoney).toFixed(2) + query.Note + query.PayStatus + query.CreateTime + key;

md5.update(strSource, 'utf8');
var destSign = md5.digest('hex');

if(sourceSign === destSign) {
  console.log('验证成功');
} else {
  console.log('验证失败');
}