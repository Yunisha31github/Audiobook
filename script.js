console.log("Welcome to Sunne Kitab")
let bookIndex = 0;
let audioElement = new Audio('audio/1.m4a');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterbookname = document.getElementById('masterbookname');
let bookitems = Array.from(document.getElementsByClassName('bookitem'));
let books = [
    {bookname: "China Harayeko Manchey - Haribansa Acharya", filepath: "audio/1.m4a", coverpath: "cover/china harayeko manchhe.jpg"},
    {bookname: "Ek Sarko Maaya - G.S Poudel", filepath: "audio/2.m4a", coverpath: "cover/ek sarko maya.jpg"},
    {bookname: "Maha ko Ma - Madan Krishna Shrestha", filepath: "audio/3.m4a", coverpath: "cover/maha ko ma.jpg"},
    {bookname: "Monsoon - Subin Bhattarai", filepath: "audio/4.m4a", coverpath: "cover/mansoon.jpg"},
    {bookname: "Pahelpur - G.S Poudel", filepath: "audio/5.m4a", coverpath: "cover/pahelpur.jpg"},
    {bookname: "Radha - Krishna Dharabashi", filepath: "audio/6.m4a", coverpath: "cover/radha.jpg"},
    {bookname: "Saaya - Subin Bhattarai", filepath: "audio/7.m4a", coverpath: "cover/saaya.jpg"},
    {bookname: "Seto Dharti - Amar Neupane", filepath: "audio/8.m4a", coverpath: "cover/seto dharti.jpg"},
    

    
]

bookitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = books[i].coverpath;
    element.getElementsByClassName("bookname")[0].innerText = books[i].bookname;
    
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    

})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('bookitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('bookitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
        bookIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
        audioElement.src = `audio/${bookIndex+1}.m4a`;
        masterbookname.innerText = books[bookIndex].bookname;
        audioElement.currentTime = 0;
        audioElement.play();
         gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }); 

});
document.getElementById('next').addEventListener('click', () =>{
    if(bookIndex>=7) {
        bookIndex = 0;
    }
    else {
        bookIndex += 1;
    }
    audioElement.src = `audio/${bookIndex+1}.m4a`;
    audioElement.currentTime = 0;
    masterbookname.innerText = books[bookIndex].bookname;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () =>{
    if(bookIndex<=0) {
        bookIndex = 0;
    }
    else {
        bookIndex -= 1;
    }
    audioElement.src = `audio/${bookIndex+1}.m4a`;
    audioElement.currentTime = 0;
    masterbookname.innerText = books[bookIndex].bookname;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})