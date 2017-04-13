$(function () {
    var inputs=$('.password-box .input');
    var num=0
    console.log(inputs.val());
    // if(input.val().length===6){
    //     alert(1);
    //    inputs.blur();
    // }

    onlyNum=function() {
        if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
            if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)))
                event.returnValue=false;  //执行至该语句时，阻止输入；可类比阻止冒泡原理或者禁止右键功能；
    }
    inputs.on('keyup',function(){
       num++;
        if(num>5){
           $(this).blur();
          var password=inputs.val();
            // console.log(password);
            $.post(
               url='/index.php/index/check',
               data={password:password},
                success=function(res){
                  console.log(res);
                }
           )
        }

    })



})