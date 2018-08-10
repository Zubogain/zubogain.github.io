$(document).ready(function(){
  $('a[href^="#"]').click(function () { 
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser.safari){
    $('body').animate( { scrollTop: destination }, 1000 );
    } else {
        $('html').animate( { scrollTop: destination }, 1000 );
    }
    return false;
    });
});