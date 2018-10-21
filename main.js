
function success(responseText){
    console.log(responseText)
}
function fail(request){
    console.log(request)
}

myButton.addEventListener('click',(e)=>{
    $.ajax({
        url: '/xxx',
        type: 'post',   
    }).then(success,fail)
})