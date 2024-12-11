//Different arrow function

//note- return keyword returns what inside the ""

//Basic arrow function --> syntax
let a = () =>{
    console.log("basic arrow function");
}
a();


//Arrow function without parameters --> no {}
let b = () =>{
    console.log("function without parameters");
}
b();


//Arrow function with one parameters --> () optional
let c = age =>
    console.log("function with one parameters"+age);
c(" done");


//Arrow function with multi parameters --> () must
let d = (num1,num2,num3) => {
    console.log(num1+num2+num3);
}
d(10,20,30);
 

//Arrow function implicit parameters --> if single para no need (){}
let e = name1 =>
    console.log(name1);
e("function implicit parameters");
