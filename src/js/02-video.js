
import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveCurrentTime(evt) {
    const currentTime = evt.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
}

player.on('play', resumeWatching);

function resumeWatching() {
    player.on("timeupdate", throttle(saveCurrentTime, 1000));
    const getTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

    player.setCurrentTime(getTime).then(function() {
    //  мать его тудысь((   
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });
}



