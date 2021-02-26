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

 $(document).ready(function() {
      $("#lightgallery").lightGallery();
  });
  $(document).ready(function () {
    $('#lightgallery a:lt(5)').show();
    const items =  10;
    let shown =  5;
    $('.more').click(function () {
      console.log('click')
        shown = $('#lightgallery a:visible').length+5;
        if(shown < items) {
          $('#lightgallery a:lt('+shown+')').fadeIn(1000);
            console.log('if')
            console.log(shown)

        } else {
          $('.more').fadeOut();
          $('#lightgallery a:lt('+items+')').fadeIn(1000);
            console.log('else')

        }
    });
});

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
