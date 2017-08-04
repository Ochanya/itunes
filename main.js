let searchTerm= document.querySelector("#inputValue");
let button=document.querySelector("#musicButton");
let main = document.querySelector(".container");
let audio = document.querySelector(".header-music");
let play= document.querySelector("#playMusic");
let playButton = document.querySelector(".playsong");
let body = document.querySelector('.music-site');

body.addEventListener("click", function(e) {

if(e.target=== button){
  fetch("https://itunes.apple.com/search?term="+searchTerm.value)
  .then( function(response){
    if(response.status !== 200){
      console.log(response.status);
      return;
    }
      response.json().then(function(reponse){
        reponse.results.forEach(function(result){
          main.innerHTML+=`
          <div class="music-box">
            <a href="#"><img src="${result.artworkUrl100}" alt=""></a>
            <div>
              <a href="#" class="playSong" value= "${result.previewUrl}">${result.trackName}</a>
              <h3>${result.artistName}</h3>
            </div>
          </div>
        `;
      })
    })
  })
}
  if(e.target && e.target.matches("a.playSong")){
      console.log("you pressed a button", e.target);
      audio.src = e.target.getAttribute("value");
      audio.load();
      audio.play();
  }else{console.log(e.target)}
});
