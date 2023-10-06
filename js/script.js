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
    if (scrollY > 30) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
}

iconSearch.onclick = function(){
    searchInput.style.display = "inline-block";
}
