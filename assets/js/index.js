$(window).on('load', function () {
  $('body').delay(200).css('opacity', '1');
});

new WOW({offset:200, scrollContainer: null}).init()

//---------------------------------bgNavBar----------------------------------

function bgNavBar() {
  let container = $("#banner").height();
  let scroll = $(window).scrollTop();
  if (scroll > 150 ) {
    $(".bgheader").addClass("bgShow")
  } else {
    $(".bgheader").removeClass("bgShow")
  }
}

function closeCollapse (){
  $('.navbar-collapse.show').removeClass('show')
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
  let shown = screen.width < 992 ? 8 : 10
  let showItems = $('#lightgallery a:visible').length+shown;
  $('#lightgallery a:lt('+shown+')').show();
  if(showItems >= items) {
    $('.more').fadeOut(500);
  }
  function seeMore() {
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

// --------------------------------Parallax Backgrouns-------------------------------

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

function usParallax() {
  let container = $("#us2")
  let heightTop = container.offset().top;
  let heightElem = container.height()
  let heightWindow = $(window).height();
  let scroll = $(window).scrollTop()
  let positionY = scroll - heightTop
  if ((scroll > (heightTop - heightWindow)) && (scroll < (heightTop + ( heightElem *2 )))) {
    container.css({
      "background-position": "0px " + -0.4 * Math.floor(positionY) + "px"
    })
  }
}


// ------------------------------controls-inits----------------------------

$(document).ready(function(){
  autoProgress('2020/12/01', '2022/03/01', 'progressBarMale', 'percentageMale')
  autoProgress('2021/04/01', '2023/04/01', 'progressBarFirenze', 'percentageFirenze')
})


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

// --------------------------------grafic-------------------------------

lottie.loadAnimation({
  container: graphic,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'assets/json/data.json',
  name: "graphic"
});

function grafic() {
  let container = $("#us3 .left")
  let heightTop = container.offset().top;
  let heightWindow = $(window).height();
  let scroll = $(window).scrollTop()
  if ((scroll > (heightTop - (heightWindow - 400))) && (scroll < (heightTop + heightWindow))) {
    lottie.play("graphic")
  } else {
    lottie.stop("graphic")
  }
}


// ------------------------------controls-scroll----------------------------

$(window).on("scroll", function () {
  bgNavBar()
  bannerParallax()
  usParallax()
  grafic()
});

// ------------------------------Form-----------------------------

function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy?mid=formulario&func=ajax_save&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 100)
  });
}

function submited() {
  const form = document.querySelector('#contactForm')
  const data = JSON.stringify({
    nombre: form.name.value,
    apellido: "",
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    source: 2,
    utm_source: "web_continents",
    extra: form.consult.value,
    IDpais: 1,
    IDform: 447
  })
  event.preventDefault()
  if (!form.checkValidity()) {
    event.stopPropagation()
  }else{
    dataSubmited(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}

// ------------------------------Contact mobil-----------------------------
if ($(window).width() <= 992){
  $("#contact").find(".wow").removeClass("wow");
}



