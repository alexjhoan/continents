new WOW({offset:200}).init()

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

//---------------------------------Gallery-Advance----------------------------------

function goGallery() {

}

function seeMore() {


  if (screen.width < 992){

  }


  const items =  10;
  let shown =  5;
  $('.more').click(function () {
    shown = $('#lightgallery a:visible').length+5;
    if(shown < items) {
      $('#lightgallery a:lt('+shown+')').fadeIn(1000);
      $('.more').fadeOut();
      $('#lightgallery a:lt('+items+')').fadeIn(1000);
    }
  });
}

if (screen.width < 992){

}  else{
  $("#lightgallery").lightGallery();
  $('#lightgallery a:lt(5)').show();
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
