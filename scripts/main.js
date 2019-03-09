
$('.music').parent().click(function () {
    if($(this).children(".music").get(0).paused){
        $(this).children(".music").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".music").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
