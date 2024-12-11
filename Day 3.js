//functions

//function without parameter
function add(){
    console.log("without parameter");
    }
add(); 

//function with parameter
function sub(a,b){
    console.log(a-b);
}
sub(10,5);

//arrow function --> 
const addition = (a,b)=> a+b;
console.log(addition(30,30));

//function expression --> assigning a function to variable 

var nickname = function funname () {
    console.log("this is express");
}
nickname();

// immediate invoke function --> function within the bracket

(function (a,b){
    console.log(a+b)
})(20,2);

