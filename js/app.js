$(document).ready(function(){
    menu();
})

function menu(){
    $(".gnb>li").hover(
        function(){
            var idx=$(this).index()
            console.log(idx)
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown()

        },
        function(){
            $(".lnb").stop().slideUp()
        }
    )
}