console.log('Loaded!');

var element = document.getElementById('mainText');
element.innerHTML = 'New Value';

//Move image
var img = document.getElementById('mihir');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 0;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight,50);
};