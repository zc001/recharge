var crypto = require('crypto');

//postData是解析出来的post数据，采用的querystring库，且可以自动url decode
var postData = { 
    discount: '0.00',
    payment_type: '1',
    subject: '6元充值包',
    trade_no: '2014073160621748',
    buyer_email: '13811405256',
    gmt_create: '2014-07-31 16:59:14',
    notify_type: 'trade_status_sync',
    quantity: '1',
    out_trade_no: '1406797096371-472',
    seller_id: '2088801660378814',
    notify_time: '2014-07-31 17:03:39',
    body: '6元充值包',
    trade_status: 'TRADE_FINISHED',
    is_total_fee_adjust: 'N',
    total_fee: '0.01',
    gmt_payment: '2014-07-31 16:59:22',
    seller_email: 'ad@blingstorm.com.cn',
    gmt_close: '2014-07-31 16:59:22',
    price: '0.01',
    buyer_id: '2088502756378481',
    notify_id: '01700571dce48321b8b32785d10dc7ff4o',
    use_coupon: 'N',
    sign_type: 'RSA',
    sign: 'bedqVo+aTVKBb5hblL+T/QinCsYy1vO/YgzV/72CXZ4Cdi4WBRvGaB/hREcMTg6lmqEmNS6Vt/fChhbf8gKItuWxhb4C+XjlkenTP+IT1dU3HeUpnz7ELsLHZm97HC/DcVV4dqCjL6H7hs6i1DOksSnYI9kpj4x0MxSI/xIOR4c=' 
};

function verifySign()
{
    //这是平台提供的公钥，必须严格按照64位一行来进行换行，并且加上.pem文件中的开头和结尾
    var pubkey = '-----BEGIN PUBLIC KEY-----\n' +
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnxj/9qwVfgoUh/y2W89L6BkRA\n' +
        'FljhNhgPdyPuBV64bfQNN1PjbCzkIM6qRdKBoLPXmKKMiFYnkd6rAoprih3/PrQE\n' +
        'B/VsW8OoM8fxn67UDYuyBTqA23MML9q1+ilIZwBC2AQ2UBVOrFXfFl75p6/B5Ksi\n' +
        'NG9zpgmLCUYuLkxpLQIDAQAB\n' +
        '-----END PUBLIC KEY-----';
    //data是按照平台要求（支付宝对接文档中）提到的顺序以及格式利用postData拼接的字符串，将用于验证    
    var data = "body=6元充值包&buyer_email=13811405256&buyer_id=2088502756378481&discount=0.00&gmt_close=2014-07-31 16:59:22&gmt_create=2014-07-31 16:59:14&gmt_payment=2014-07-31 16:59:22&is_total_fee_adjust=N&notify_id=01700571dce48321b8b32785d10dc7ff4o&notify_time=2014-07-31 17:03:39&notify_type=trade_status_sync&out_trade_no=1406797096371-472&payment_type=1&price=0.01&quantity=1&seller_email=ad@blingstorm.com.cn&seller_id=2088801660378814&subject=6元充值包&total_fee=0.01&trade_no=2014073160621748&trade_status=TRADE_FINISHED&use_coupon=N";
    var sig = "bedqVo+aTVKBb5hblL+T/QinCsYy1vO/YgzV/72CXZ4Cdi4WBRvGaB/hREcMTg6lmqEmNS6Vt/fChhbf8gKItuWxhb4C+XjlkenTP+IT1dU3HeUpnz7ELsLHZm97HC/DcVV4dqCjL6H7hs6i1DOksSnYI9kpj4x0MxSI/xIOR4c=";
    //根据平台提供的算法，这里是RSA-SHA1调用crpto库进行验证签名
    var verify = crypto.createVerify('RSA-SHA1');
    verify.update(data, 'utf-8');
    var result = verify.verify(pubkey, sig, 'base64');
    console.log("验证结果："+result);
}

verifySign();

/*
文章地址
http://blog.csdn.net/macjeson/article/details/38261117
*/
