//pesco canzone random per pagina principale
let randomArtistDraw = Math.floor(Math.random() * 4) + 1;
let mostListenedArtistItaly = ["green-day", "linkin-park", "sum-41", "charlotte-de-witte", "dua-lipa"];

let myCardImg = document.getElementById('myCardImg');
let myCardTitle = document.getElementById('myCardTitle');
let myCardArtist = document.getElementById('myCardArtist');
let buttonPlay = document.getElementById('buttonPlay');
let buttonPause = document.getElementById('buttonPause');

const getRandomSong = () => {
    fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${mostListenedArtistItaly[randomArtistDraw]}`
      )
        .then((res) => {
          if (res.ok) {
            console.log("tutto ok");
            return res.json();
          } else {
            throw new Error("qualcosa è andato storto nel trovare il cantante");
          }
        })
        .then((obj) => {
          console.log("artista trovato randomicamente", obj);
          //ci ritorna l'artista
          fetch(obj.tracklist)
            .then((tracklist) => {
              if (tracklist.ok) {
                return tracklist.json();
              } else {
                throw new Error("qualcosa è andato storto");
              }
            })
            .then((firstSong) => {
              console.log("canzone trovata randomicamente", firstSong.data[0])
              console.log(firstSong.data[0].album.cover_medium)
              let newFirstSong = firstSong.data[0];
              myCardImg.src = newFirstSong.album.cover_medium;
              myCardTitle.innerText = newFirstSong.title;
              myCardArtist.innerText = newFirstSong.artist.name;
              //colleghiamo il paly alla canzone
              const playAudio = (newFirstSong) => {
                let audio = new Audio(newFirstSong.preview);
                audio.play();
    
                 photoFooter = document.getElementById("photoFooter")
                 songTitleFooter = document.getElementById("songTitleFooter")
                 artistNameFooter = document.getElementById("artistNameFooter")
                let durationFooter = document.getElementById('durationSong')
                const secondsToMinutes = (seconds) => {
                    const minutes = Math.floor(seconds / 60);
                    const remainingSeconds = seconds % 60;
                    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
                };
                let durationInMinutes = secondsToMinutes(newFirstSong.duration);
    
                photoFooter.src= newFirstSong.album.cover_small
                songTitleFooter.innerText = newFirstSong.title
                artistNameFooter.innerText= newFirstSong.artist.name
    
                localStorage.setItem("lastImg",photoFooter.src)
                localStorage.setItem("lastSong",songTitleFooter.innerText)
                localStorage.setItem("lastArtist",artistNameFooter.innerText)
                durationSong.innerText = durationInMinutes
            }
            let myCardPlay = document.getElementById('myCardPlay');
            myCardPlay.addEventListener('click', () => {
                greenBar.style.animation = 'none';
                greenBar.offsetHeight;
                greenBar.style.animation = null;
                /* greenBar.classList.remove('progressBar'); */
                playAudio(newFirstSong)
                greenBar.classList.add('progressBar');
                greenBarMobile.classList.add('progressBarMobile');
                buttonPlay.classList.add('d-none');
                buttonPause.classList.remove('d-none');
                });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

window.onload = () => {
    getRandomSong();
};
console.log("🚀 ~ file: index_script.js:38 ~ getRandomSong():", getRandomSong())





    
let artistSongsContainer = document.getElementById("artistSongsContainer")
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

//per cambiare nome artista e ascoltatori
let artistName = document.getElementById('artistName');
let artistFan = document.getElementById('artistFan');


let changeArtistName = (p) => {
    artistName.textContent = `${p.name}`;
    artistFan.textContent = `${Number(p.nb_fan).toLocaleString("it-IT")} ascoltatori mensili`;
};

//controllo album uguali
let allAlbumIds = [];

const confrontObject = (a, b) => {
    return a.id === b.id;
};

const removeSameObj = (array) => {
    return array.filter((obj, index, arr) => {
        for (let i = 0; i < index; i++) {
            if (confrontObject(obj, arr[i])) {
                allAlbumIds.splice(index, 1);
            }
        }
    });
};

//creazione oggetto per card album
class AlbumFromArtistSongs {

    constructor(id, title, image) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
};

const createAlbumCard = (p) => {
    let currentSong = new AlbumFromArtistSongs(p.album.id, p.album.title, p.album.cover_medium);
    allAlbumIds.push(currentSong);
};

const createDiscographySection = (album) => {
    let discographySection = document.createElement("div");
    discographySection.classList.add('row');
    discographySection.classList.add('justify-content-around');
    discographySection.classList.add('row-cols-2');
    discographySection.classList.add('row-cols-sm-3');

    discographySection.classList.add('row-cols-md-3');
    discographySection.classList.add('row-cols-lg-5');


    


    contentArtist.appendChild(discographySection);
    // let discographyTitle = document.createElement('h5');
    // discographyTitle.textContent = 'Discografia';
    // discographyTitle.classList.add('col-12');
    // discographySection.appendChild(discographyTitle);
    album.forEach((obj) => {
        let singleCard = document.createElement("div");
        singleCard.classList.add('col');
        discographySection.appendChild(singleCard);
        singleCard.innerHTML = 
            `
                    <a data-album-id="${obj.id}" href="#">
                        <div class="card mb-2 bg-dark">
                            <img
                                src="${obj.image}"
                                class="card-img-top p-2 rounded-4"
                                alt="..."
                            />
                            <div class="card-body">
                                <h6 class="text-light">${obj.title}</h6>
                            </div>
                        </div>
                    </a>
            `;
    })
};
let albumPage = document.getElementById('albumPage');
//passaaggio a pagina album
const transformPage = (a) => {
    a.forEach((card) => {
        card.addEventListener('click', () => {
            // heroArtist.classList.add('d-none');
            // contentArtist.classList.add('d-none');
            artistSongsContainer.classList.add("d-none")
            albumPage.classList.remove('d-none');
            let myId = card.getAttribute('data-album-id');
            console.log("🚀 ~ file: index_script.js:98 ~ allAlbumCards.forEach ~ myId:", myId);
            getAlbumInfo(myId);
            
        })
    })
};

//popolare pagina artista
let popularSongContainer = document.getElementById('popularSongContainer');
let greenBar = document.getElementById('greenBar');
let greenBarMobile = document.getElementById('greenBarMobile');

const populatePopularSong = (p) => {
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
        <div class="row songContainer my-2 songInsideAlbum">
            <div class="col-1 d-flex align-items-center">${counter}</div>
            <a data-id-song="${canzone.id}" href="#" class="col-2 d-flex align-items-center"><img src="${canzone.album.cover_small}"/></a>
            <div class="col-5 d-flex align-items-center"><a data-id-song="${canzone.id}" href="#">${canzone.title}</a></div>
            <div class="col-2 d-flex align-items-center d-none d-lg-flex">${Number(canzone.rank).toLocaleString("it-IT")}</div>
            <div class="col-2 d-flex align-items-center d-none d-lg-flex">${(durationInMinutes)}</div>
        </div>
        `;
        popularSongContainer.appendChild(popularSong);
        //avvio audio al click su img e titolo canzone
        const playAudio = (song) => {
            let audio = new Audio(song.preview);
            audio.play();
        }
        let allSongImg = popularSong.querySelector('.songContainer a, .songContainer div>a');
        allSongImg.addEventListener('click', () => {
            greenBar.classList.remove('progressBar');
            playAudio(canzone)
            greenBar.classList.add('progressBar');
            greenBarMobile.classList.add('progressBarMobile');
             photoFooter = document.getElementById("photoFooter")
             songTitleFooter = document.getElementById("songTitleFooter")
             artistNameFooter = document.getElementById("artistNameFooter")
            let durationFooter = document.getElementById('durationSong')

            photoFooter.src= canzone.album.cover_small
            songTitleFooter.innerText = canzone.title
            artistNameFooter.innerText= canzone.artist.name

            localStorage.setItem("lastImg",photoFooter.src)
            localStorage.setItem("lastSong",songTitleFooter.innerText)
            localStorage.setItem("lastArtist",artistNameFooter.innerText)
            durationSong.innerText = durationInMinutes

            buttonPlay.classList.add('d-none');
            buttonPause.classList.remove('d-none');


            
            });
        /* buttonPause.addEventListener('click', function(){
            buttonPause.classList.add('d-none');
            buttonPlay.classList.remove('d-none');
            audio.pause();
        }) */
        createAlbumCard(canzone);
        removeSameObj(allAlbumIds);
    }); // fine primo forEach
        //creazione cards album
        createDiscographySection(allAlbumIds);
        let allAlbumCards = document.querySelectorAll('[data-album-id]');
        console.log("🚀 ~ file: index_script.js:131 ~ populatePopularSong ~ allAlbumCards:", allAlbumCards)
        transformPage(allAlbumCards);
};


//brani che ti piacciono
let songYouLike = document.getElementById('songYouLike');
console.log("🚀 ~ file: index_script.js:48 ~ songYouLike:", songYouLike)

let randomNumber = Math.floor(Math.random() * 16) + 5;
console.log("🚀 ~ file: index_script.js:51 ~ createLikedSection ~ randomNumber:", randomNumber)

const createLikedSection = (p) => {
    songYouLike.innerHTML= 
    `
        <div class="row">
            <img src="${p.picture_small}" class="col-4 rounded-circle songYouLikeImg " alt="img" >
            <div class="col-8">
                <p>hai messo mi piace a ${randomNumber} brani</p>
                <p>Di ${p.name}</p>
            </div>
        </div>
    `;
};

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('d-none');
    buttonPlay.classList.remove('d-none');
    greenBar.style.animationPlayState = 'paused';
    greenBarMobile.style.animationPlayState = 'paused';
})