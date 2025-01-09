//class
// class Car{
//     constructor(make,model,year,color){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//    print(){
//     console.log(this.make)
//     console.log(this.model)
//     console.log(this.year)
//     console.log(this.color)
//    }
// }

// const show = new Car(2019,"X900",2000,"red");

// console.log(show.color)


// let a = [ "Apple", "Banana", "Cherry"];

// a.push("Mango");
// // a.shift();
// // console.log(a.indexOf("Mango"));


// for(let m = 0;m<a.length;m++){
//     console.log(a[m]);
// }


// let a = [1,2,3,4,5,6,7,8,9,10];


// let m = a.map((v,i)=>{
//     // return v*v;
//     return `This Number is ${v} ` 
//     // console.log(v*v)
// })
// console.log(m)

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// const refre = new Person("mihir",19);

// console.log(refre);

const students = [
    { name: "John", score: 85 },
    { name: "Alice", score: 92 },
    { name: "Bob", score: 78 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 88 },
];



// const fill = students.filter((v)=>{
//     if(v.score>=80){
//         console.log(v)
//         return v;
//     }
// })
// console.log(fill);
// const add = students.map((v)=>{
//     return {...v,score:v.score+5};
// })
