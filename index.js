const Animals = ["horse.png", "lion.jpeg", "panda.jpeg", "pinguin.jpeg"]
const imagePath = "assets/images/"

let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")

const changeButton = document.getElementById("changeButton").onclick = getRandomImage

function getRandomImage() {
    document.getElementById("changeButton").style.background='#FFFFFF';
    let randomImage1 = Animals[Math.floor(Math.random() * Animals.length)]
    let randomImage2 = Animals[Math.floor(Math.random() * Animals.length)]
    image1.src = imagePath + randomImage1
    image2.src = imagePath + randomImage2
    if(randomImage1 == randomImage2){
        console.log("same image")
        document.getElementById("changeButton").style.background='#FF0000';
    }
}

// TODO:
/*
1. Apabila saat random image menampilkan gambar yang sama,
maka tombol CHANGE akan berubah menjadi warna merah
2. Hasil dari code challenge dipush ke github di branch masing2.
*/