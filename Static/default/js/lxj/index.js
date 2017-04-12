$(function () {
    ////////////////////自动轮播
    var state={
        current:0,
        next:null
    }
    var list=$('ul li');
    // console.log($(list));
    var move=function () {
        state.next=(state.current+1>3)?3:state.current+1;
        if(state.current+1>3){
            clearInterval(t);
            return;
        }
        // console.log(state.current);
        $(list).removeClass('dis zuotui youjin');
        $(list).eq(state.current).addClass('dis zuotui');
        $(list).eq(state.current).addClass('dis zuotui');
        $(list).eq(state.next).addClass('dis youjin');
        state.current=state.next;
    }
    t=setInterval(move,2000);

})