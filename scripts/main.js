// $('.video').parent().click(function () {
//     if($(this).children(".video").get(0).paused){
//         $(this).children(".video").get(0).play();
//         $(this).children(".playpause").fadeOut();
//     }else{
//        $(this).children(".video").get(0).pause();
//         $(this).children(".playpause").fadeIn();
//     }
// });
$('.music').parent().click(function () {
    if($(this).children(".music").get(0).paused){
        $(this).children(".music").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".music").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});

// for scroll things
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// // Get the header
// var header = document.getElementById("myHeader");
//
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
//
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
