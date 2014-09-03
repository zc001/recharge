/*
  appstore的充值走的是https，那么引入处理模块
*/
var https = require('https'); 

/*
  这个数据就是待验证的信息，删掉了大部分内容，这仅仅是个代码片段
*/
var receipt = 'ndjl6WXlYWnNzYTU1eUtzUzZFYzBt';

/*
  构造发送给apple服务器的信息格式
*/
var verifyData = {"receipt-data": receipt}
,    verifyResult = "";


/*
  构造https的各项参数
*/
var appleHost = "sandbox.itunes.apple.com"; //这是沙盒模式下的验证host
// var appleHost = "buy.itunes.apple.com"; //这是正式环境下的验证host
var options = {
    host: appleHost,
    port: 443,
    path: "/verifyReceipt",
    method: "POST"
};

/*
  验证信息
*/
var req = https.request(options, function(res){
      res.on("data", function(chunk){
          verifyResult += chunk;
      });
      res.on("end", function(){
          console.log('verifyResult: ', verifyResult);
      });
    });
req.write(JSON.stringify(verifyData));
req.end();


/*
  这里是验证完成后返回的信息
  {
    "receipt": {
        "original_purchase_date_pst": "2013-12-13 02:29:07 America/Los_Angeles",
        "purchase_date_ms": "1386930547545",
        "unique_identifier": "a6a63052abd73a9183fc987bd86e69cc3fc7f9e9",
        "original_transaction_id": "1000000096496199",
        "bvrs": "1.4.5",
        "transaction_id": "1000000096496199",
        "quantity": "1",
        "unique_vendor_identifier": "72FA2EBF-6100-49C5-B248-87C8178237CA",
        "item_id": "604360663",
        "product_id": "xxxxxxxx",
        "purchase_date": "2013-12-13 10:29:07 Etc/GMT",
        "original_purchase_date": "2013-12-13 10:29:07 Etc/GMT",
        "purchase_date_pst": "2013-12-13 02:29:07 America/Los_Angeles",
        "bid": "xxxxxxxx",
        "original_purchase_date_ms": "1386930547545"
    },
    "status": 0
  }

  注意：
    bid字段的内容使用XXXXXX替代了，内含项目信息
    product_id字段的内容使用XXXXXX替代了，内含项目信息
*/










