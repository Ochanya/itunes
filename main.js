let searchTerm= document.querySelector("#inputValue");
let button=document.querySelector("#musicButton");
let main = document.querySelector(".container");
let audio = document.querySelector(".header-music");
button.addEventListener("click", fetchData);
let play= document.querySelector("#playMusic");
let playButton = document.querySelector(".playsong");
let body = document.querySelector('.music-site');


function fetchData(){
  fetch("https://itunes.apple.com/search?term="+searchTerm.value)
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
            <a href="#" class="playSong" value= "${result.previewUrl}"><div>${result.trackName}</div></a>
            <h3>${result.artistName}</h3>
            <audio controls id="playMusic"  src="${result.previewUrl}">

            </audio>
            </div>

          </div>

        `;

      })
    })

  })
}
body.addEventListener("click", function playMusic(e) {
    if(e.target && e.target.matches("a.playsong")){
        console.log("you pressed a button", e.target);
        audio.src = e.target.getAttribute("value");
        // audio.appendchild(play);
        audio.load();
        audio.play();
    }
});
