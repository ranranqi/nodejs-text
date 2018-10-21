myButton.addEventListener('click',(e)=>{
    $.ajax({
        url: '/frank',
        type: 'get',   
    }).then(
        (responseText)=>{console.log(responseText)},
        (request)=>{console.log('error')})
})