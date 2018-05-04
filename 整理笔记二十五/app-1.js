var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function(req, res){
    // req ==》 请求体
    // res ==》 响应体

    if(req.method ==="GET"){
        var obj=url.parse(req.url,true);
        //下面是后台返回的数据
        res.write('[GET方式]你好，您输入的用户名是：' + obj.query.user + '，密码是：' + obj.pwd)

        res.end()
    }else if(req.method ==="POST"){
        var str="";
        obj={};

        req.on('data',function (data) {
            str+=data;
        })
        req.on('end',function ( ) {
            obj=qs.parse(str);
            res.write('[POST方式]你好，您输入的用户名是：' + obj.query.user + '，密码是：' + obj.pwd)
            res.end();
        })
    }
}).listen(3000);
console.log'服务器已经启动，正在监听3000端口')
//shift+鼠标的右键可以打开PowerShell的窗口

//按node.app.js 表示启动服务器

//按ctrl+c 表示退出服务器


