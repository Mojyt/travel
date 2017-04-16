$(function(){
    var login=$('.login_3'),zhezhao=$('.zhezhao'),guanbi=$('.guanbi');
    $(login).on('click',function () {
        $(this).toggleClass('acctive');
        $(zhezhao).toggleClass('acctive');
    })
    $(guanbi).on('click',function () {
        $(zhezhao).toggleClass('acctive');
        $(login).toggleClass('acctive');
    })
})