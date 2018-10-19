myButton.addEventListener('click',()=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求的响应都完成了')

            if(request.status >= 200 && request.status < 300){
                console.log('说明成功了')
                console.log(request.responseText)
                let parser = new DOMParser();
                let xmlDOC = parser.parseFromString(request.responseText,"text/xml");
                let body = xmlDOC.getElementsByTagName('body')[0].textContent
                console.log(body)
            }
        }
    }
    request.open('PUT','/xxx')
    request.send()
})