$(document).ready(function(){
    var altura = $("header").offset().top;
    
    $(window).on("scroll", function(){
        if ( $(window).scrollTop() > altura ){
            $("header").addClass("header-sticky");
        } else {
            $("header").removeClass("header-sticky");
        }
    })
});

