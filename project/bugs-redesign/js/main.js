document.querySelector('#site-dropbox-btn').onclick = function(){
    if(this.classList.contains("open"))
        this.classList.remove("open");
    else
        this.classList.add("open");
    
    let dropbox = document.querySelector(".site-dropbox");
    let dropboxStyle = getComputedStyle(dropbox);
    if(dropboxStyle.height=="0px"){
        dropbox.style.height="80px";
        dropbox.style.top="-100px";
        dropbox.style.padding="8px";
    } else {
        dropbox.style.height="0px";
        dropbox.style.top="0px";
        dropbox.style.padding="0px";
    }
}