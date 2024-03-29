const favicon = document.querySelector("#favicon");
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
let scrollHeight;
let sclTopbtn = document.querySelector('.scroll-top');
let sectionArray;
let scrollTrack = this.document.querySelector('.scroll-track');
let scrollThumb = this.document.querySelector('.scroll-thumb');
let cursor = this.document.querySelector('.cursor');
//DOM이 완전히 로드되었을때
window.addEventListener('DOMContentLoaded', function(){
    scrollHeight = this.document.body.scrollHeight;

    let swiper = new Swiper(".slide-banner", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: 3,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    //scroll trigger animation
    sectionArray = this.document.querySelectorAll('section');
    for(let i=1; i < sectionArray.length; ++i){
        let e = sectionArray[i];
        let content = e.querySelector('.content');
        let titles = e.querySelectorAll('.heading');
        titles.forEach(function(e) {
            headingObserver.observe(e);
        });
        if(content)
            contentObserver.observe(content);
    }

    //window size check
    // checkWindowSize();

    //mobile, tablet check to scroll top
    let isDesktop = window.matchMedia('(min-width: 1439px)').matches;
    if(!isDesktop){
        sclTopbtn.remove();
    }

    //favicon
    isDarkMode.addEventListener('change', changeFavicon);
    changeFavicon();
});
//change favicon
let changeFavicon = function(){
    if(isDarkMode.matches)
        favicon.href = "./favicon.svg";
    else 
        favicon.href = "./favicon-light.svg";
}


//scroll event
let delay;
window.addEventListener('scroll', function(e){
    let currentScrollY = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = currentScrollY / (docHeight - winHeight);
    scrollPercent = scrollPercent * 100;
    scrollThumb.style.top = `${scrollPercent}%`;

    if(currentScrollY > 600) {
        sclTopbtn.style.display = 'flex';
    } else {
        sclTopbtn.style.display = 'none';
    }

    scrollTrack.style.opacity = '1';
    // scrollThumb.style.opacity = '1';
    if(delay)
        clearTimeout(delay);
    delay = setTimeout(function(){
        scrollTrack.style.opacity = '0.2';
        // scrollThumb.style.opacity = '1';
    }, 1000);
});

//scroll top
sclTopbtn.addEventListener('click', function(){
    window.scrollTo(0, 0);
})

if(window.scrollY > 600) {
    sclTopbtn.style.display = 'flex';
} else {
    sclTopbtn.style.display = 'none';
}

//make Modal
/**
 * 
 * @param {string} titleText 
 * @param {string} innerHtml 
 */
let makeModal = function(titleText, innerHtml){
    let modal = document.createElement('div');
    modal.classList.add('modal');
    let body = document.createElement('div');
    body.classList.add('body');
    body.innerHTML = innerHtml;
    if(titleText || titleText.trim().length > 0){
        let title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = titleText;
        body.prepend(title);
    }
    let closeBtn = document.createElement('a');
    closeBtn.classList.add('close');
    closeBtn.addEventListener("click", function(e){
        modal.style.opacity = 0;
        setTimeout(function() {
            modal.remove();
            document.querySelector('html').style.overflowY = 'auto';
        }, 300);
    })
    modal.addEventListener('click', function(e){
        if(e.target.classList.contains('modal')){
            modal.style.opacity = 0;
            setTimeout(function() {
                modal.remove();
                document.querySelector('html').style.overflowY = 'auto';
            }, 300);
        } else {
            return;
        }
    });
    body.append(closeBtn);
    modal.appendChild(body);
    document.body.prepend(modal);
    document.querySelector('html').style.overflowY = 'hidden';
}

//scroll animation
const contentObserver = new IntersectionObserver((e) => {
    e.forEach(element => {
        //on view
        if(element.isIntersecting){
            element.target.style.opacity = '1';
            element.target.style.transform = 'translateY(0)';
        } else {
            //off view
            element.target.style.opacity ='0';
            element.target.style.transform = 'translateY(100px)';
        }
    });   
}, {rootMargin: '30px 0px -150px 0px'});
const headingObserver = new IntersectionObserver((e) => {
    e.forEach(element => {
        //on view
        if(element.isIntersecting){
            element.target.style.opacity = '1';
            element.target.style.transform = 'translateX(0)';
        } else {
            //off view
            element.target.style.opacity ='0';
            element.target.style.transform = 'translateX(-100px)';
        }
    });   
}, {rootMargin: '30px 0px -150px 0px'});

//mobile user agent check 
// let checkUserAgent = function(){
//     if (navigator.userAgent.match(/Android/i) ||
//         navigator.userAgent.match(/iPhone/i)) {
//         alert(`본 포트폴리오 페이지는 데스크탑 환경(1440px 이상)에 최적화 되어있습니다.
// 권장 해상도 : 1920x1080`);
//     }
// }
//check window size 
// let checkWindowSize = function(){
//     let isDesktop = window.matchMedia('(min-width: 1439px)').matches;
//     if(!isDesktop)
//         alert(`본 포트폴리오 페이지는 데스크탑 환경(1440px 이상)에 최적화 되어있습니다.
// 권장 해상도 : 1920x1080`)
// }

//mouse effect
// window.onmousemove = function(e){
//     cursor.style.left = e.clientX+'px';
//     cursor.style.top = e.clientY+'px';
//     console.log(cursor.style)
// }
// window.onmousedown = function(e) {
//     cursor.style.opacity = '0.5';
//     cursor.style.borderColor = 'var(--orange)';
//     cursor.style.width = '48px';
//     cursor.style.height = '48px';
//     cursor.style.mixBlendMode = 'normal';
// }
// window.onmouseup = function(e) {
//     cursor.style.opacity = '1';
//     cursor.style.borderColor = 'var(--white)';
//     cursor.style.width = '32px';
//     cursor.style.height = '32px';
//     cursor.style.mixBlendMode = 'difference';
// }


// Modal Functions
//loading animation modal
let loadingAnimationModal = function(){
    makeModal("주의사항",
        `<p>이 페이지는 인터넷 회선이 빠른 경우 제대로 테스트 하기 어려울 수 있으니,
            개발자 옵션에서 네트워크 속도를 강제로 느리게 한 후 보시길 권장합니다.</p>
            <br>
        <strong>개발자 도구 ‣ 네트워크 ‣ 우측 상단의 No throtting ‣ Slow 3G</strong>
        <br><p>테스트 후에는 꼭 <strong>"No throttling"</strong> 으로 바꿔주세요.</p>`);
};
let bugsStyleGuide = function(){
    makeModal("Bugs Redesign Style Guide",
        `<img src="./images/bugs-redesign/bugs-style-guide.png" alt="bugs-style-guide">`
    )
}
let bugsWireframe = function(){
    makeModal("Bugs Redesign Wireframe",
    `<div style="display: flex; gap: 20px;">
    <div>
    <p class="content-lg">Desktop</p>
    <img src="./images/bugs-redesign/bugs-redesign-wireframe-desktop.jpg">
    </div>
    <div>
    <p class="content-lg">Tablet</p>
    <img src="./images/bugs-redesign/bugs-redesign-wireframe-tablet.png">
    </div>
    <div>
    <p class="content-lg">Mobile</p>
    <img src="./images/bugs-redesign/bugs-redesign-wireframe-mobile.png">
    </div>
    </div>`)
}
let bugsPrototype = function() {
    makeModal("Bugs Redesign Prototype",
    `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FT7XM73uRuiHOQkcKZdsSDj%2FBugs-Redesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DFezKEEtGeu6hQnie-1" allowfullscreen></iframe>`);
}
let selpixStyleGuide = function(){
    makeModal("Selpix Style Guide",
    `<img src="./images/selpix/Seplix Style Guide.png">`);
}
let selpixWireframe = function(){
    makeModal("Selpix Wireframe",
    `<div style="display: flex; gap: 20px;">
    <div>
    <p class="content-lg">Desktop</p>
    <img src="./images/selpix/selpix-wireframe-desktop.png">
    </div>
    <div>
    <p class="content-lg">Tablet</p>
    <img src="./images/selpix/selpix-wireframe-tablet.png">
    </div>
    <div>
    <p class="content-lg">Mobile</p>
    <img src="./images/selpix/selpix-wireframe-mobile.png">
    </div>
    </div>`);
};
let boksoondogaPrototype = function(){
    makeModal("복순도가 Prototype",
    `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCOkC7DDMYbUYkTwOFR0wI1%2F%25EB%25B3%25B5%25EC%2588%259C%25EB%258F%2584%25EA%25B0%2580%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D6gmdlXWF3yxHKxRb-1" allowfullscreen></iframe>`);
};
let musicPlayerPrototype = function(){
    makeModal("Music Player Prototype",
    `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZfaQuJu8QiJTUoIcC9TGQS%2Fmusic-player%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dbh6hskK5R4pN8RPV-1" allowfullscreen></iframe>`);
};
let mechanikPrototype = function(){
    makeModal("Mechanik Prototype",
    `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FW1stFcGEOD4vOoHkbdFUKI%2Fmechanik%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D1u3o2wRfIEYI5S95-1" allowfullscreen></iframe>`);
}

let graphicDesignImages = document.querySelectorAll('.swiper .swiper-slide');
graphicDesignImages.forEach(function(element) {
    let image = element.querySelector("img");
    image.addEventListener("click", function(e){
        makeModal("이미지 상세보기", `<div style="text-align: center;">
        <a href="${image.src}" target="_blank"/>
            <img src="${image.src}" style="max-height:72vh;">
        </a>
        </div>`);
    })
});
let clockModal = function(){
    makeModal("Clock", 
    `<iframe src="./project/clock/index.html" frameborder="0" style="height:70vh"></iframe>`
    )
}
let buyListModal = function(){
    makeModal("구매목록 생성기",
    `<iframe src="./project/buy-list/index.html" frameborder="0" style="height:70vh"></iframe>`)
}