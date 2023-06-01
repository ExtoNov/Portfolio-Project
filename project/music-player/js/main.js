let currentIndex = 0; //track start number
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
    AudioSource : './audio/Mars Attacks.mp3',
    Lyric : 
    `<p data-start="3.6" data-end="27.5">빠빠 빠빠 빠빠 빠빠</p>
    <p data-start="27.5" data-end="32">아홉시에 뉴스를 보고야 알았어</p>
    <p data-start="33" data-end="38">서울시 밤 하늘에 뜬 우주 비행선</p>
    <p data-start="38" data-end="39.7">현실일까</p>
    <p data-start="39.7" data-end="42.6">삐삐삐 무슨 소리 들린다</p>
    <p data-start="42.6" data-end="45.8">빼빼빼 딴사람은 안 들리나</p>
    <p data-start="45.8" data-end="49.5">뿌뿌뿌 하필 나에게 말을 거는데</p>
    <p data-start="49.5" data-end="51.5">이제 어떡해</p>
    <p data-start="51.5" data-end="54">서울 비상사태 십 분 전</p>
    <p data-start="54" data-end="56.5">오늘 지구는 일촉즉발</p>
    <p data-start="56.5" data-end="60">이런 막중한 임무가 하필 내게</p>
    <p data-start="60" data-end="63">맡겨지게 된 건데</p>
    <p data-start="63" data-end="66">길게 드리워진 그림자</p>
    <p data-start="66" data-end="69">뭔지 알 수 없는 실루엣</p>
    <p data-start="69" data-end="72.5">먼저 다가가기는 어렵겠어요</p>
    <p data-start="72.5" data-end="74.6">다음에 와줄래요</p>
    <p data-start="74.6" data-end="75.8">돌아가 줘요</p>
    <p data-start="75.8" data-end="87">빠빠 빠빠 빠빠 빠빠</p>
    <p data-start="87" data-end="93">현관문을 똑똑 두드리는 낯선 자</p>
    <p data-start="93" data-end="97.5">검은 양복 까만 선글라스 이 인조</p>
    <p data-start="97.5" data-end="99.6">저.. 밤인데요</p>
    <p data-start="99.6" data-end="102.7">삐삐삐 비밀 요원입니다</p>
    <p data-start="102.7" data-end="105.8">빼빼빼 같이 가주셔야겠습니다</p>
    <p data-start="105.8" data-end="109">뿌뿌뿌 세계는 당신이 필요합니다</p>
    <p data-start="109" data-end="111.1">당황스럽게</p>
    <p data-start="111.1" data-end="114">서울 비상사태 오 분 전</p>
    <p data-start="114" data-end="116.8">오늘 지구는 일촉즉발</p>
    <p data-start="116.8" data-end="120.3">이런 막중한 임무가 하필 내게</p>
    <p data-start="120.3" data-end="123">주어지게 된 건데</p>
    <p data-start="123" data-end="126">길게 드리워진 그림자</p>
    <p data-start="126" data-end="128.8">뭔지 알 수 없는 실루엣</p>
    <p data-start="128.8" data-end="132.5">먼저 다가가기는 어렵겠어요</p>
    <p data-start="132.5" data-end="134.5">다음에 와줄래요</p>
    <p data-start="136" data-end="138.6">귓가에 맴맴 도는</p>
    <p data-start="138.6" data-end="142.7">소리는 난수 방송이라는데</p>
    <p data-start="142.7" data-end="148">이 서울 땅에는 어쩐 일이십니까</p>
    <p data-start="148" data-end="151.5">서울 비상사태 삼 분 전</p>
    <p data-start="151.5" data-end="154.5">오늘 지구는 일촉즉발</p>
    <p data-start="154.5" data-end="157.9">지금 세계의 시선이 다 몰렸다</p>
    <p data-start="157.9" data-end="161.2">난 몰라요 미안해요</p>
    <p data-start="161.2" data-end="163.5">길게 드리워진 그림자</p>
    <p data-start="163.5" data-end="166.4">뭔지 알 수 없는 실루엣</p>
    <p data-start="166.4" data-end="170">먼저 다가가기는 어렵겠어요</p>
    <p data-start="170" data-end="171.8">다음에 와줄래요</p>
    <p data-start="171.8" data-end="173">나 죽고 없을 때</p>
    <p data-start="173" data-end="212">빠빠 빠빠 빠빠 빠빠</p>`
});
audioInfo.push({
    ImageSource : './image/20548395.jpg',
    SongTitle : `I'll be`,
    AlbumName : 'Just Living',
    AudioSource : `./audio/Sincere - I'll be.mp3`
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
let lyrics = lyricWrapper.querySelectorAll('p');
let repeatBtn = document.querySelector('.repeat');
let repeatStatus = 2; // 0:repeat all 1: single song repeat 2: no repeat
let shuffleBtn = document.querySelector('.shuffle');
let shuffleStatus = 0; // 0: no shuffle 1: shuffle
let shuffleNextHistory = [];
let shufflePreviousHistory = [];
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
    if(shuffleStatus == 0)
        currentIndex--;
    else if(shuffleStatus == 1){
        if(shuffleNextHistory.length > 1){
            //remove this song
            shuffleNextHistory.pop();
            //previous song;
            currentIndex = shuffleNextHistory.pop();
        } else {
            while (true) {
                let shuffleIndex = Math.floor((Math.random() * audioInfo.length));
                if(shuffleIndex != currentIndex){
                    shufflePreviousHistory.push(shuffleIndex);
                    currentIndex = shuffleIndex;
                    break;
                }
            }
        }
    }
        
    if(currentIndex < 0)
        currentIndex = audioInfo.length - 1;
    getAudioInfo();
}

//next song
let getNextAudio = function(){
    currentAudio.pause();
    let shuffleIndex;
    if(shuffleStatus == 0)
        currentIndex++;
    else if(shuffleStatus == 1){
        if(shufflePreviousHistory.length > 1){
            //remove this song
            shufflePreviousHistory.pop();
            //previous song;
            currentIndex = shufflePreviousHistory.pop();
        } else {
            while (true) {
                shuffleIndex = Math.floor((Math.random() * audioInfo.length));
                if(shuffleIndex != currentIndex){
                    shuffleNextHistory.push(shuffleIndex);
                    currentIndex = shuffleIndex;
                    break;
                }
            }
        }
    }

    if(currentIndex > audioInfo.length - 1)
        currentIndex = 0;
    getAudioInfo();
}

let getAudioInfo = function(isInitialize){
    currentAudio = new Audio(audioInfo[currentIndex].AudioSource);
    currentAudio.currentTime = 0;
    currentAudio.onloadeddata = function (){
        //lyric Initialize
        lyricIndex = 0;
        lyricWrapper.style.transform = `translateY(0px)`;

        getCurrentTime(currentAudio);
        setAudioLength(currentAudio);
        currentAudio.onended = function(){
            repeatAudio(currentAudio);
        }
        currentAudio.volume = volumeValue / 100;
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
    } else {
        lyricWrapper.innerHTML = `<h1>가사가 지원되지 않는 노래입니다.</h1>`
    }
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
currentAudio.onloadeddata = function(){
    getCurrentTime(currentAudio);
    setAudioLength(currentAudio);
    currentAudio.onended = function(){
        repeatAudio(currentAudio);
    }
}

//stop or loop when song ended 
let repeatAudio = function(audio){
    // 0 repeat 1 single 2 no repeat
    if(repeatStatus == 0) {
        getNextAudio();
    } else if(repeatStatus == 1) {
        audio.currentTime = 0;
        audio.play();
        playBtn.style.backgroundImage = "url('./image/paused.svg')"
    } else if(repeatStatus == 2) {
        audio.currentTime = 0;
        audio.pause();
        playBtn.style.backgroundImage = "url('./image/play.svg')"
    }
    //lyric Initialize
    lyricIndex = 0;
    lyricWrapper.style.transform = `translateY(0px)`;
}

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
    // let isLatest;
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
        if(currentLyric.dataset.end < audio.currentTime) {
            currentLyric.classList.add('before');
            // currentLyric.classList.remove('now');
            // isLatest = i;
            lyricIndex = i;
        }   
        if(currentLyric.dataset.start > audio.currentTime) {
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
    repeatStatus++;
    //initialize
    if(repeatStatus > 2)
        repeatStatus = 0;

    let image = repeatBtn.querySelector('img');
    let text = repeatBtn.querySelector('span');
    if(repeatStatus == 0) {
        image.setAttribute("src", "./image/repeat.svg");
        text.innerText = "전곡반복";
    } else if(repeatStatus == 1) {
        image.setAttribute("src", "./image/single-song-repeat.svg");
        text.innerText = "한곡반복";
    } else if(repeatStatus == 2) {
        image.setAttribute("src", "./image/close.svg");
        text.innerText = "반복없음";
    }
})
//change shuffle status
shuffleBtn.addEventListener('click', function(e){
    shuffleStatus++;
    if(shuffleStatus > 1)
    shuffleStatus = 0;

    let image = shuffleBtn.querySelector('img');
    let text = shuffleBtn.querySelector('span');
    if(shuffleStatus == 0){
        image.setAttribute("src", "./image/shuffle-off.svg");
        text.innerText = '순차';
    } else if(shuffleStatus == 1){
        image.setAttribute("src", "./image/shuffle.svg");
        text.innerText = '무작위';
    }
});





//initialize
getAudioInfo(true);