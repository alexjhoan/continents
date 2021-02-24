new WOW().init();

//---------------------------------bgNavBar----------------------------------

function bgNavBar() {
  let container = $("#banner").height();
  let scroll = $(window).scrollTop();
  if (scroll > (container - 66)) {
    $(".bgheader").addClass("bgShow")
  } else {
    $(".bgheader").removeClass("bgShow")
  }
}

// ------------------------------controls-scroll----------------------------

$(window).on("scroll", function () {
  bgNavBar()
});

// ------------------------------controls-scroll----------------------------

if (screen.width < 992) {
  $("#us5 .containerGrid").addClass("owl-carousel owl-theme")
} else {
  $("#us5 .containerGrid").removeClass("owl-carousel owl-theme")
}

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:0,
  nav:false,
  dots: true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
  }
})
