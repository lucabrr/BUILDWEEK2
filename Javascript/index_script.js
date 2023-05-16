//funzione distruttore pagina 1
const destructionMain = () => {
    let mainColumn = document.querySelector('main>div.container-fluid');
    console.log("🚀 ~ file: index_script.js:3 ~ destructionMain ~ mainColumn:", mainColumn)
    mainColumn.classList.add('destruction');
};
//lancio funzione distruttore pag1
destructionMain();

//a questo dobbiamo cambiare immagine
let backgroundArtist = document.querySelector('main>div.container-fluid.bg-img-artist');
console.log("🚀 ~ file: index_script.js:11 ~ backgroundArtist:", backgroundArtist)

/* const backgroundimgArtist = () => {
    backgroundArtist.style.backgroundImage: "indirizzo immagine";//da modificare appena abbiamo i dati
}; */

//per cambiare nome artista
let artistName = document.getElementById('artistName');
console.log("🚀 ~ file: index_script.js:20 ~ artistName:", artistName)

/* let changeArtistName = () => {
    artistName.textContent = "quello che mi passa luca"//da modificare appena abbiamo i dati
}; */

let popularSongContainer = document.getElementById('popularSongContainer');
const populatePopularSong = () => {
    for (let i = 0; i <= 4; i++) {
        let popularSong = document.createElement('div');
        let counter = 1;
        popularSong.innerHTML = 
        `
            <div class="row">
                <div class="col-1">${counter + i}</div>
                <div class="col-1">img</div>
                <div class="col-6">nome</div>
                <div class="col-2">ascoltatori</div>
                <div class="col-2">durata</div>
            </div>
        `;
        popularSongContainer.appendChild(popularSong);
    };
};
populatePopularSong();//questa funzione popola la sezione dei brani popolari

//brani che ti piacciono
let songYouLike = document.getElementById('songYouLike');
console.log("🚀 ~ file: index_script.js:48 ~ ImgSongYouLike:", ImgSongYouLike)
let randomNumber = Math.floor(Math.random() * 16) + 5;
console.log("🚀 ~ file: index_script.js:51 ~ createLikedSection ~ randomNumber:", randomNumber)

/* const createLikedSection = () => {
    songYouLike.innerHTML= 
    `
        <div class="row">
            <img src="${}" alt="img">
            <div class="col-10">
                <p>hai messo mi piace a ${} brani</p>
                <p>Di ${}</p>
            </div>
        </div>
    `;
};
 */