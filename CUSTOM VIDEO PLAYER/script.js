const video = document.getElementById('video');
const play = document.getElementById('play');
const juststop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function togglevideostatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

document.body.onkeypress = function(e) {
    if (e.which == 32) {
        // stops default behaviour of space bar. Stop page scrolling down
        e.preventDefault();
        togglevideostatus();
    }
}

// update play/pause icon
function updateplayicon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//update progress and progress
function updateprogress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes and seconds and update
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = mins + ':' + secs

}

//set video time progress
function setvideoprogress() {
    video.currentTime = (+progress.value * +video.duration) / 100;
}

//stop the video
function stopvideo() {
    video.currentTime = 0;
    video.pause();
}



//event listeners
video.addEventListener('click', togglevideostatus);
video.addEventListener('pause', updateplayicon);
video.addEventListener('play', updateplayicon);
video.addEventListener('timeupdate', updateprogress);

play.addEventListener('click', togglevideostatus);

juststop.addEventListener('click', stopvideo);

progress.addEventListener('change', setvideoprogress);