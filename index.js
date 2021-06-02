const Animals = ["horse.png", "lion.jpeg", "panda.jpeg", "pinguin.jpeg"];
const imagePath = "assets/images/";

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
const changeButton = document.getElementById("changeButton");
const backgroundContainer = document.getElementById("main");

function getRandomImage() {
  let randomImage1 = Animals[Math.floor(Math.random() * Animals.length)];
  let randomImage2 = Animals[Math.floor(Math.random() * Animals.length)];
  image1.src = imagePath + randomImage1;
  image2.src = imagePath + randomImage2;

  if (image1.src === image2.src) {
    console.log("Tee Tooot");
    changeButton.style = "background-color: red;";
    backgroundContainer.style = "background-color: azure;";
  } else {
    changeButton.style = "background-color: unset;";
    backgroundContainer.style = "background-color: beige;";
  }
}

changeButton.onclick = getRandomImage;

// TODO:
/*
1. Apabila saat random image menampilkan gambar yang sama,
maka tombol CHANGE akan berubah menjadi warna merah
2. Hasil dari code challenge dipush ke github di branch masing2.
*/
