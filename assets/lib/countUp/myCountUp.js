function counterUp(container) {
  setTimeout(()=>{
    $(`${container} .counterUp`).each(function() {
    let $this = $(this),
    countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 5000,
        easing:'easeOutExpo',
        step: function() {
          $this.text(Math.ceil(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  }, 1000)
}

$(window).on("scroll", function () {
  let heightTop1 = $("#us").offset().top;
  let heightTop2 = $("#projects").offset().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height();
  if (scroll > ((heightTop1 - heightWindow) + 200) && (scroll < (heightTop1 + heightWindow))) {
    counterUp('#us')
  } else if (scroll > ((heightTop2 - heightWindow) * 1.15 ) && (scroll < (heightTop2 + heightWindow))) {
    counterUp('#projects')
  }
});


