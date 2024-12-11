////array methods

let dataA = [0,10,20,30]
let dataB = [40,50,60]

//push --> adds value at end
dataA.push(40)
console.log(dataA);

//pop --> removes value at end
dataA.pop()
console.log(dataA);

//shift --> removes first value & also returns the way
dataA.shift()
console.log(dataA);

//unshift --> able to add 1 or more value at first
dataA.unshift(-0)
console.log(dataA);

//length --> shows lenth of array
let length = dataA.length;
console.log(length);

//splice --> add and removes specific value
dataA.splice(1,1,-5)
console.log(dataA);

dataA.splice()

//slice --> print the value after the mentioned index no 
let slices = dataA.slice(1,3)
console.log(slices);

//concat--> combines two array
let combines =dataA.concat(dataB)
console.log(combines);

//indexoff --> show the value of index
let a = dataA.indexOf(30)
console.log(a);

//includes --> check the value is present or not
let c =dataA.includes(20)
console.log(c)

//every --> it check every value in array- it satisfy condition
let d =dataA.every(eve => eve >-10)
console.log(d);

//some --> atleast one value satisfy condition
let e =dataA.some(ev =>ev<0)
console.log(e);

//reverse--> prints in reverse
let f =dataA.reverse()
console.log(f);

//sort --> sorts in ascending order
let g = dataA.sort()
console.log(g);


//map --> based on condition it changes all value  
let h = dataB.map(e=>e*2);
console.log(h)

//filter --> filter data from array based on condition
let i = dataB.filter(all=>all%3==0)
console.log(i);


//reduce --> sum of all value
let j = dataA.reduce((sum,num) => sum+num);
console.log(j);
