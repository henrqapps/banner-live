const banners = [
  "img/produto1.png",
  "img/produto2.png",
  "img/produto3.png",
  "img/produto4.png",
  "img/produto5.png",
  "img/produto6.png",
  "img/produto7.png",
  "img/produto8.png",
  "img/produto9.png",
  "img/produto10.png",
  "img/produto11.png"
];

const qrCode = "img/qrcode.png";

const bannerEl = document.getElementById("banner");

let lastIndex = -1;

function randomBanner(){
  let i;
  do {
    i = Math.floor(Math.random() * banners.length);
  } while (i === lastIndex);

  lastIndex = i;
  return banners[i];
}

function show(src){
  bannerEl.classList.remove("show");
  setTimeout(() => {
    bannerEl.src = src;
    bannerEl.classList.add("show");
  }, 200);
}

function hide(){
  bannerEl.classList.remove("show");
}

function runSequence(){

  const first = randomBanner();
  const second = randomBanner();

  // 1ª imagem (6s)
  show(first);

  // 2ª imagem (6s depois)
  setTimeout(() => {
    show(second);
  }, 6000);

  // QR code (12s depois)
  setTimeout(() => {
    show(qrCode);
  }, 12000);

  // sumir tudo (22s depois)
  setTimeout(() => {
    hide();
  }, 22000);
}

// primeira execução
runSequence();

// repetir a cada 30 minutos
setInterval(runSequence, 30 * 60 * 1000);
