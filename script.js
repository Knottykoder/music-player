console.log("welcome to spotify");
let songindex = 0;
let gif = document.getElementById('gif');
let audioelement = new Audio('5.mp3');
let masterSongName = document.getElementById('masterSongName');
let masterplay= document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let songItem = Array.from(document.getElementsByClassName('songItem'))
let song = [
        {songName:"8 parche" , filePath:"0.mp3",coverPath:"1.jpg"},
        {songName:"Cappuccino " , filePath:"1.mp3",coverPath:"2.jpg"},
        {songName:"Lehanga 2019 by Jass Manak" , filePath:"2.mp3",coverPath:"3.jpg"},
        {songName: "Sohnea Miss_Pooja_Feat_Millind_Gaba", filePath:"3.mp3",coverPath:"4.jpg"},
        {songName:"The_Haryanvi_Mashup___Dj_Song" , filePath:"4.mp3",coverPath:"5.jpg"},
        
]
songItem.forEach((element , i)=>{
     element.getElementsByTagName("span")[0].innerText = song[i].songName;
     element.getElementsByTagName("img")[0].src = song[i].coverPath;
})

masterplay.addEventListener('click', () => {
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterSongName.innerText = 'The_Haryanvi_Mashup___Dj_Song';
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate', () => {
     progress = parseInt ((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})
const makeallplay = () =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' , (e) => {
        makeallplay();
        songindex = parseInt(e.target.id);
         console.log(songindex);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioelement.src = song[songindex].filePath;
         masterSongName.innerText = song[songindex].songName;
         audioelement.currentTime = 0;
         audioelement.play();
         gif.style.opacity = 1;
         masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioelement.src = song[songindex].filePath;
    masterSongName.innerText = song[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioelement.src = song[songindex].filePath;
    masterSongName.innerText = song[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})