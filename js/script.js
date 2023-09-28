var open = document.getElementById("open");
var close = document.getElementById("close");
var side = document.getElementById("sidebar");
var topBtn = document.getElementById("top");
var iconSearch = document.getElementById("icon");
var searchInput =document.getElementById("search");

open.onclick = function(){
    side.style.left = "0";
}

close.onclick = function(){
    side.style.left = "-250px";
}

window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

iconSearch.onclick = function(){
    searchInput.style.display = "inline-block";
}
