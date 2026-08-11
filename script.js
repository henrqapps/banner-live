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

// Arte do LivePix
const livePix = "img/livepix.png";

const bannerEl = document.getElementById("banner");

let lastIndex = -1;
let livePixVisible = false;

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

// Se o LivePix estiver aparecendo, não inicia outro ciclo
if (livePixVisible) {
return;
}

const first = randomBanner();
const second = randomBanner();

// 1ª imagem
show(first);

// 2ª imagem (6s depois)
setTimeout(() => {
if (!livePixVisible) {
show(second);
}
}, 6000);

// QR Code (12s depois)
setTimeout(() => {
if (!livePixVisible) {
show(qrCode);
}
}, 12000);

// Sumir tudo (22s depois)
setTimeout(() => {
if (!livePixVisible) {
hide();
}
}, 22000);
}

function showLivePix(){

// Marca que o LivePix está ativo
livePixVisible = true;

// Mostra o LivePix
show(livePix);

// Fica na tela por 10 segundos
setTimeout(() => {
hide();
livePixVisible = false;
}, 10000);
}

// Primeira execução
runSequence();

// Ciclo normal a cada 30 minutos
setInterval(runSequence, 30 * 60 * 1000);

// LivePix a cada 10 minutos
setInterval(showLivePix, 10 * 60 * 1000);
