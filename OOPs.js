//creating classes and object
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);  
    }
}
//Creating an object (instance) of the person class
const Person1 = new Person('Alice',30);
Person1.greet();

//inheritance
class Employee extends Person{
    constructor(name, age, jobtitle){
    super(name,age);//calls the parent class's constructor
    this.jobtitle = jobtitle;
}
describeJob(){
    console.log(` I am a ${this.jobtitle}.`);
}
}
const employee1 = new Employee('bob',25,'Developer');
employee1.greet();
employee1.describeJob();

//encapsulation
class Car {
    #engineStatus = false; //private property

    startEngine(){
        this.#engineStatus = true;
        console.log('Engine started');  
    }
    checkEngine(){
        return this.#engineStatus ? 'Engine is on':'Engine is off.';

    }
}
const myCar = new Car();
console.log(myCar.checkEngine()); 
myCar.startEngine();
console.log(myCar.checkEngine());

//polymorphism
class Animal {
    makeSound() {
        console.log('some generic sound');
        
    }
}
class Dog extends Animal{
    makeSound(){
        console.log('beow woof...');
        
    }
}
class Cat extends Animal{
    makeSound(){
        console.log('meow meow ...');
        
    }
}
const dog = new Dog();
const cat = new Cat();
dog.makeSound();
cat.makeSound();

// abstraction
class BankAccount {
    #balance = 0;

    deposit(amount){
        if (amount>0){
            this.#balance +=amount;
            console.log(`Deposit ${amount}.`);
            
        }else{
            console.log('Deposit amount must be positive');
            
        }
    }
    withdraw(amount){
        if (amount >0 && amount <= this.#balance){
            this.#balance -=amount;
            console.log(`withdraw ${amount}.`);
            
        }else{
            console.log('Insufficient funds or invalid amount.');
            
        }
    }
    checkBalance(){
        console.log(`your balance is ${this.#balance}`);
        
    }
}
const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
myAccount.checkBalance();


    
