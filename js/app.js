

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

$( ".myBtn_inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".myBtn_circle").css({"left": relX, "top": relY });
  $(this).prev(".myBtn_circle").removeClass("desplode-circle");
  $(this).prev(".myBtn_circle").addClass("explode-circle");

});

$( ".myBtn_inner" ).mouseleave(function(e) {

    var parentOffset = $(this).offset(); 

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".myBtn_circle").css({"left": relX, "top": relY });
    $(this).prev(".myBtn_circle").removeClass("explode-circle");
    $(this).prev(".myBtn_circle").addClass("desplode-circle");

});




const buttons = document.querySelectorAll('.myCircle')
buttons.forEach((button) => {
  button.onclick = function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement('span')

    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    this.appendChild(ripple)
    // setTimeout(function() {
    //   ripple.remove()
    // }, 600)
  }
})

var swiper = new Swiper(".productSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".productSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
