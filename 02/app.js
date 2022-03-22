var name = 'aj';
console.log(name);

var arr = [1, 2, 3];

// new Array() 비권장( 모호하다)
var arr = new Array(1, 2, 3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

/*
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html'],
    sayHello : function () {
        console.log('hello');
    }
  };

  person.sayHello();
*/
  var arr = [1, 2, 3];


/*
// new Array() 비권장( 모호하다)
var arr = new Array(1, 2, 3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/


/*
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);
*/

var todos = ['운동', '게임', '목욕'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
  if (todo === updateTodo) {
    return '공부';
  }
  return todo;
});

console.log(newTodos);

var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

