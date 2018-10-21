myButton.addEventListener('click',(e)=>{
    $.ajax({
        url: '/xxx',
        type: 'get',   
    }).then(
        (responseText)=>{
            console.log(responseText);
            return responseText
        },
        (request)=>{
            console.log('error1');return '已经处理'}
        ).then(
            (上一次的处理结果)=>{
                console.log(上一次的处理结果)
            },
            (request)=>{
                console.log('error2')
            }
        )
})