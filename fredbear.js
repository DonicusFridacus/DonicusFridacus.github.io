//Frebear's code :D
var object = document.getElementById('fredbear');

object.onclick=function(){
    var x = Math.floor(Math.random()*700);
    var y = Math.floor(Math.random()*1350);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};