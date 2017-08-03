let searchTerm= document.querySelector("#inputValue");
let button=document.querySelector("#musicButton");
let main = document.querySelector(".container");
let audio = document.querySelector(".header")
button.addEventListener("click", fetchData);

function fetchData(){
  // fetch("http://crossorigin.me/http://www.recipepuppy.com/api/?q="+searchTerm.value)
  fetch("https://itunes.apple.com/search?term="+searchTerm.value)
  // https://itunes.apple.com/search?parameterkeyvalue
  .then( function(response){
    if(response.status !== 200){
      console.log(response.status);
      return;
    }
      response.json().then(function(reponse){
console.log(reponse.results);

        reponse.results.forEach(function(result){
          main.innerHTML+=`
          <div class="music-box">


            <a href="#"><img src="${result.artworkUrl100}" alt=""></a>
            <div>
            <a href= "${result.previewUrl}"><div>${result.trackName}</div></a>
            <h3>${result.artistName}</h3>
            <audio controls id=playMusic  src="${result.previewUrl}">

            </audio>
            </div>

          </div>

        `;


        console.log(main.innerHTML);
      })

body.addEventListener(“click”, function playMusic(e) {
    if(e.target && e.target.matches(“img”)){
        console.log(“you pressed a button”, e.target);
        audioSource.src = e.target.getAttribute(‘data-music’);
        audioSource.load();
        audioSource.play();
    }
});


    })

  })
}
