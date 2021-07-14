let play = document.getElementById("play_video");
let open = document.getElementsByClassName("vid")[0];
let close = document.getElementsByClassName("close")[0];
let video = document.querySelector('.vid video');

play.addEventListener('click', ()=>{
    open.style = "visibility: visible";
    video.currentTime = 0;
});
close.addEventListener('click', () =>{
    open.style = 'visibility: hidden';
    video.pause();
    
})
