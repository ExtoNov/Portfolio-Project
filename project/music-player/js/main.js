let currentIndex = 0;
let playlist = [];
playlist.push(new Audio('./audio/Seasonal Crime (Feat. Saebit).mp3'));

let playBtn = document.querySelector('.play');
let currentTime = document.querySelector('.seek-time .current');
let endTime = document.querySelector('.seek-time .end');
let progressBar = document.querySelector('#progress-bar');
let isSeeking = false; // While click progressbar
let currentAudio = playlist[currentIndex];
let volumeController = document.querySelector("#volume-control");
let volumeNumberContainer = document.querySelector('.volume .control span');
let volumeValue = 100;
let volumeIcon = document.querySelector('.volume img');
let isMuted = false;
let muteBtn = document.querySelector('.volume .mute');
let lyricBtn = document.querySelector('.menu .lyric');
let wrap = document.querySelector('.wrap');
let isLyricOpened = false;
let lyricContainer = document.querySelector('.lyric-container');
let lyricWrapper = document.querySelector('.lyric-container .wrapper');
let lyricIndex = 0;
let lyricTransformPixel = 0;

//convertAudioTime to Text
let convertTimeToText = function(time){
    time = Math.floor(time);
    let text;
    if(time < 60)
        text = "00:"+String(time).padStart(2, "0");
    else 
        text = `${String(Math.floor(time/60)).padStart(2, "0")}:${String(time%60).padStart(2, "0")}`;
    return text;
}

// visualize the track progress bar
let getCurrentTime = function(audio){
    //set track length
    let value = audio.currentTime;
    console.log(value)
    progressBar.max = audio.duration;
    if(!isSeeking)
        progressBar.value = value;
    //set time text
    currentTime.innerHTML = convertTimeToText(audio.currentTime);
}
// show lyrics 
let getCurrentLyric = function(audio){
    let lyrics = lyricWrapper.querySelectorAll('p');
    let befores;
    let afters;
    for(let i = 0; i< lyrics.length; ++i) {
        let currentLyric = lyrics[i];
        if(currentLyric.dataset.time == Math.floor(audio.currentTime)){
            currentLyric.classList.remove('after');
            currentLyric.classList.add('now');
            lyricIndex = i;
        }
        if(i < lyricIndex) {
            currentLyric.classList.add('before');
            currentLyric.classList.remove('now');
        }
        if(i > lyricIndex) {
            currentLyric.classList.add('after');
        }
    }
    lyricWrapper.style.transform = `translateY(${-(lyricIndex * 34)}px)`;
}

//load audio's length and set to controller
let setAudioLength = function(audio){
    endTime.innerHTML = convertTimeToText(audio.duration);
}

let getNextAudio = function(){
    currentIndex++;
    currentAudio.play();
}

let isPlaying = function(audio){
    if(audio.paused){
        playBtn.style.backgroundImage = "url('./image/paused.svg')"
        audio.play();
        audio.ontimeupdate = function(){
            getCurrentTime(audio);
            getCurrentLyric(audio);
        }; 
    } else {
        playBtn.style.backgroundImage = "url('./image/play.svg')"
        audio.pause();
    }
}

//play or paused
playBtn.addEventListener('click', function(){
    isPlaying(currentAudio);
    getCurrentTime(currentAudio);
});

//initialize for first song 
currentAudio.onloadeddata = function (){
    getCurrentTime(currentAudio);
    setAudioLength(currentAudio);
}

//while clicking progress bar
progressBar.addEventListener('mousedown', function(){
   isSeeking = true; 
})
progressBar.addEventListener('mouseup', function(){
    isSeeking = false; 
 })

//play when value changes
progressBar.addEventListener('change', function(e){
    currentAudio.currentTime = e.target.value;
});

//move 5s by press arrow keys 
window.addEventListener('keyup', function(e){
    // up arrow
    if(e.code == 'ArrowLeft') {
        currentAudio.currentTime = currentAudio.currentTime - 5;
        getCurrentTime(currentAudio);
    } else if(e.code == 'ArrowRight') {
        currentAudio.currentTime = currentAudio.currentTime + 5;
        getCurrentTime(currentAudio);
    } else if(e.code == 'Space') {
        isPlaying(currentAudio);
    } else if(e.code == 'ArrowUp') {
        volumeValue = volumeValue + 5;
        if(volumeValue > 100)
            volumeValue = 100;
        refreshVolumeIcon();
        showVolumeController();
    } else if(e.code == 'ArrowDown') {
        volumeValue = volumeValue - 5;
        e.code
        if(volumeValue < 0)
            volumeValue = 0;
        refreshVolumeIcon();
        showVolumeController();
    }
});

//volume change
volumeController.addEventListener('input', function(e){
    let value = Number(e.target.value);
    volumeValue = value;
    refreshVolumeIcon(value);
    volumeNumberContainer.innerText = value;
    currentAudio.volume = value / 100;
});

//refresh volume icon
let refreshVolumeIcon = function(){
    if(volumeValue > 66) {
        volumeIcon.setAttribute("src", "./image/volume-l.svg");
    } else if(volumeValue > 33) {
        volumeIcon.setAttribute("src", "./image/volume-m.svg");
    } else if(volumeValue == 0){
        volumeIcon.setAttribute("src", "./image/volume-x.svg");
    } else {
        volumeIcon.setAttribute("src", "./image/volume-s.svg");
    }
}

//mute volume when click volume icon
muteBtn.addEventListener('click', function(e){
    if(isMuted){
        currentAudio.volume = volumeValue / 100;
        refreshVolumeIcon(volumeValue);
        volumeController.value = volumeValue;
        volumeNumberContainer.innerText = volumeValue;
    } else {
        currentAudio.volume = 0;
        volumeIcon.setAttribute("src", "./image/volume-x.svg");
        volumeController.value = 0
        volumeNumberContainer.innerText = "0";
    }
    isMuted = !isMuted;
}, false)

//show volume controller when adjust volume with arrow key
let delay; //delay for volume controller
let showVolumeController = function(){
    volumeController.value = volumeValue;
    volumeNumberContainer.innerText = volumeValue;
    currentAudio.volume = volumeValue / 100;
    document.querySelector('.volume').classList.add('hover')
    if(delay)
        clearTimeout(delay);
    delay = setTimeout(function(){
        document.querySelector('.volume').classList.remove('hover');
    }, 1000);
}

//lyric window toggle 
let showLyric = function(){
    if(isLyricOpened){
        lyricBtn.querySelector('span').innerText = '가사보기';
        lyricContainer.style.width = '0';
    } else {
        lyricBtn.querySelector('span').innerText = '가사숨김';
        lyricContainer.style.width = '480px';
    }
    isLyricOpened = !isLyricOpened;
}
lyricBtn.addEventListener('click', showLyric);

