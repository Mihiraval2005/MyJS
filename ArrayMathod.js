//forEach()

// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// m.forEach((v) => {
//     console.log(v*2)
// })

// console.log(m);

//includes()
//Checks if a certain element exists in an array
// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(m.includes(100))
// console.log(m.includes(1))


//indexOf()
// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(m.indexOf(8))

//join()
//Joins all elements of an array into a single string.
// let el = ['m','c','r','a']
// console.log(el.join('-'));

//map()
//Creates a new array with the results of calling a provided function on every element.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];

// let c = m.map((v)=>{
//     return v*2;
// })

// console.log(c)


//pop()
//Removes the last element from an array.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];

// m.pop();
// console.log(m)

//push()
//Adds new items to the end of an array.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// m.push(9,10,11);
// console.log(m)

// reduce()
//Applies a function against an accumulator and each element in the array to reduce it to a single value.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];

// let c = m.reduce((v,i)=>{
//     return v+i;
// },0)

// console.log(c);

//reduceRight()
//Applies a function against an accumulator and each element from right to left.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// let c = m.reduceRight((v, i) => {
//     return v + i;
// }, 0)
// console.log(c)


//reverse()
//Reverses the order of elements in an array.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// m.reverse();
// console.log(m)

// shift()
//Removes the first element from an array.
// let m = [1, 2, 3, 4, 5, 6, 7, 8];
// m.shift();
// console.log(m)

//some()
//at least one element in an array satisfies a condition. If any one element passes the test, some() returns true. Otherwise, it returns false.
// let a = [1,3,5,1,9,10];
// let b = a.some((v)=>v%7===0);
// console.log(b)

//sort()
//Sorts the elements of an array in place.
// let a = [4,8,2,9,3];
// a.sort();
// console.log(a)

//. splice()
// let a = [1,2,5,6,7,8];
// a.splice(1,0,3,4);
// a.sort();
// console.log(a);

//toLocaleString()
//Returns a localized string representing the elements of an array.
// let a = [1,2,3,4,5,6,7]
// a.toLocaleString();
// console.log(a)

//toString()
//Converts an array to a string.
// let a = [1,2,3,4];
// a.toString();
// console.log(a)

//unshift()
//Adds one or more elements to the beginning of an array.
// let a = [2,3,4,5,6];
// a.unshift(1);
// console.log(a)