var object = document.getElementById('fredbear');

object.onclick=function(){
    var x = Math.floor(Math.random()*1150);
    var y = Math.floor(Math.random()*800);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};