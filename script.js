
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa -times');
        $('header').toggleClass('toggle');
    });

     $(window).on('scroll load',function(){ 

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
     });

//smooth scrolling      
// var target = $($(this).attr('href'));
// if (target.length) 


$('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,
    },
    500,
  'linear'
);

});
});
