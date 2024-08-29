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