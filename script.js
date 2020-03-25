$(document).ready(function(){
    $(".left").click(function(){
        $(".image").animate({
            right: '+=50px'
        });
    });

    $(".right").click(function(){
        $(".image").animate({
            left: '+=50px'
        });
    });

    $(".top").click(function(){
        $(".image").animate({
            bottom: '+=50px'
        });
    });

    $(".bottom").click(function(){
        $(".image").animate({
            top: '+=50px'
        });
    });
});