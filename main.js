
 /* Tohle je prvni soubor z cviceni Javascript Crash-coursu.
Pro pracovani s priklady, je potreba odkomentovat promenne na zacatku kazdeho sloupce. */

// ----------------------------------------------------------------------------------------------


 /* Mame tri zpusoby var, let, const
Var uz neni dobry pouzivat, je to globalni promenna a pokud nekde mame tu samou promennou, udela nam to brajgl.

 let age; Dovoluje nam vytvorit prommenou a potom ji zmenit
 age = 31;  <---  je hodne pruzny

 console.log(age);


 const vek = 10;
 vek = 20;   //NEFUNGUJE

 console.log(vek);  Tady nam vyhodi chybu, protoze nemuze zmenit uz stavajici hodnotu. 
                      Const bychom meli pouzivat kdyz budeme nastavovat, nemenici se hodnotu.
                  
*/

 // ---------------------------------------------------------------------------------------------- 
  
 //Variables - String, Numbers, Boolean, null, undefined
/*
 const name ='John';
 const age = 30;
 const rating = 4.5;
 const isCool = true;
 const x = null;
 const y = undefined;
 let z;

 console.log(typeof name);

//-----------------------------------
// Concatenation

console.log('My name is ' + name + ' and I am ' + age);  <--- Tohle je dobra moznost, ale starsi, je lepsi pouzivat toto:

console.log(`My name is ${name} and I am ${age}`);

*/

//----------------------------------------------------------------------------------------------

/* const s = 'Hello World!';
   const d = 'Crash, Course, Java, Script';

 console.log(s.length); Tohle nam spocita pocet characteru v promenne. Hello World! má 12 pismen i s vykricnikem.

 // console.log(s.toUpperCase()); Tahle metoda nam zvetsi pismena v konzoli. Tohle bychom meli mit i s dodatecnym "()", protoze se jedna o metodu.

 // console.log(s.substring(0, 5)); Tahle metoda, nam oreze nasi vetu "Hello World!" od nulteho charakteru do pateho chararakteru. 

 // console.log(s.substring(0, 5).toUpperCase()); Muzeme kombinovat tyto metody pomoci "promenna.(metoda().dalsiMetoda())".

 // console.log(s.split(''));  Tohle nam da povetsinu veci do pole, nejake mnoziny, rady v JS.

 // console.log(d.split(', ')); Tady je potreba si odkomentovat, promennou 'd'. Kdyz tohle zkusis, rozkouzkuje ti slova v promenne do 4 vysledku. Muze se hodit pri DB searchi, nebo vkladani.

 */

 // ---------------------------------------------------------------------------------------------- 

 //Arrays
 // Arraye jsou promenne ktere drzi v sobe nekolik hodnot.

 /* const numbers = new Array('1,2,3,4,5');

 console.log(numbers); */

 /* const fruits = ['apples', 'oranges', 'pears', 10, true]; //Tady je super, ze muzeme pridat ruzne datove typy do arraye.

 console.log(fruits); */

 //-----------------------------------

 /* const fruits = ['apples', 'oranges', 'pears']; 

 // fruits[3] = 'grapes'; //Pridavani do arraye, trochu blbym zpusobem, protoze nikdy nevime, kde presne hodnoty lezi.

 // fruits.push('mangos'); //Jepsi zpusob jak pridavat do arraye.

 // fruits.unshift('strawberries'); //Tahle metoda nam pridava hodnotu do arraye jakoby uplne od prvniho, tedy arraye [0].

 // fruits.pop(); //Tohle nam odebere posledni hodnotu v arrayi, tedy by nam to melo odebrat array [5].

 // console.log(Array.isArray(fruits)); //Tohle nam overi, jestli je nejaky objekt ARRAY. Po odeslani dotazu, vraci odpoved v podobe booleanu (True, False).

 // console.log(fruits.indexOf('oranges')); //Dotaz na pozici hodnoty v arrayi.


 console.log(fruits); */

  // ---------------------------------------------------------------------------------------------- 

  //Object Literals

  /* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30, 
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 main st',
      city: 'Boston', 
      state: 'MA'
    }
  }
  
  // alert(person); // <--- Tohle nefunguje.

  // console.log(person); //Takhle si do konzole vypiseme CELEHO cloveka.

  // console.log(person.firstName, person.lastName); //Takhle si muzeme rozkouskovat, jake udaje napr. chceme.

  // console.log(person.hobbies[1]); //Takhle si muzeme vybirat krasne podle arraye, urcite hobby. POZOR. ARRAYE SE POCITAJI OD [0] NE OD [1].

  //-----------------------------------

  // const {firstName, lastName, address: { city }} = person;

  //console.log(firstName, lastName, city);

  //-----------------------------------

  // person.email = 'john@doe.com'; //Pridavani do objektu!

  // console.log(person); 
  
  */

  // ---------------------------------------------------------------------------------------------- 

  //Arrays of Objects & JSON

  /*
  const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Meeting with boss',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Dentist appointment.',
      isCompleted: false
    },
  ];
  */

  // console.log(todos);

  /* const todoJSON = JSON.stringify(todos);
  console.log(todoJSON); */ //Hodi nam nase TODOS, do stringu.

 //for 

/* 
 for(let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
  }
*/

//while

/*
let i = 0;
  while(i < 10) {
  console.log(`For Loop Number: ${i}`);
  i++;
  }
*/

/*
for(let i = 0; i < todos.length; i++) { // Narprd cesta, neco printnout. 
  console.log(todos[i].text);
}
*/

/*
for(let todo of todos) { //Tohle je mnohem lepe citelne.
  console.log(todo.text);
}
*/

/* //forEach
todos.forEach(function(todo) { //Dalsi cesta, jak to zobrazit.
  console.log(todo.text);
});
*/

/*  //map
const todoText = todos.map(function(todo) {
return todo.text;
});

  console.log(todoText);
*/

/* //filter
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
  });

  console.log(todoCompleted);
*/

// ---------------------------------------------------------------------------------------------- 

// Conditionals
/*
const x = 6;
const y = 11;

if(x > 5 || y > 10)  {
  console.log('x is more than 5 or y is more than 10');
} 
 else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}
*/

/*
const x = 11;

const color = x > 10 ? 'red' : 'blue'; // Takhle to taky jde!

console.log(color);
*/

/*
const color = 'green';

switch(color) {     //Switch
  case 'red': 
    console.log('color is red'); 
    break;
  case 'blue':
    console.log('color is blue')
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}
*/

// ---------------------------------------------------------------------------------------------- 

/*
function addNums(num1, num2) {
  return num1 + num2;           // Prvni metoda
}
console.log(addNums(5,5));
*/

/*
const addNums = (num1 = 1, num2 = 1) => { // Druha metoda, jak to udelat
  return num1 + num2;
}

console.log(addNums(5, 5));
*/

/*
const addNums = (num1 = 1, num2 = 1) => { // Treti metoda, jak to udelat
  console.log(num1 + num2);
}
addNums(5, 5);
*/

/*
const addNums = (num1 = 1,num2 = 1) => num1 + num2; // Ctvrta, celkem nejrychlejsi metoda

console.log(addNums(5, 5));
*/

//-----------------------------------

// Object oritented

//Construction function

function Person(firstName, lastName, dob) {   
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

//Instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-5-1970'); 

console.log(person1.getBirthYear());
console.log(person1.getFullName());


