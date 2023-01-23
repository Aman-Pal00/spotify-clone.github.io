
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let playingsong=document.getElementById('playingsong');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songname: "kehndi ", filepath: "songs/1.mp3", coverpath: "logo.jpg" },
    { songname: "oo antava .oo antava", filepath: "songs/2.mp3", coverpath: "logo.jpg" },
    { songname: "oo palanhare", filepath: "songs/3.mp3", coverpath: "logo.jpg" },
    { songname: "dance meri rani", filepath: "songs/4.mp3", coverpath: "logo.jpg" },
    { songname: "bijlee bijlee", filepath: "songs/5.mp3", coverpath: "logo.jpg" },
    { songname: "kacha badam ", filepath: "songs/6.mp3", coverpath: "logo.jpg" },
    { songname: "karna", filepath: "songs/7.mp3", coverpath: "logo.jpg" },
    { songname: "tumjse hi hai meri yaari", filepath: "songs/8.mp3", coverpath: "logo.jpg" },
    { songname: "o aasman wale", filepath: "songs/9.mp3", coverpath: "logo.jpg" },
    { songname: "oo bolega ya oo oo bolega sala ", filepath: "songs/10.mp3", coverpath: "logo.jpg" },
    { songname: "ram siya ram ringtone", filepath: "songs/11.mp3", coverpath: "logo.jpg" },
    { songname: "srivalli", filepath: "songs/12.mp3", coverpath: "logo.jpg" }
    
]
songitem.forEach((element,i)=> {
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname;
})
//     element.getElementBy
// click on play circle to play 
masterplay.addEventListener('click', (e) => {
    if (audioElement.paused || audioElement.currenttime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
});


// update sheek baar
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    playingsong.value =progress;
})


// change sheek bar
playingsong.addEventListener ('change',()=>{
    audioElement.currentTime=playingsong.value*audioElement.duration/100;
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
    element.classList.add('fa-play');

})


}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    if (audioElement.paused || audioElement.currenttime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        element.classList.add('fa-pause');
        element.classList.remove('fa-play');
    }

})
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.currentTime=0;
        audioElement.src = `songs/${index +1}.mp3`;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})  
