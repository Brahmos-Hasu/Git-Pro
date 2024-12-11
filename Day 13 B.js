//destructuring

//using array
const bike =["R15","MT-15","RE","Duke"]

// syntax  ... -> rest parameter
const [a,b,...d]=bike;

console.log([a,b]);
console.log(d);


//using object
const car = {
    c1:"bWM",
    c2:"RR",
    c3: "Audi"}

const {c1:name1, c3:anhh} = car;

console.log(anhh);
