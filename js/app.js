

// const mobileUl = document.querySelector('.mobileUl ul')

// const burgerHandlerOpen = () => {
//     mobileUl.classList.add('active')
// }

// const burgerHandlerClose = () => {
//     mobileUl.classList.remove('active')
// }

// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop < document.documentElement.scrollTop ) {
//       document.querySelector('.Navbar').classList.add('actived')
//   } else {
//     document.querySelector('.Navbar').classList.remove('actived')
//   }
// }

// const spiner = document.querySelector(".spiner");

// document.addEventListener("load", () => {
//   spiner.style.display = "none ";
// });

// function navbar() {
//   const nav = document.querySelector(".navBar");
//   let scrolling = window.pageYOffset > 200;

//   nav.classList.toggle("active", scrolling);
// }

// window.addEventListener("scroll", () => {
//   navbar();
// });


// document.querySelector('.burger').addEventListener('click', () => {
//     document.querySelector('.burger').classList.toggle('burgered')
//     document.querySelector('.mobile').classList.toggle('active')
// })

$( ".button_su_inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$( ".button_su_inner" ).mouseleave(function(e) {

    var parentOffset = $(this).offset(); 

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");

});