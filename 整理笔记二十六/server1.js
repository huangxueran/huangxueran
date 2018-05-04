const http=request('http'),
	url=request('url'),
	fs=request('fs');

http.createServer(function (req,res) {
		res.setHeader('Access-Control-Allow-Origin','*');
			if(req.method === "GET"){

				console.log(已经收到请求);
				let obj=url.parse(req.url,true);

                let myReadStream = fs.createReadStream(__dirname + '/userinfo.txt', 'utf8');
				
                let data="";
                myReadStream.on('data',function (chunk) {
					data += chunk;
                });
				let arr;
				myReadStream.on('end',function () {
					data=data || '[]';
					arr=JSON.parse(data);

					var flag=false;//true就是用户名已经存在
					for(var i=0,item; item=arr[i]; i++){
						if(item.id === obj.query.id){//客户端提交的数据是否存在数据库
								flag=true;
						}
					}
					if(flag){
						res.write({
							"type":0,
							"msg":"用户名已经用户名"
						});
						res.end()
                    } else {
						//else代表用户名可以注册
                        arr.push(obj.query);
                        let str = JSON.stringify(arr);

                        fs.writeFile('userinfo.txt', str, function(err){
                            if(err)throw err;
                            console.log('文件保存成功');
                            res.write('{"type":1,"msg":"注册成功"}');
                            res.end()
                        })
                    }
                })

			}
//}).listen(3000,'127.0.0.1');  //这里的url值的最后以为可以随便改动
}).listen(3000,function () {
	console.log('服务器启动成功,正在监听3000端口')
});
//127.0.0.1===localhost