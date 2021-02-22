new WOW().init();

//---------------------------------bgNavBar----------------------------------

function bgNavBar() {
  let container = $("#banner").height();
  let scroll = $(window).scrollTop();
  if (scroll > container) {
    $(".bgheader").addClass("bgShow")
  } else {
    $(".bgheader").removeClass("bgShow")
  }
}

// ------------------------------controls-scroll----------------------------


$(window).on("scroll", function () {
  bgNavBar()
});
