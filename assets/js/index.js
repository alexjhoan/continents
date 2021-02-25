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

// ----------------------------------Projects----------------------------------


$(el).css('width', '20px');

//---------------------------------Gallery-Advance----------------------------------

if (screen.width > 768){
  $("#lightgallery").lightGallery();
  const items =  $('#lightgallery a').length;
  let shown = screen.width < 992 ? 4 : 5
  $('#lightgallery a:lt('+shown+')').show();
  function seeMore() {
    let showItems = $('#lightgallery a:visible').length+shown;
    $('#lightgallery a:lt('+showItems+')').fadeIn(1000);
    if(showItems >= items) {
      $('.more').fadeOut(500);
    }
  }
}  else {
  $("#lightgallery").addClass("owl-carousel owl-theme")
  $('#advance .owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    nav:false,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      575:{
        items:2
      },
    }
  })
}

// ------------------------------controls-scroll----------------------------

$(window).on("scroll", function () {
  bgNavBar()
});

// --------------------------------Continents-------------------------------

if (screen.width < 992) {
  $("#us5 .containerGrid").addClass("owl-carousel owl-theme")
} else {
  $("#us5 .containerGrid").removeClass("owl-carousel owl-theme")
}

$('#us5 .owl-carousel').owlCarousel({
  loop:false,
  margin:0,
  nav:false,
  dots: true,
  responsive:{
    0:{
      items:1
    },
    575:{
      items:3
    },
  }
})

// --------------------------------Parallax BANNER-------------------------------
$(document).ready(function(){

  $(window).scroll(function(){
    var barra = $(window).scrollTop();
    var posicion =  (barra * 0.10);

    $('.left').css({
      'background-position': '0 -' + posicion + 'px'
    });
  });
});
// --------------------------------Parallax US2-------------------------------
$(document).ready(function(){

  $(window).scroll(function(){
    var barra = $(window).scrollTop();
    var posicion =  (barra * 0.10);

    $('.us2').css({
      'background-position': '0 -' + posicion + 'px'
    });
  });
});
