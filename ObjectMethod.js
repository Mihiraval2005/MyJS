// assign()
// Copies values from one or more objects to a target object.
// const  obj1 = {name:'mihir'};
// const  obj2 = {age:12};
// const  obj3 = {WORK:'developer'};
// const cpy = Object.assign({},obj1,obj2,obj3)

// console.log(cpy);

// create()
// The Object.create() method in JavaScript is used to create a new object with a specified prototype object and optional properties.
// Object.create(prototype, propertiesObject);
// prototype: The object that should be the prototype of the newly created object.
// propertiesObject (optional): Additional properties to be added to the new object.


// const onb = {
//     name:'mihir',
//     mc:function(){
//         console.log("Hello Access");
//     }
// }
// const acc = Object.create(onb);
// acc.name;


// defineProperty()
// Object.defineProperty() is a method in JavaScript that allows you to define or modify a property on an object. A property in this context means something like a key-value pair inside an object.
// A property is simply a name (also called key) paired with a value. In this case:

// The name is the key that you give to a property.
// The value is what you store under that key.

// const obj = {
//     name:''
// }

// Object.defineProperty(obj,'name',{
//     value:"mihir",
//     writable: false,        
//     enumerable: true, 
//     configurable: true

// })
// // obj.name="RAVAL"
// console.log(obj.name);
// console.log(obj)

// entries()
// Returns an array of key-value pairs from an object.
const obj = {name:'mihir',age:19}
console.log(Object.entries(obj));

//  freeze()
// Makes an object immutable, meaning its properties can't be modified or added.

// const obj = {name:'mihir'};
// console.log(Object.freeze(obj));
// obj.name = 'ds'


// getOwnPropertyDescriptor()
// Returns details about a property, like if it is writable, enumerable, or configurable.
// const obj = {name:'mihir'};
// Object.defineProperty(obj,'name',{
//     writable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

//  getOwnPropertyNames()
// Returns all property names (keys) of an object.

// const obj = {name:'mihir'};
// console.log(Object.getOwnPropertyNames(obj));


// hasOwnProperty()
// Checks if an object has a specific property, not inherited from the prototype.
// const obj = {name:"mihir"};

//  console.log(obj.hasOwnProperty('age'))

// is()
// Compares two values to see if they are the same.
// console.log(Object.is(1,'q'))

// seal()
// Seals an object, preventing new properties from being added but still allowing modification of existing ones.

// const obj = { name: 'mihir' }
// console.log(Object.seal(obj));
// obj.name = 'Raval';
// obj.age = 19;
// console.log(obj)

// values()
// Returns an array of an object's property values.
// const obj = {name:'mihitr', age:15};
// console.log( Object.values(obj))


// ==================Task===========================

// const obj = {name:'mihir',age:19};
// const cpy = Object.assign({},obj);

// console.log(cpy)


// const obj = {}

// Object.defineProperty(obj,'name',{
//     value:'mct'
// })

// console.log(obj.name)