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
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchBarText.value}`)
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
    })
    .catch((err)=>console.log(err))
}
})
