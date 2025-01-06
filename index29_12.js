// let a = [1,5,2,6,3,99,70,89,10];
// let b = [10,20,30,40,50,60,70,800];


// console.log(a.concat(b));

// console.log(a.indexOf(6));

// console.log(a.slice(0,7));

// console.log(a.reverse());


// console.log(a.sort());


// console.log( typeof a.toString());
// a.forEach((v,i,a)=>{
//     let m = v+20
//     console.log(m,"Added 20" , "origanal value", v);
// });


// ?  multidemines arrary

// let arr = [
//     ["mihir",1],
//     ["manoj",2],
//     ["mahir",3],
//     ["modi",4],
// ]

// console.log(arr[2][1]);


// for(let m of arr){
//     for(let i of m){
//         console.log(i)
//     }
// }



// ? filter()

// let b = a.filter((v)=>{
//     // if(v>=1 && v<=5){

//     //     return v;
//     // }

// })

// console.log(b);

// ? find()  findIndex()  findLastIndex()

// let b = a.find((v)=>{
//     return v == 15;
// })


// if(b === undefined){
//     console.log("not find");
// }
// else{
//     console.log(b)
// }

// ! findIndex() 

//  let b = a.findIndex((v)=>{
//     return v == 1;
// })

// console.log(b)


// !  findLastIndex()

//  let b = a.findLastIndex((v)=>{
//     return v === 1;
// })

// console.log(b)


// ? ////////////////////////////////////


// ? split() join()

// let m = "10,20,30";

// let c = m.split(',');

// console.log(c);

// let x = c.join(" and ")

// console.log(x)

// ? /////////////////////////////////////////




// ? for in & for of 



// for(let m in a){
//     console.log(a[m])
// }


// for (let m of a){
//     console.log(m);
// }

// ?//////////////////////////////////

// ! OBJECT

// let M_Data = {
//     name: "mihir raval",
//     age: 19,
//     work: "Developer",
//     mcr: function () {
//         let a = 0;
//         if (a == 10) {
//             console.log("I am Mihir")
//         }
//         else {
//             console.log("exit")
//         }
//     }
// }
// M_Data.mcr();

// let a = {
//     "name":'m',
//     "age":19
// }
// console.log(a.age)
// console.log(M_Data.mcr())
// console.log(M_Data.work)


// for (let m in M_Data){
//     console.log(M_Data[m])
// }
/////////////////////////////////////////////////////////////

//  Array In object
// let m = {
//     arr:[1,2,3,4,5,6,7],
//     fun:function(a,b){
//         if(a == b){    // when a & b value are same then this condition are true
//             return a+b;
//         }
//         else{
//             console.log("exit");
//         }
//     }
// }
// fun(20,30);
// let c = m.arr.push(10);
// for(let a of m.arr){
//     console.log(a)
// }
// console.log(m.fun(30,30));


// Add Property in object:
// let l = {
//     "name":"mcr"
// }

// l.age = 19;
// console.log(l.age);
///////////////////////////////////////////////

// Object in array:
// let m = [
// {"name":"mihir","age":19},
// {"name":"mihir1","age":19},
// {"name":"mihir2","age":19},
// {"name":"mihir3","age":19},
// {"name":"mihir4","age":19},
// ]

// console.log(m[4].name)

// for(let a in m){
//     console.log(m[a].name);
//     console.log(m[a].age);
// }

// destructure
// let [m1,m2,m3,m4,m5] = m;
//console.log(m1);
//let [{age},m2,m3,m4,m5] = m;  //direct access object value
//console.log(age);

///////////////////////////////////////////


//Function inside function  & Lexial scop
// in lexical scop inner function access outer function data but outer function not access inner function data

// function mihir(){
//     let aa = 20;
//     console.log(aa,"main function ");

//     function mihir1(){
//         let aa = 90
//         console.log(aa,"i am inside function")
//     }
//     mihir1();
// }
// mihir();

// function m1(){
//     let a =100;

//      return function(){
//         a++;
//         console.log(a)
//     }

// }
// const mc = m1();
// mc();
// mc();
// mc();
// mc();
//////////////////////////////////////////////


// new
// function m(){
//     let a = 10;
//     // console.log(this.a)     //output = undefine
//     this.a = a;
//     console.log()
// }
// var obj = new m();
// console.log(obj.a)
//////////////////////////////////////

//sets:
// const arr = new Set([1,2,3,4,5,5]);

// console.log(arr.has(8))

/////////////////////////////////////////

// setTimeout

// setTimeout(()=>{
//     console.log("hii")
// },2000)
///////////////////////////////////////////

// callback

// function  mc(arg){
// console.log("main",arg)
// }

// function mr(callback){
// let arg = "arerwg";
// callback(arg)
// // console.log(arg);

// }
// mr(mc);
///////////////////////////////////////////////////////////

// callback hell
// PROBLEM:
// function t1(callback) {
//     setTimeout(() => {
//         console.log("First Task Complate");
//         callback()
//     }, 2000)
// }
// function t2(callback) {
//     setTimeout(() => {
//         console.log("Second Task Complate");
//         callback()
//     }, 2000)
// }
// function t3(callback) {
//     setTimeout(() => {
//         console.log("Third Task Complate");
//         callback()
//     }, 2000)
// }
// function t4(callback) {
//     setTimeout(() => {
//         console.log("Fourth Task Complate");
//         callback()
//     }, 2000)
// }
// function t5(callback) {
//     setTimeout(() => {
//         console.log("Fifth Task Complate");

//     }, 2000)
// }

// // callback hell
// t1(function () {
//     t2(function () {
//         t3(function () {
//             t4(function () {
//                 t5();
//             })
//         })
//     })
// })


// SOLUTION:  using promises
// function t1() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("First Task Complate");
//             res();
//         }, 2000)
//     })
// }
// function t2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Second Task Complate");
//             res();
//         }, 2000)
//     })
    
// }
// function t3() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Third Task Complate");
//             rej("problem")
//             // res();
//         }, 2000)
//     })

// }
// function t4() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Fourth Task Complate");
//             res();
//         }, 2000)
//     })

// }
// function t5() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Fifth Task Complate");

//             res();
//         }, 2000)
//     })
// }

// t1().then(t2).then(t3).then(t4).then(t5).catch((err)=>{
//     console.log(err);
// });
////////////////////////////////////////////////////////////////////


// SOLUTION:  Async Await


//  async function group(){
//     await t1();
//     await t2();
//     await t3();
//     await t4();
//     await t5();
// }

// group().catch((err)=>{
//     console.log(err)
// });

////////////////////////////////////////////