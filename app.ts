//! type string
let aString = "Hi"; //type: str

// aString = 5 non assegnabile perche "numb" diverso da "str"

//! type number
let aNum = 5; //type: number

//! type boolean
let aBool = true; //type: boolean

//! type any
let anyVar: any; //type: any la variabile puo avere multiple types (DA NON FARE PER NON INCORRERE IN PROBLEMI)

//! Union
let year: string | number; //type: string or number
// year = 2023;
// year = "2023";
// entrambe sono possibli in quanto il type dichiarato e' string | number

//! string array type
let arrString: string[] = ["a", "b", "c"];

arrString[0] = "d"; //lo posso fare in quanto l'array e' definito come array di stringhe
// arrString[0] = 1; errore in quanto l'array e' definito come array di stringhe

arrString.push("e"); //lo posso fare perche sto pushando una stringa (in quanto l'array e' definito come array di stringhe)
// arrString.push(5); //non lo posso fare perche sto pushando un numero

//! number array type
let arrNumber: number[] = [1, 2, 3];
//stesso ragionamento per arrString: string[] = ["a", "b", "c"];

//! boolean array type
let arrBool: boolean[] = [true, false];
//stesso ragionamento per arrString: string[] = ["a", "b", "c"];

//! mixed array type
let arrMix: (string | number | boolean)[] = [1, "a", true]; //string, number e boolean sono ammessi nell'array in tutte le posizioni

//! Tuples
let arrTup: [string, number] = ["a string", 5]; //caso tuple la posizione [0] deve essere PER FORZA una str mentre la posizione [1] deve essere PER FORZA un number

//! type obj
let person = {
  name: "Jesse",
  age: 25,
};
// person.name = "John"; il cambio avverra' correttamente
// person.name = 4; .name deve essere una str
// person.age = "John"; .name deve essere un number

//! custom type
type stringOrNumber = string | number;
let year2: stringOrNumber;

// year2 = 2023;
// year2 = "2023";
// accettera' entrambi

//! Type Function
// function calcSum(a: number, b: number) {
//   return a + b;
// }
// calcSum(2, 2); // non accettera' valori che non sono number (in quanto i parametri della funzione sono definititi come type: number)

// let calcSum: (a: number, b: number, third?: number) => number; //third? e' un parametro opzionale

// calcSum = (first: number, second: number) => {
//   return first + second;
// };
// calcSum(2, 2, 2);

//! Void type
const sayHi = () => {
  console.log("Hi");
};

//! Interfaces
interface PersonInterface {
  name: string;
  age: number;
}

let mike: PersonInterface = {
  name: "Mike",
  age: 34,
};

//! Classes
class Person implements PersonInterface {
  //   private name: string; // private permette di non far comparire la key name nella dot notation
  //   age: number;
  //   email: string; non inizializzata nella interface quindi non utilizzabile

  constructor(public name: string, public age: number) {} // versione piu pulita di quello sopra-citato

  greet() {
    return `Hi my name is ${this.name}  and I am ${this.age}`;
  }
}
let john = new Person("John", 35);
console.log(john.greet());

//! DOM Manipulation & Type Casting

const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
const inputForm = document.querySelector("form")!; // il "!" serve per far capire a typescript che effettivamente il form esiste evitanto il controllo con il ? sottostante
const greeting = document.querySelector(".greeting") as HTMLDivElement;

inputForm.addEventListener("submit", (e) => {
  // il ? serve a fare un check per vedere se effettivamente il form esiste
  e.preventDefault();

  const person = new Person(inputName.value, inputAge.valueAsNumber);

  greeting.innerText = person.greet();

  inputForm.reset();
});

//! Generics
function doSomething<T>(arg: T): T {
  // do something
  return arg;
}

// doSomething(); //

interface book<T> {
  id: number;
  name: string;
  data: T;
}

const aBook: book<string> = {
  id: 1,
  name: "title 1",
  data: "more data here",
};
const bBook: book<string[]> = {
  id: 2,
  name: "title 2",
  data: ["Review 1", "Review 2 "],
};

//! Enums
enum ManufacturerMake {
  TESLA,
  AUDI,
  MERCEDES,
  VOLVO,
  BMW,
}

const myCar = {
  year: 2021,
  make: ManufacturerMake.VOLVO,
};

console.log(myCar.make);
