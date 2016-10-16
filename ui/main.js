console.log('Loaded!');

var element = document.getElementById('mainText');
element.innerHTML = 'New Value';

//Move image
var img = document.getElementById('mihir');

img.onclick = function () {
    img.style.marginLeft = '100px';
};