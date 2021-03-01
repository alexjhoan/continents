function counterUp() {
  let container = $(".counterUp");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height();
  if (scroll > (heightTop + 255) && (scroll < (heightTop + heightWindow))) {
    setTimeout(()=>{
      container.each(function() {
      let $this = $(this),
      countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 8000,
          easing:'easeOutExpo',
          step: function() {
            $this.text(Math.ceil(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });
    }, 750)
  }
}

$(window).on("scroll", function () {
  counterUp()
});

