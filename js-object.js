const person = {
 firstName: "Maxwel", 
 lastName: "luiz",
 age: 50,
 eyeColor: "blue"
};
// dot notation
console.log(person.firstName);

// Bracket notation
console.log(person["firstName"]);

//Expression
const a = "firstName";
console.log(person[a]);

console.log("The last name is " + person["lastName"]);
console.log(`${person.firstName}  is ${person.age} years old `);

delete person.age
console.log(`${person.firstName}  is ${ person.age}  years old.`);

person.nationality = "UK"
console.log(`${person.firstName} from ${person.nationality}.`);

// nested object
const object = {
    name: "Jhon",
    age: 30,
    myCars: {
        car1:"ford",
        car2:"bmw",
        car3:"audi"
    }
}
console.log(object["myCars"]["car1"]);
console.log(object.myCars.car1);

let a1 = 'myCars'
let a2 = 'car2'
console.log(object[a1][a2]);
// methods
const person2 = {
    firstName: "Jhon",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return(this.firstName + " " + this.lastName)//.toUppercase()  
    }
};
console.log(person2.fullName());
console.log(person2.fullName);//retun the function definition

//JSON.Stringify()
const person3 = {
    name: "Jhon",
    age: 20,
    city: "New york"
};
console.log(person3);

let myString = JSON.stringify(person3);
console.log(myString);

//constructors
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFriend = new Person("Jhon", "Doe", 50, "blue");
console.log(myFriend);
 //values()
 //Create an object
 const person5 = {
    name: "Jhon",
    age: 50,
    city: "New york",
 };
  //create an array
//   const myArray = Object.values(person5);
//   console.log(myArray);

  //entries()
  //define an object
  const person = {
    name: "Alice",
    age: 25,
    city: "New york"
  }
//   convert the object to an array of key value pairs
const entries = Object.entries(person)
console.log(entries);

const person = {
    name: "Jhon",
    age: 30
}
//freeze the object
 Object.freeze(person);

 
//attempt to change a property (this won't work)
person.age = 31;
person.gender = "male";
delete person.name;
// the object remain unchanged
console.log(person);

// assign ()
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.greet = function () {
    console.log('Hello!');
}

person.greet();

// this.propertyName
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());
//assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);


console.log(returnedTarget === target);

//create
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();

//   seal
const object1 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // Expected output: 33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1);

 let obj = {}
 console.log(Object.getPrototypeOf(obj));

 function Animal() {}
    function Dog() {}
    Dog.prototype =
    Object.create(Animal.prototype);

    let dog = new Dog();
    console.log(Object.getPrototypeOf(dog));

    let obj1 = {cold : "ice"};
    let obj2 = { cold: "ice"};
    let obj3 = obj1;
    console.log(obj1,obj2);
    
    
 
 
  




  
  
















