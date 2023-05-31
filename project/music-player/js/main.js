let currentIndex = 0;
let playlist = [];
// playlist.push(new Audio('./audio/Seasonal Crime (Feat. Saebit).mp3'));
// playlist.push(new Audio('./audio/Maze (Feat. Saebit).mp3'));
// playlist.push(new Audio('./audio/Mars Attacks.mp3'));
let audioInfo = [];
audioInfo.push({
    ImageSource : './image/20556620.jpg',
    SongTitle : '계절범죄 (Feat. 새빛)',
    AlbumName : '계절범죄',
    AudioSource : './audio/Seasonal Crime (Feat. Saebit).mp3',
    Lyric : 
    `<p data-start="10" data-end="14">더워지는 바람에</p>
    <p data-start="14" data-end="17">눈을 스쳐 뜨던 밤처럼</p>
    <p data-start="17" data-end="22">옅어지는 그날의 작은 기억이</p>
    <p data-start="22" data-end="25.5">잊혀져 매일 눈을 뜰 때면</p>
    <p data-start="25.5" data-end="28">흐려져 오늘도 눈을 감으면</p>
    <p data-start="28" data-end="33">또 사라져버릴 듯한 어제를 그려가</p>
    <p data-start="33" data-end="38">떨어지는 그림자 사이에</p>
    <p data-start="38" data-end="44.8">맴도는 향기가 조용히 너를 불어와</p>
    <p data-start="44.8" data-end="49">선명했던 날들도 어느새</p>
    <p data-start="49" data-end="51.7">다 지워 버린 채</p>
    <p data-start="51.7" data-end="56">차갑게 잊혀져만 가</p>
    <p data-start="56" data-end="59.5">흐렸던 날들만 바람에 날아가거라</p>
    <p data-start="59.6" data-end="62.3">베어 물은 듯 추억만 고이 남은 채</p>
    <p data-start="62.3" data-end="65.3">지샌 하늘 위 피어진 구름처럼 사라지는</p>
    <p data-start="65.3" data-end="68">마음은 후회도 잊어버린 채</p>
    <p data-start="68" data-end="70.7">내 생에 피어라 가장 아픈 겨울아</p>
    <p data-start="70.7" data-end="74">지난날처럼 길고 멀었던</p>
    <p data-start="74" data-end="77.7">그리운 계절을 불러</p>
    <p data-start="88" data-end="90.1">봄바람이 스치듯 떠난 밤</p>
    <p data-start="90.1" data-end="93.2">내 안의 계절을 다 팔아 버린 밤</p>
    <p data-start="93.2" data-end="97.5">마음에는 어떤 소리가 들려?</p>
    <p data-start="97.5" data-end="98.3">아아</p>
    <p data-start="98.3" data-end="102.6">깊어지는 실루엣 사이로</p>
    <p data-start="102.6" data-end="109.4">눈 부신 바람이 또다시 너를 불어와</p>
    <p data-start="109.4" data-end="114">선명했던 날들도 이제는</p>
    <p data-start="114" data-end="116.4">다 잊어버린 채</p>
    <p data-start="116.4" data-end="120">조용히 흩어져만 가</p>
    <p data-start="121" data-end="124">괴로운 날들만 바람에 날아가거라</p>
    <p data-start="124" data-end="127">베어 물은 듯 추억만 고이 남은 채</p>
    <p data-start="127" data-end="130.1">지샌 새벽 끝 옅어진 달빛처럼 흐려지는</p>
    <p data-start="130.1" data-end="132.8">기억은 슬픔도 잊어버린 채</p>
    <p data-start="132.8" data-end="135.5">내 생에 지어라 가장 짙은 여름아</p>
    <p data-start="135.5" data-end="139">지난날처럼 길고 멀었던</p>
    <p data-start="139" data-end="142">그리운 계절을 불러</p>
    <p data-start="142" data-end="145.5">하얗고 하얗던 내 계절아</p>
    <p data-start="145.5" data-end="149.8">끝이 없고 그치지 않는 비에도</p>
    <p data-start="149.8" data-end="151.8">밝아오니까</p>
    <p data-start="151.8" data-end="154.4">그 시간이 두려워도</p>
    <p data-start="154.4" data-end="155.8">난 괜찮아</p>
    <p data-start="155.8" data-end="158.8">잿빛 사이 푸른 이 비가</p>
    <p data-start="158.8" data-end="161.6">선명하게 모든 계절을</p>
    <p data-start="161.6" data-end="164">다시 찾아갈 테니</p>
    <p data-start="165" data-end="168">흐렸던 날들만 바람에 날아가거라</p>
    <p data-start="168" data-end="170.9">베어 물은 듯 추억만 고이 남은 채</p>
    <p data-start="170.9" data-end="174">푸른 바람과 스쳐간 계절마저 잊어가는</p>
    <p data-start="174" data-end="176.6">시간은 어제도 잊어버린 채</p>
    <p data-start="176.6" data-end="179.4">내게만 맑아라 슬피 우는 사랑아</p>
    <p data-start="179.4" data-end="182.9">지난날처럼 길고 멀었던</p>
    <p data-start="182.9" data-end="185">그리운 계절 아래로</p>
    <p data-start="185" data-end="188">피어가 꽃잎과 푸른 하늘이</p>
    <p data-start="188" data-end="190.8">베어 물은 듯 후회만 남아 버린 채</p>
    <p data-start="190.8" data-end="194">기쁜 마음도 슬픔도 이젠 되돌릴 수 없는</p>
    <p data-start="194" data-end="196.3">날들로 저 멀리 사라져만 가</p>
    <p data-start="196.3" data-end="199.2">내 생에 피었던 아름다운 하루가</p>
    <p data-start="199.2" data-end="202.7">지난밤처럼 길고 어둡던</p>
    <p data-start="202.7" data-end="206">그리운 계절을 불러</p>`
});
audioInfo.push({
    ImageSource : './image/20443297.jpg',
    SongTitle : '미로 (Feat. 새빛)',
    AlbumName : '미로',
    AudioSource : './audio/Maze (Feat. Saebit).mp3'
});
audioInfo.push({
    ImageSource : './image/20400935.jpg',
    SongTitle : '화성침공',
    AlbumName : '화성침공',
    AudioSource : './audio/Mars Attacks.mp3'
});


let playBtn = document.querySelector('.play');
let currentTime = document.querySelector('.seek-time .current');
let endTime = document.querySelector('.seek-time .end');
let progressBar = document.querySelector('#progress-bar');
let isSeeking = false; // While click progressbar
let currentAudio = new Audio(audioInfo[currentIndex].AudioSource);
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
let lyrics = lyricWrapper.querySelectorAll('p');
let repeatBtn = document.querySelector('.repeat');
let repeatStatus = 2; // 0:repeat all 1: single song repeat 2: no repeat
let background = document.querySelector('.bg');
let albumArt = document.querySelector('.player .album-art');
let songName = document.querySelector('.player .song-name');
let albumName = document.querySelector('.player .album-name');

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

//load audio's length and set to controller
let setAudioLength = function(audio){
    console.log(audio.duration)
    endTime.innerHTML = convertTimeToText(audio.duration);
}

//previous song
let getPrevAudio = function(){
    currentAudio.pause();
    currentIndex--;
    if(currentIndex < 0)
        currentIndex = audio.length - 1;
    getAudioInfo();
}

//next song
let getNextAudio = function(){
    currentAudio.pause();
    currentIndex++;
    if(currentIndex > audioInfo.length - 1)
        currentIndex = 0;
    getAudioInfo();
}

let getAudioInfo = function(isInitialize){
    currentAudio = new Audio(audioInfo[currentIndex].AudioSource);
    currentAudio.currentTime = 0;
    currentAudio.onloadeddata = function (){
        getCurrentTime(currentAudio);
        setAudioLength(currentAudio);
    }
    if(!isInitialize)
        isPlaying(currentAudio);
    //reallocate
    //paused event
    currentAudio.addEventListener('pause', function(e){
        playBtn.style.backgroundImage = "url('./image/play.svg')"
    })

    //play event 
    currentAudio.addEventListener('play', function(e){
        playBtn.style.backgroundImage = "url('./image/paused.svg')"
    })

    //bg 
    background.style.backgroundImage = `url(${audioInfo[currentIndex].ImageSource})`;
    //album art
    albumArt.style.backgroundImage = `url(${audioInfo[currentIndex].ImageSource})`;
    //song name
    songName.innerText = audioInfo[currentIndex].SongTitle;
    //album name
    albumName.innerText = audioInfo[currentIndex].AlbumName;
    //lyric
    if(audioInfo[currentIndex].Lyric){
        lyricWrapper.innerHTML = audioInfo[currentIndex].Lyric;
        lyricClick();
    } else 
        lyricWrapper.innerHTML = `<h1>가사가 지원되지 않는 노래입니다.</h1>`
    
    //lyric Initialize
    lyricIndex = 0;
    lyricWrapper.style.transform = `translateY(${-(lyricIndex * 30)}px)`;
}

let isPlaying = function(audio){
    if(audio.paused){
        audio.play();
        playBtn.style.backgroundImage = "url('./image/paused.svg')";
        audio.ontimeupdate = function(){
            getCurrentTime(audio);
            getCurrentLyric(audio);
        }; 
    } else {
        playBtn.style.backgroundImage = "url('./image/play.svg')";
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

//stop or loop when song ended 
currentAudio.addEventListener('ended', function(){
    // 0 repeat 1 single 2 no repeat
    if(repeatStatus == 0) {

    } else if(repeatStatus == 1) {

    } else if(repeatStatus == 2) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playBtn.style.backgroundImage = "url('./image/play.svg')"
    }
});

//paused event
currentAudio.addEventListener('pause', function(e){
    playBtn.style.backgroundImage = "url('./image/play.svg')"
})

//play event 
currentAudio.addEventListener('play', function(e){
    playBtn.style.backgroundImage = "url('./image/paused.svg')"
})


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

// show lyrics 
let getCurrentLyric = function(audio){
    lyrics = lyricWrapper.querySelectorAll('p');
    for(let i = 0; i< lyrics.length; ++i) {
        let currentLyric = lyrics[i];
        if(currentLyric.dataset.start < audio.currentTime &&
            currentLyric.dataset.end > audio.currentTime){
            currentLyric.classList.add('now');
            lyricIndex = i;
        } else {
            currentLyric.classList.remove('before');
            currentLyric.classList.remove('now');
        }
        if(i < lyricIndex) {
            currentLyric.classList.add('before');
            // currentLyric.classList.remove('now');
        }   
        if(i > lyricIndex) {
            currentLyric.classList.add('after');
            currentLyric.classList.remove('now');
        }
    }
    lyricWrapper.style.transform = `translateY(${-(lyricIndex * 30)}px)`;
}
//play when lyric start
let moveToLyric = function(lyric){
    currentAudio.currentTime = lyric.dataset.start;
}
//lyric click event allocate
let lyricClick = function(){
    lyrics = lyricWrapper.querySelectorAll('p')
    lyrics.forEach(function(lyric){
        lyric.addEventListener('click', function(e){
            moveToLyric(e.target)
            getCurrentTime(currentAudio);
        })
    });
}
lyricClick();
//change repeat status 
repeatBtn.addEventListener('click', function(e){
    repeatBtn++;
    //initialize
    if(repeatBtn > 2)
        repeatBtn = 0;

    let image = repeatBtn.querySelector('img');
    let text = repeatBtn.querySelector('span');
    if(repeatStatus == 0) {
        image.setAttribute("src", "./image/repeat.svg");
        text.innerText("전곡반복");
    } else if(repeatStatus == 1) {
        image.setAttribute("src", "./image/single-song-repeat.svg");
        text.innerText("한곡반복");
    } else if(repeatStatus == 2) {
        image.setAttribute("src", "./image/close.svg");
        text.innerText("반복없음");
    }
})





//initialize
getAudioInfo(true);