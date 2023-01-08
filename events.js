let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let range_bar = document.getElementById("range-bar");
let itemsongs = Array.from(document.getElementsByClassName('itemsongs'));

let songs = [
    { sngname: "rab ne banadhi jodi", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { sngname: "hoyna hoyna", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { sngname: "chammak challo", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { sngname: "dance pe dance", filepath: "songs/4.mp3", coverpath: "covers/1.jpg" },
    { sngname: "phir milenge chalte", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },

    { sngname: "Heat waves", filepath: "songs/6.mp3", coverpath: "covers/6.png" },
    { sngname: "Baby baby", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { sngname: "yenti yenti", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { sngname: "adiga adiga", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { sngname: "Raatan lambiya", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" }
]

itemsongs.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("title")[0].innerText = songs[i].sngname;


})


// handling the paly button

masterPlay.addEventListener('click', () => {
    if (audioElement.currentTime <= 0 || audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }
    document.getElementsByClassName("mastername")[0].innerText = songs[index].sngname;
})

// handling prev buton
let backward = document.getElementById('backbuton');
backward.addEventListener('click', (e) => {
    // console.log(index);
    if (index > 0)
        index -= 1;
    else index = 9;
    audioElement.src = `songs/${index + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    document.getElementsByClassName("mastername")[0].innerText = songs[index].sngname;


    let playsng2=document.getElementsByClassName('playsng')[index];
    playsng2.classList.remove('fa-play-circle');
        playsng2.classList.add('fa-pause-circle');
        
        let x;
        if(index==9)
        x=-1;
        else x=index;
        playsng2=document.getElementsByClassName('playsng')[x+1];
    playsng2.classList.remove('fa-pause-circle');
        playsng2.classList.add('fa-play-circle');


})


// handling forward buton
let forward = document.getElementById('forwardbuton');
forward.addEventListener('click', () => {
    // console.log(index);
    if (index < 9)
        index += 1;
    else index = 0
    audioElement.src = `songs/${index + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    document.getElementsByClassName("mastername")[0].innerText = songs[index].sngname;

    let playsng=document.getElementsByClassName('playsng')[index];
    playsng.classList.remove('fa-play-circle');
        playsng.classList.add('fa-pause-circle');
        let x;
        if(index==0)
        x=10;
        else x=index;
     playsng=document.getElementsByClassName('playsng')[x-1];
    playsng.classList.remove('fa-pause-circle');
        playsng.classList.add('fa-play-circle');

})



// handling the bar of song
audioElement.addEventListener('timeupdate', () => {
    // console.log("time update");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    range_bar.value = progress;
})

range_bar.addEventListener('change', () => {
    audioElement.currentTime = range_bar.value * audioElement.duration / 100;

})

const makeallsng = () => {
    Array.from(document.getElementsByClassName('playsng')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('playsng')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeallsng();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index + 1}.mp3`;
        console.log(index)
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementsByClassName("mastername")[0].innerText = songs[index].sngname;
    })
})




//color changing on nav bar
document.getElementById('playlist').onmouseover=function(){
    document.getElementById('playlist').style.color="red";
}
document.getElementById('playlist').onmouseleave=function(){
    document.getElementById('playlist').style.color="white";
}

document.getElementById('hml').onmouseover=function(){
    document.getElementById('hml').style.color="red";
}
document.getElementById('hml').onmouseleave=function(){
    document.getElementById('hml').style.color="white";
}

// show and hiding the div
document.getElementById('playlist').onclick=function(){
    
    document.getElementById('full').style.display="block";
    document.getElementById('hmdiv').style.display="none";
};
document.getElementById('hml').onclick=function(){
    document.getElementById('full').style.display="none";
    document.getElementById('hmdiv').style.display="block";
};
// forallfn(()=>{
//     var x=document.getElementById("full");
//     x.style.display="none";
//     x=document.getElementById("hmdiv");
//     x.style.display="none";
// })
// function favsong(){
//     var x=document.getElementById("full");
//     x.style.display="block";

// }

// console.log(audioElement.currentTime);
// console.log(audioElement.duration);
// if(audioElement.currentTime==audioElement.duration){
//     console.log('hi');
//     console.log(index);
//     if(index<9)
//     index+=1;
//     else index=0
//     console.log(index);
//     audioElement.src=`songs/${index+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//     document.getElementsByClassName("mastername")[0].innerText=songs[index].sngname;
// }




document.getElementById('full').style.display="none";
