let searchButton = document.getElementById("searchForJs")

let searchBar = document.getElementById("searchBar")

// parte distruzione
let mainColumn = document.querySelectorAll("main div.container-fluid");
searchButton.addEventListener("click", () => {
    mainColumn.forEach((element) => {
      element.classList.add("destruction");
    });
  });


//per rimuover d-none alla searchbar
searchButton.addEventListener("click",()=>{
    
    searchBar.classList.toggle("d-none")
})

//logica get artist
let searchBarText = document.getElementById("searchBarText")
console.log("🚀 ~ file: searchbar_script.js:11 ~ searchBarText:", searchBarText)

// searchBarText.addEventListener("keydown",(e)=>{

// if (e.key === "Enter"){
//     console.log(searchBarText.value);
//     fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${searchBarText.value}`)
//     .then((res)=>{
//         if(res.ok){
//             console.log("tutto ok");
//             return res.json()
//         }else{
//             throw new Error("qualcosa è andato storto")
//         }
//     })
//     .then((obj)=>{
//         console.log(obj);
//         //ci ritorna l'artista
//         backgroundimgArtist(obj);
//         createLikedSection(obj);
//         fetch(obj.tracklist)
//         .then((tracklist)=>{
//             if(tracklist.ok){
//                 return tracklist.json()
//             }else{
//                 throw new Error("qualcosa è andato storto")
//             }
//         })
//         .then((canzoni)=>{
//             console.log("canzoni dell artista",canzoni);
//             let tracks = canzoni.data;
//             console.log("🚀 ~ file: searchbar_script.js:38 ~ .then ~ tracks:", tracks)
//             // QUI DEVI LAVORARE CON L ARRAY
//             destructionMain();
//             populatePopularSong(tracks);
//         })
//         .catch((err)=>
//         console.log(err))
//     })
//     .catch((err)=>console.log(err))
// }
// })