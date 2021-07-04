// function when window gets load
window.onload=()=>{
    // sweet alert
    Swal.fire(
        'Welcome\nTo My Music Page',
        'To show/hide the Player<br><b>Click on the Heading Above.</b> ',
        // 'gh',
        'success'
      );
    // to track the current playying song
    track();
}
let controls = document.getElementById("controllers");  //id controllers 
let header = document.getElementById('header'); //id header
let clickHeader = true; //boolean for header
header.onclick=() =>{   //whether to show the controls or not
    if(clickHeader){
        controls.style.display = "none";
        clickHeader=false;
    }else
    {
        controls.style.display = "flex";
        clickHeader = true;
    }
} 

let isplay = false; //to check song is playying or not
//variables to capture all the id's
let playButton = document.getElementById('playButton');
let myAudio = document.getElementById('myAudio');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let artist = document.getElementById("artist");
let song = document.getElementById("song");
let count = document.getElementById("count");
let index = 0;  //to keep the index of playing song

// song list with full details
const lists = [
    {
        image: "url('images/king.jpg')",
        phone: "url('images/king.jpg')",
        songName: "Tu Aake Dekh Le",
        artistName: "King",
        song: "audios/tu.mp3"
    },
    {
        image: "url('images/maroon.jpg')",
        phone: "url('phone/maroon.jpg')",
        songName: "Stereo Hearts",
        artistName: "Maroon 5",
        song: "audios/hearts.mp3"
    },
    {
        image: "url('images/dua.jpg')",
        phone: "url('phone/dua.jpg')",
        songName: "Levitating",
        artistName: "Dua Lipa",
        song: "audios/levitating.m4a"
    },
    {
        image: "url('images/taylor.jpg')",
        phone: "url('phone/taylor.jpg')",
        songName: "Blank Space",
        artistName: "Taylor Swift",
        song: "audios/blank.mp3"
    },
    {
        image: "url('images/bebe.jpg')",
        phone: "url('phone/bebe.jpg')",
        songName: "Call You Mine",
        artistName: "Bebe Rexha",
        song: "audios/call.mp3"
    },
    {
        image: "url('images/ariana.jpg')",
        phone: "url('phone/ariana.jpg')",
        songName: "Love Me Harder",
        artistName: "Ariana Grande",
        song: "audios/love.mp3"
    },
    {
        image: "url('images/justin.jpg')",
        phone: "url('phone/justin.jpg')",
        songName: "Peaches",
        artistName: "Justin Bieber",
        song: "audios/peaches.mp3"
    },
    {
        image: "url('images/alan.jpg')",
        phone: "url('phone/alan.jpg')",
        songName: "On My Way",
        artistName: "Alan Walker",
        song: "audios/on.mp3"
    }
];
//function to display the current track number
track =() =>{
    count.innerHTML=`${index + 1} / ${lists.length}`;
}
let body = document.getElementById('body'); //id body
//Media queries for lesser than 700px 
var x = window.matchMedia("(max-width: 700px)");
// To switch Wallpaper according to screen size
function image() {
    if (x.matches) { 
      body.style.backgroundImage = lists[index].phone;
} else {
        body.style.backgroundImage = lists[index].image;
    }
}
//Play/Pause button
playButton.onclick = () => {
    if (isplay == false) {
        playButton.className = 'fa fa-pause-circle fa-3x';
        header.style.animationIterationCount ='infinite';
        myAudio.play();
        isplay = true;
    } else {
        header.style.animationIterationCount ='0';
        playButton.className = 'fa fa-play-circle fa-3x'
        myAudio.pause();
        isplay = false;
    }
    track();
}
//Function to switch between songs
function toggle() {
    track();
    image();
    header.style.animationIterationCount ='infinite';
    song.innerHTML = lists[index].songName;
    artist.innerHTML = lists[index].artistName;
    playButton.className = 'fa fa-pause-circle fa-3x';
    myAudio.pause();
    isplay = false;
    myAudio.src = lists[index].song;
    myAudio.play();
    isplay = True;
}
//Forward click button
forward.onclick = () => {
    index++;
    if (index == lists.length) {
        index = 0;
    }
    toggle();
}
//Backward click button
backward.onclick = () => {
    index--;
    if (index == -1) {
        index = lists.length - 1;
    }
    toggle();
}