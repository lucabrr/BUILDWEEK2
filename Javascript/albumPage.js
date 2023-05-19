//ultima canzone corrente footer
let photoFooter = document.getElementById("photoFooter")
let songTitleFooter = document.getElementById("songTitleFooter")
let artistNameFooter = document.getElementById("artistNameFooter") 

const lastSongPlayed = function(){
    if(localStorage.getItem("lastImg")){
      let lastImg = localStorage.getItem("lastImg")
       let lastSong = localStorage.getItem("lastSong")
          let lastArtist = localStorage.getItem("lastArtist")

          photoFooter.src = lastImg
            songTitleFooter.innerText = lastSong
            artistNameFooter.innerText= lastArtist

    }
}
lastSongPlayed()

const getImage = (p) => {
    albumDisplayImage.src = p.cover_medium;
    };


const setBackgroundColor = (color) => {
    let gradient = `linear-gradient(0deg, #${color} 50%, rgba(43,43,43,1) 91%)`;
    document.getElementById('albumPage').style.background = gradient;
};

//titolo album
const getTitle = (p) => {
    albumDisplayTitle.textContent = p.title;
};
//interpolazione album
const getInterpolation = (p) => {
    let seconds = p.duration;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    interpolationAlbum.innerHTML = 
    `
        <img src="${p.artist.picture_small}" alt"artist picture" class="rounded-5 me-2"/>
        <p class="mb-0">${p.artist.name} • ${p.release_date.slice(0, 4)} • ${p.nb_tracks} brani, ${minutes} min ${remainingSeconds} sec.</p>
    `
};
//canzoni album
let trackContainer = document.getElementById('trackContainer');

const populateAlbumSongs = (p) => {
    const tracksArray = Array.from(p);
    tracksArray.forEach((track, index) => {
        let trackDiv = document.createElement('div');
        let counter = index + 1;
        const secondsToMinutes = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        };
        let durationInMinutes = secondsToMinutes(track.duration);
        trackDiv.innerHTML = 
        `
        <div class="row songContainer mb-2 songInsideAlbum">
            <div class="col-1 d-flex justify-content-center align-items-center">${counter}</div>
            <div class="col-11 col-md-5 d-flex flex-column align-items-start">
                <a data-id-track="${track.id}" href="#" class="">${track.title}</a>
                <a data-id-track="${track.id}" href="#" class="text-secondary">${track.artist.name}</a>
            </div>
            <div class="col-3 d-none d-md-flex align-items-center justify-content-end">
                ${Number(track.rank).toLocaleString("it-IT")}
            </div>
            <div class="col-3 d-none d-md-flex justify-content-center align-items-center">
                ${(durationInMinutes)}
            </div>
        </div>
        `;
        trackContainer.appendChild(trackDiv);
        //avvio audio al click su img e titolo canzone
        const playAudio = (song) => {
            let audio = new Audio(track.preview);
            audio.play();

             photoFooter = document.getElementById("photoFooter")
             songTitleFooter = document.getElementById("songTitleFooter")
             artistNameFooter = document.getElementById("artistNameFooter")
            let durationFooter = document.getElementById('durationSong')

            photoFooter.src= track.album.cover_small
            songTitleFooter.innerText = track.title
            artistNameFooter.innerText= track.artist.name

            localStorage.setItem("lastImg",photoFooter.src)
            localStorage.setItem("lastSong",songTitleFooter.innerText)
            localStorage.setItem("lastArtist",artistNameFooter.innerText)
            durationFooter.innerText = durationInMinutes
        }
        let allSongImg = trackDiv.querySelector('.songContainer a');
        allSongImg.addEventListener('click', () => {
            greenBar.style.animation = 'none';
            greenBar.offsetHeight;
            greenBar.style.animation = null;
            /* greenBar.classList.remove('progressBar'); */
            playAudio(track)
            greenBar.classList.add('progressBar');
            greenBarMobile.classList.add('progressBarMobile');
            buttonPlay.classList.add('d-none');
            buttonPause.classList.remove('d-none');
            });
        /* const pauseAudio = (song) => {
            let audio = new Audio(track.preview);
            audio.pause();
        }
        buttonPause.addEventListener('click', function(){
            buttonPause.classList.add('d-none');
            buttonPlay.classList.remove('d-none');
            pauseAudio(audio);
        }) */
    }); // fine primo forEach

};


const getAlbumInfo = (id) => {
    fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`
      )
        .then((res) => {
          if (res.ok) {
            console.log("tutto ok nel caricamento degli album");
            return res.json();
          } else {
            throw new Error("qualcosa è andato storto nel caricamento degli album");
          }
        })
        .then((album) => {
          console.log(album);
          console.log(album.tracks.data);
          //popoliamo pagina album
            let albumDisplayImage = document.getElementById('albumDisplayImage');
            let albumDisplayTitle = document.getElementById('albumDisplayTitle');
            let interpolationAlbum = document.getElementById('interpolationAlbum');
            getImage(album);
            getTitle(album);
            getInterpolation(album);
            populateAlbumSongs(album.tracks.data);
        })
        .catch((err) => console.log(err));
};
  