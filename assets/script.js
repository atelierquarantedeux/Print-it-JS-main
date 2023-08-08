const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const clickArrowLeft = document.querySelector(".arrow_left");
const clickArrowRight = document.querySelector(".arrow_right");
const nbBulletPoint = slides.length;
const displayedImage = document.querySelector(".banner-img");
const txtBanner = document.getElementById("tag_line");

clickArrowLeft.addEventListener("click", () => {
  alert("ça fonctionne sur le bouton gauche !!");
  ChangeSlide(-1);
  ChangeDot(-1);
});

clickArrowRight.addEventListener("click", () => {
  alert("ça fonctionne sur le bouton droit !!");
  ChangeSlide(1);
  ChangeDot(1);
});

// Création des bullet points :

let bullet = `<div class="dot"></div>`;

let dots = document.querySelector(".dots");
dots.innerHTML = `${bullet.repeat(nbBulletPoint)}`;
dots.firstChild.className = "dot dot_selected";

//  Fonction permettant de gérer les dots :

let bulletSelected = 0;

function ChangeDot(sens) {
  bulletSelected = bulletSelected + sens;
  bulletPrecedent = bulletSelected - sens;

  if (bulletSelected < 0) {
    bulletSelected = dots.childNodes.length - 1;
  } else if (bulletSelected > dots.childNodes.length - 1) {
    bulletSelected = 0;
  }

  dots.childNodes[bulletPrecedent].className = "dot";
  dots.childNodes[bulletSelected].className = "dot dot_selected";
}

//  Fonction permettant de gérer les slides du carousel :

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;

  if (numero < 0) {
    numero = nbBulletPoint - 1;
  } else if (numero > nbBulletPoint - 1) {
    numero = 0;
  }

  displayedImage.src = "./assets/images/slideshow/" + slides[numero].image;
  txtBanner.innerHTML = slides[numero].tagLine;
}

setInterval("ChangeSlide(1)", 7000);
setInterval("ChangeDot(1)", 7000);
