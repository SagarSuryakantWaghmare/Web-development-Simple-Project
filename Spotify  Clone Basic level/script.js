console.log('Let build spotify');
let songIndex = 0;
let audioElement = new Audio('Assets/See You Again.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songName=document.getElementById('songName');
let songList=Array.from(document.getElementsByClassName('songList'));
let songs = [
    { songName: "See You Again", filePath: "Assets/SeeyouAgain.mp3",cover:'Assets/fastAndFuriousBG.jpeg'},
    { songName: "Kabira", filePath: "Assets/Kabira.mp3", cover:"Assets/KabiraCover.png" },
    { songName: "The Nights", filePath:"Assets/The Nights.mp3",cover:"Assets/TheNightsCover.png"},
    { songName: "Unstoppable", filePath:"Assets/Unstoppable.mp3",cover:"Assets/UnstoppableCover.png" },
    { songName: "llahi", filePath: "Assets/llahi.mp3",cover:"Assets/llahi.png" },
    { songName: "Animal", filePath: "Assets/Animal.mp3",cover:"Assets/AnimalCover.png"}
];

function playSong(index) {
    audioElement.src = songs[index].filePath;
    audioElement.play();
    masterPlay.src = "Assets/pause-solid.svg";
    gif.style.opacity = 1;
    songName.style.visibility = "inherit";
    songName.innerText = songs[index].songName;
    songIndex = index;
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.src = "Assets/pause-solid.svg";
        gif.style.opacity = 1;
        songName.style.visibility="inherit";
        console.log('playing');
    } else {
        audioElement.pause();
        masterPlay.src = "Assets/circle-play-regular.svg";
        gif.style.opacity = 0;
        songName.style.visibility="hidden";
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
});

songList.forEach((element, i) => {
    let img = element.getElementsByTagName('img')[0];
    let songTitle = element.getElementsByClassName('songN')[0];

    img.src = songs[i].cover;
    songTitle.innerText = songs[i].songName;

    element.addEventListener('click', () => {
        playSong(i);
    });
});

document.getElementById('previous').addEventListener('click',()=>{
    let newIndex = songIndex - 1;
    if (newIndex < 0) {
        newIndex = songs.length - 1;
    }
    playSong(newIndex);
});

document.getElementById('next').addEventListener('click',()=>{
    let newIndex = songIndex + 1;
    if (newIndex >= songs.length) {
        newIndex = 0;
    }
    playSong(newIndex);
});
