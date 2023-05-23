let scrollThumb;
let scrollHeight;
//DOM이 완전히 로드되었을때
window.addEventListener('DOMContentLoaded', function(){
    scrollHeight = this.document.body.scrollHeight;
    scrollThumb = this.document.querySelector('.scroll-thumb');
});
//scroll event
window.addEventListener('scroll', function(){
    let currentScrollY = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = currentScrollY / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    scrollThumb.style.top = `${scrollPercentRounded}%`;
});

