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

// new Array() 비권장( 모호하다)
var arr = new Array(1, 2, 3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}