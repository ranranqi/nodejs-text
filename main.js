
function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url: '/frank',
        type: 'get',
        success: (x)=>{  //这儿函数里的参数 x 就是request.responseText。 是一个callback回调函数
            f1.call(undefined,x)
            f2.call(undefined,x)  
        }, 
        error: (x)=>{  //这儿的 x 就是request。 是一个callback回调函数
            console.log(x)
            console.log(x.status)
            console.log(x.responseText)   
        }   
    })
})