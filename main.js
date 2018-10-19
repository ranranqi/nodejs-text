myButton.addEventListener('click',()=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求的响应都完成了')

            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功了')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                //把符合JSON语法的字符床转换成JS对应的值（对象或数组）
                let object = window.JSON.parse(string)
                console.log(typeof object)
                console.log(object)
                console.log('object.note')
                console.log(object.note)
                console.log('object.note.body')
                console.log(object.note.body)

            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
    request.open('PUT','/xxx')
    request.send()
})