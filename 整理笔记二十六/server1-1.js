const http=request('http'),
	url=request('url'),
	fs=request('fs');
	qs=request('querystring');

http.createServer(function (req,res) {
		res.setHeader('Access-Control-Allow-Origin','*');
			if(req.method === "GET") {

                console.log(已经收到请求);
                let obj = url.parse(req.url, true);

                let myReadStream = fs.createReadStream(__dirname + '/userinfo.txt', 'utf8');

                let data = "";
                myReadStream.on('data', function (chunk) {
                    data += chunk;
                });
                let arr;
                myReadStream.on('end', function () {
                    data = data || '[]';
                    arr = JSON.parse(data);

                    var flag = false;//true就是用户名已经存在
                    for (var i = 0, item; item = arr[i]; i++) {
                        if (item.id === obj.query.id) {//客户端提交的数据是否存在数据库
                            flag = true;
                        }
                    }
                    if (flag) {
                        res.write('{"type":0,"msg":"用户名已经注册}');
                        res.end()
                    } else {
                        res.write('{"type":1,"msg":"恭喜!用户名可以使用}');
                        res.end()
                    }
                })
            }else if(req.method === "POST"){// post方式
				console.log('post');
				let str="",
					obj={};
				req.on('end',function () {
						str+=data;
                });
				req.on('end',function () {
					obj=qs.parse(str);
					console.dir(obj);
                })
			}

//}).listen(3000,'127.0.0.1');  //这里的url值的最后以为可以随便改动
}).listen(3000,function () {
	console.log('服务器启动成功,正在监听3000端口')
});
//127.0.0.1===localhost