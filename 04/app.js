console.log('04');
// const element = document.getElementById('wrap');
// const element = document.getElementById('.item');

// const elements =  document.querySelectorAll('div');

// console.log(element);

// const div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";

// document.body.appendChild(div);

// document.querySelector('#wrap').innerHTML = document.querySelector('#wrap').innerHTML + 1111;

// window.onload = function () {
//     console.log('hello');
// }

// window.addEventListener('load', function(){
//     console.log("load1");
// });

// window.addEventListener('load', function(){
//     console.log("load2");
// });

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// document.body.addEventListener('click', function(){
//     console.log("click");
// });

// var app = document.getElementById("list");

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//     }
// });

var link = document.querySelector('a');
link.addEventListener('click',function() {
    window.open('https://daum.net');
    event.preventDefault();
}); 