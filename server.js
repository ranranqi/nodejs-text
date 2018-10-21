var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口好不好啦？\nnode server.js 8888 这样不好吗？')
    process.exit(1)
}

var server = http.createServer(function(request,response){
    var parsedUrl = url.parse(request.url,true)
    var pathWithQuery = request.url
    var queryString = ''
    if(pathWithQuery.indexOf('?') >= 0){queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))}
    var path = parsedUrl.pathname
    var quert = parsedUrl.query
    var method = request.method

    /**************从这里开始看，上面不要看***************/

    console.log('方方说：含查询字符串路径\n' + pathWithQuery)

    if(path === '/'){
        let string = fs.readFileSync('./index.html','utf8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path === '/main.js'){
        let string = fs.readFileSync('./main.js','utf8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path === '/xxx'){
        response.statusCode = 200
        response.setHeader('Content-Type','text/json;charset=utf-8')
        /********在frank.com下访问jack.com    使用AJAX 跨域 后端需要添加的代码
        response.setHeader('Access-Control-Allow-Origin', 'http://frank.com:8001')
        意为告诉浏览器frank.com是一家的不要阻止访问*********/
        response.write(`
        {
            "note":{
                "to": "小谷",
                "from": "方方",
                "heading": "打招呼",
                "body": "你好啊"
            }   
        }
        `)
        response.end()
    }else{
        response.statusCode = 400
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(`
            {
                "error": "not found"
            }
        `)
        response.end()
    }

    /************代码结束，下面不要看***************/
})

server.listen(port)
console.log('监听 ' + port + '成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
