
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// let throttle = require('lodash.throttle');


const iframeEl =document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on("timeupdate",throttle(getCurrentTime,1000));
//     player.on('videoplayer-current-time', onPlay);


function getCurrentTime({seconds}){
    localStorage.setItem("videoplayer-current-time",seconds);
}
if (localStorage.getItem("videoplayer-current-time")){
    const currentPlayTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(currentPlayTime);
}


// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });



// const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);
    
// player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });


    // player.on('play', function() {
    //     console.log('played the video!');
    // });



//    const  onPlay = throttle((data)=>{
//         localStorage.setItem("videoplayer-current-time", data.seconds);
//     }, 1000); 
//     console.log(onPlay);

    // const onPlay = function(data) {
    //     // data is an object containing properties specific to that event
    // };
    


//  const local = localStorage.setItem("videoplayer-current-time",data.seconds);
    

// const dataTime = localStorage.getItem('videoplayer-current-time');

// console.log(dataTime);

// const parseDataTime = JSON.parse(dataTime);
// localStorage.setItem('time',JSON.stringify());
