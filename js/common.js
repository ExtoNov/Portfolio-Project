let scrollThumb;
let currentScroll = 0;
let scrollHeight;
//DOM이 완전히 로드되었을때
window.addEventListener('DOMContentLoaded', function(){
    scrollHeight = this.document.body.scrollHeight;
    scrollThumb = this.document.querySelector('.scroll-thumb');
});
//scroll event
window.addEventListener('scroll', function(){
    var s = window.scrollY,
      d = this.document.scrollHeight,
      c = window.scrollHeight;

  var scrollPercent = (s / (d - c)) * 100;
  
  console.clear();
  console.log(scrollPercent);
    // currentScroll = window.scrollY;
    // // console.log(currentScroll);
    // console.log((currentScroll - scrollHeight));
    // if(currentScroll==0) {
    //     scrollThumb.style.top = '0';
    // } else {
    //     scrollThumb.style.top = `${scrollHeight / currentScroll}%`;
    // }
});

