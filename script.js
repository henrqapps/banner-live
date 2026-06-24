const banners = [
  "img/produto1.png",
  "img/produto2.png",
  "img/produto3.png",
  "img/produto4.png",
  "img/produto5.png",
  "img/produto6.png",
  "img/produto7.png",
  "img/produto8.png"
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

function run(){
  const b1 = randomBanner();
  const b2 = randomBanner();

  show(b1);

  setTimeout(() => show(b2), 8000);
  setTimeout(() => show(qrCode), 16000);

  setTimeout(() => {
    bannerEl.classList.remove("show");
  }, 13000);
}

run();
setInterval(run, 30 * 60 * 1000);
