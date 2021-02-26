// --------------------------Map--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgMap'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'assets/json/map/data.json',
  name: "map"
});

$(window).on("scroll" ,function() {
	let elem = $('#imgMap')
	let scroll = $(window).scrollTop(); 
  let topElemD = elem.position().top - 110;
  let heightElem = elem.height()
  let total = topElemD - heightElem
  let total2 = topElemD + heightElem

  if (window.innerWidth > 991){
    if (scroll > total) {
      lottie.play("map")
    } else {
      lottie.stop("map")
    }
    if (scroll > total2) {
      lottie.stop("map")
    }
  }

  if (window.innerWidth < 992){
    if (scroll > (total/1.2)) {
      lottie.play("map")
    }
    if (scroll < (total/1.2)) {
      lottie.stop("map")
    }
    if (scroll > total2) {
      lottie.stop("map")
    }
  }
})

// --------------------------Ubucation--------------------------

lottie.loadAnimation({
  container: document.getElementById('ubication'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'assets/json/ubication/data.json',
  name: "ubication"
});

$(window).on("scroll" ,function() {
	let elem = $('#project')
	let viewScrollTop = $(window).scrollTop(); 
  let topElemD = elem.position().top;
  let heightElem = elem.height()
  let total = topElemD - heightElem
  let total2 = topElemD + heightElem

  if (viewScrollTop > total) {
  	lottie.play("ubication")
  	
  } else {
  	lottie.stop("ubication")
  }

  if (viewScrollTop > total2) {
  	lottie.stop("ubication")
  }
})

// --------------------------piscina--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgpiscina'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/piscina/data.json',
  name: "piscina"
});

// --------------------------Quicho--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgquincho'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/quincho/data.json',
  name: "quincho"
});

// --------------------------zen--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgzen'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/zen/data.json',
  name: "zen"
});

// --------------------------wifi--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgwifi'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/wifi/data.json',
  name: "wifi"
});

// --------------------------buzon--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgbuzon'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/buzon/data.json',
  name: "buzon"
});

// --------------------------cargador--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgcargador'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/cargador/data.json',
  name: "cargador"
});

// --------------------------recepcion--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgrecepcion'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/recepcion/data.json',
  name: "recepcion"
});

// --------------------------luggage--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgluggage'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/luggage/data.json',
  name: "luggage"
});

// --------------------------toalla--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgtoalla'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/toalla/data.json',
  name: "toalla"
});