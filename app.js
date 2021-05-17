function init(){
    const matchResult = window.matchMedia("(max-width:670px)");
    if (matchResult.matches){
        var topHeight = document.querySelector('.nav-bar').offsetHeight;
        console.log(topHeight + "px");
        document.querySelector('.nav-links').style.top = topHeight + "px";
    }
    else{
        document.querySelector('.nav-links').style.top = 5 + "%";
    }
}

document.querySelector('.nav-burger').addEventListener('click', function(){
    document.querySelector('.nav-links').classList.toggle('show');
    var text = document.querySelector('.nav-burger span');
    if(text.innerHTML == "menu"){
        text.innerHTML = "close";
    }
    else{
        text.innerHTML = "menu";
    }
})

init();

