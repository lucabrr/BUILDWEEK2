//funzione distruttore pagina 1
const destructionMain = () => {
    let mainColumn = document.querySelector('main>div.container-fluid');
    console.log("🚀 ~ file: index_script.js:3 ~ destructionMain ~ mainColumn:", mainColumn)
    mainColumn.classList.add('destruction');
};

//a questo dobbiamo cambiare immagine
let backgroundArtist = document.querySelector('main>div.container-fluid.bg-img-artist');

let backgroundContainer = document.querySelector('.bg-img-artist');
const backgroundimgArtist = (p) => {
    backgroundContainer.classList.remove('bg-success');
    backgroundContainer.style.backgroundImage = `url(${p.picture_xl})`;
};

//per cambiare nome artista
let artistName = document.getElementById('artistName');
console.log("🚀 ~ file: index_script.js:20 ~ artistName:", artistName)

let changeArtistName = () => {
    artistName.textContent = "quello che mi passa luca"//da modificare appena abbiamo i dati
};

let popularSongContainer = document.getElementById('popularSongContainer');
const populatePopularSong = (p) => {
    /* for (let i = 0; i <= 4; i++) { */
    const songArray = Array.from(p);
    songArray.forEach((canzone, index) => {
        let popularSong = document.createElement('div');
        let counter = index + 1;
        const secondsToMinutes = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        };
        let durationInMinutes = secondsToMinutes(canzone.duration);
        popularSong.innerHTML = 
        `
        <div class="row">
            <div class="col-1">${counter}</div>
            <img class="col-1" src="${canzone.album.cover_small}"/>
            <div class="col-6">${canzone.title}</div>
            <div class="col-2">${canzone.rank}</div>
            <div class="col-2">${(durationInMinutes)}</div>
        </div>
        `;
        popularSongContainer.appendChild(popularSong);
    });
};
/* populatePopularSong(); *///questa funzione popola la sezione dei brani popolari

//brani che ti piacciono
let songYouLike = document.getElementById('songYouLike');
console.log("🚀 ~ file: index_script.js:48 ~ songYouLike:", songYouLike)

let randomNumber = Math.floor(Math.random() * 16) + 5;
console.log("🚀 ~ file: index_script.js:51 ~ createLikedSection ~ randomNumber:", randomNumber)

const createLikedSection = (p) => {
    songYouLike.innerHTML= 
    `
        <div class="row">
            <img src="${p.picture_small}" class="col-4 rounded-circle songYouLikeImg" alt="img" >
            <div class="col-8">
                <p>hai messo mi piace a ${randomNumber} brani</p>
                <p>Di ${p.name}</p>
            </div>
        </div>
    `;
};
/* createLikedSection(); */