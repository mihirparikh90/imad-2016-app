// console.log('Loaded!');

// //Move image
// var img = document.getElementById('mihir');
// var marginLeft = 0;
// function moveRight(){
//     marginLeft = marginLeft + 1;
//     img.style.marginLeft = marginLeft + 'px';
// }

// img.onclick = function () {
//     var interval = setInterval(moveRight,50);
// };

var button = document.getElementById('counter');
button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET','http://mihirparikh90.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit Button
var submit = document.getElementById('submitBtn');

submit.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
            
                for(var i = 0;i<names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                }
    
                var ul = document.getElementById('namesList');
                ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://mihirparikh90.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};