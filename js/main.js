

$(document).ready(function () {
    //  navigation bar fixed
    $(function () {
        var header = $(".header-area");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 65) {
                header.addClass('fixed');
            } else {
                header.removeClass("fixed");
            }
        });
    });
    // 
//   chosen plugin
$(".form-control.chosen") .chosen();

// select label show / hide
$(function () {
    $(document).on("click", "body, .form-group", function(){
        $("label.active").removeClass("active");
    });

$(document).on("click", ".form-group", function(e){
    $(this).children("label").addClass("active");
    e.stopPropagation();
});


   });






});

//    menu header area 

$(window).scroll(function(){
    if ($(this).scrollTop() > 25) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// loader area
$(window).on('load', function (e) {
    $(".loader-main-area").delay(1000).fadeOut("slow"); // will fade out the white DIV that covers the website.
})

// --------------index page scroll down
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.home-learning-language').offset().top }, 'slow');
      return false;
    });
  });

//   ---------------live session mute video area--------------------
$(".control-area ul li .btn").click(function(){
    $(this).toggleClass("active");
  });

   
