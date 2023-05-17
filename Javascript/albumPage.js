//immagine album
const getImage = (p) => {
    albumDisplayImage.src = p.cover_medium;
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
        <img src="${p.artist.picture_small}" alt"artist picture"/>
        <p>${p.artist.name} • ${p.release_date.slice(0, 5)} • ${p.nb_tracks} brani, ${minutes} min ${remainingSeconds} sec.</p>
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
        <div class="row songContainer">
            <div class="col-1 d-flex justify-content-center align-items-center">${counter}</div>
            <div class="col-6 d-flex flex-column align-items-center">
                <a data-id-track="${track.id}" href="#" class="text-black">${track.title}</a>
                <a data-id-track="${track.id}" href="#" class="text-black">${track.artist.name}</a>
            </div>
            <div class="col-2 d-flex align-items-center">
                ${Number(track.rank).toLocaleString("it-IT")}
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
                ${(durationInMinutes)}
            </div>
        </div>
        `;
        trackContainer.appendChild(trackDiv);
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
  