
$(window).on('scroll', function(){
  var scroll_depth = $(window).scrollTop();
    buffer = 200;
    
    $('.overlay').each(function(){
        var this_offset = $(this).offset().top;
        
        if (scroll_depth + buffer > this_offset){
            $(this).addClass('visible');
            // code to show text in a popover goes here!
            //console.log($(this).data("text"))
        } else {
            $(this).removeClass('visible');
        }
    })
})

$('.nav').on('click', function(){
    var cover = $(this).attr('data-which');
    var pos = $('#'+cover).offset();
    $('html, body').animate({scrollTop:(pos.top)}, 600);
});


 $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 10;
        
        if ($(window).scrollTop() > navHeight) {
            $('.navbar').addClass('fixed');
        }else {
        $('.navbar').removeClass('fixed'); 
    }
});
