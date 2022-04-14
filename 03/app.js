console.log('03');
// var isMan = true;

// if('test') {
//     console.log('test');
// }

// var a = 1;
// var b = a;
// b =2;
// console.log(a, b);

// var a =[1];
// var b = a;
// b[0] =[2];
// console.log(a,b);

// var a = { x:1 };
// var b = a;
// b.x = 2;

// console.log(a,b);

// //call by value
// function byValue(count) {
//     count = count + 2;
//   }
//   var count = 3;
//   byValue(count);
//   console.log(count); //3

//call by reference
// function byReference(count) {
//     count.push('2');
//   }
//   var count = ['1'];
//   byReference(count);
//   console.log(count); // ["1","2"]


// var isMan = 0;
// var gender = ''
// if (isMan) {
//     gender = '남자';
//     console.log('남자');
//   } else {
//       gender = '여자';
//     console.log('여자');
//   }

// var gender = isMan ? '남자' : '여자'; // 삼항 연산자

// for (var count = 0; count < 5; count++) {

// }

// var obj = { a: 1, b: 2 };

// for (var prop in obj) {
//     console.log(prop, obj[prop]);
// }

// function log(str){
//     //return 문이 없을경우 undefined반환
//     console.log(str);
// }

// var result = log('hello');

// log(result);

// var isDelete = comfirm('삭제하시겠습니까?');
// if (isDelete){
//     // ....
// }



// if (confirm('삭제하시겠습니까?')){
//     // ....
// }

// function test() {
//     console.log('test()');
//   }

//   var id = setTimeout(test, 1000); //1초후 1번실행

// function a(){
//     console.log('a');
//     function b(){
//     }
// }

// var a = 2;

// (function() {
//     var a =1;
//     console.log(a);
//   })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//   sum(3);

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /def/;

// var result = testReg.test(text);

// console.log(result); // true

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var matchReg = /jkl/; // 찾을 문자열
// var result = text.match(matchReg);

// console.log(result); 

// function create() {
//     var food = ['pizza'];
//     var exe = 'soccer';
//     food.push(exe);
//     console.log(food);
// }
// create();


// function read() {
//     var food = ['pizza', 'rice'];
//     food.forEach(function (food) {
//         console.log(food);
//     });
// }
// read();



// function update() {
//     var food = ['pizza', 'rice'];
//     var updateTodo = 'rice';
//     var updateIndex = food.findIndex(function (todo) {
//         return todo === updateTodo;
//     });
//     food[updateIndex] = 'chicken';

//     var newTodos = food.map(function (todo) {
//         if (todo === updateTodo) {
//             return 'chicken';
//         }
//         return todo;
//     });

//     console.log(newTodos);

// }
// update();


var food = ['pizza', 'rice', 'chicken'];
var deleteTodo = 'rice';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
food.splice(deleteIndex, 1);
console.log(food);

var food = ['pizza', 'chicken'];
var deleteTodo = 'pizza';
var newTodos = todos.filter(function(toods) {
  return todo !== delteTodo;
});
console.log(newTodo);5