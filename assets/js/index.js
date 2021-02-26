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

// ------------------------------aniamtions graphic US3----------------------------

  lottie.loadAnimation({
  container: document.getElementById('graphic'), // Required
  path: 'assets/json/data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})

// ------------------------------aniamtions graphic US3----------------------------
const options = {
  duration: 4,
};
let demo = new CountUp('cont20', 20, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
