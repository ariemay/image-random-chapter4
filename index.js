const Animals = ["horse.png", "lion.jpeg", "panda.jpeg", "pinguin.jpeg"];
const imagePath = "assets/images/";

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");

const buttonContainer = document.getElementById("buttonContainer");
const changeButton = document.getElementById("changeButton");
const main = document.getElementById("main");
const warning = document.createElement("h1");

warning.innerText = "SAMA YE KAN. :)";

const getRandomImage = () => {
  let randomImage1 = Animals[Math.floor(Math.random() * Animals.length)];
  let randomImage2 = Animals[Math.floor(Math.random() * Animals.length)];
  image1.src = imagePath + randomImage1;
  image2.src = imagePath + randomImage2;

  if (image1.src === image2.src) {
    console.log("Tee Tooot");
    changeButton.style = "background-color: red;";
    main.style = "background-color: azure;";
    buttonContainer.appendChild(warning);
  } else {
    changeButton.style = "background-color: unset;";
    main.style = "background-color: beige;";
    buttonContainer.removeChild(warning);
  }
};

changeButton.onclick = getRandomImage;

// TODO:
/*
1. Apabila saat random image menampilkan gambar yang sama,
maka tombol CHANGE akan berubah menjadi warna merah
2. Hasil dari code challenge dipush ke github di branch masing2.
*/
