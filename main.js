window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}


window.jQuery.ajax = function(options){
    let url = options.url
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn

    let request = new XMLHttpRequest()
    request.open(method,url)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    request.send(body) 
}

window.$ = window.jQuery


function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url: '/frank',
        method: 'get',
        successFn: (x)=>{  //这儿函数里的参数 x 就是request.responseText。 是一个callback回调函数
            f1.call(undefined,x)
            f2.call(undefined,x)  
        }, 
        failFn: (x)=>{  //这儿的 x 就是request。 是一个callback回调函数
            console.log(x)
            console.log(x.status)
            console.log(x.responseText)   
        }   
    })
})