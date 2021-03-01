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

function autoProgress(dateInit, dateEnd, IdProgress, IdImpPercentage) {
  let nowDate = new Date().getTime();
  let initDate = new Date(dateInit).getTime();
  let endDate = new Date(dateEnd).getTime();
  let width = $(`#${IdProgress}`)
  if ((nowDate > initDate) && (nowDate < endDate)) {
    let progress = ((nowDate - initDate) / (endDate - initDate)) * 100
    $(width).css('width', `${Math.ceil(progress)}%`);
    $(`#${IdImpPercentage}`).html(`${Math.ceil(progress)}% construido`)
  } else if(nowDate < initDate){
    $(width).css('width', '1%');
  } else if (nowDate > endDate) {
    $(width).css('width', '100%');
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

// --------------------------------Parallax BANNER-------------------------------

function bannerParallax() {
  let container = $("#banner .left")
  let heightElem = container.height()
  let scroll = $(window).scrollTop()
  if (scroll >= 0 && scroll < heightElem) {
    container.css({
      "background-position": "0px " + -0.4 * scroll + "px"
    })
  }
}


// ------------------------------controls-inits----------------------------

$(document).ready(function(){
  autoProgress('2020/12/01', '2022/03/01', 'progressBarMale', 'percentageMale')
  autoProgress('2021/04/01', '2023/04/01', 'progressBarFirenze', 'percentageFirenze')
})


// ------------------------------controls-scroll----------------------------

$(window).on("scroll", function () {
  bgNavBar()
  bannerParallax()
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

// --------------------------------Continents-------------------------------
lottie.loadAnimation({
  container: graphic, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/data.json' // the path to the animation json
});

