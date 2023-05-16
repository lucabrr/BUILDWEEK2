let searchButton = document.getElementById("searchForJs")
console.log(searchButton);
let searchBar = document.getElementById("searchBar")

searchButton.addEventListener("click",()=>{
    
    searchBar.classList.toggle("d-none")
})

let searchBarText = document.getElementById("searchBarText")

searchBarText.addEventListener("keydown",(e)=>{

if (e.key === "Enter"){
    console.log(searchBarText.value);
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${searchBarText.value}`)
    .then((res)=>{
        if(res.ok){
            console.log("tutto ok");
            return res.json()
        }else{
            throw new Error("qualcosa è andato storto")
        }
    })
    .then((obj)=>{
        console.log(obj);
        fetch(obj.tracklist)
        .then((tracklist)=>{
            if(tracklist.ok){
                return tracklist.json()
            }else{
                throw new Error("qualcosa è andato storto")
            }
        })
        .then((canzoni)=>{
            console.log("canzoni dell artista",canzoni);
            // QUI DEVI LAVORARE CON L ARRAY
        })
        .catch((err)=>
        console.log(err))
    })
    .catch((err)=>console.log(err))
}
})
