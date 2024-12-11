// template literal

let my = "hasu"
    me = "brahmos"
console.log(`hello ${me} ${my} !`);

//assigning a function to variable is function expression

//setTimeout --> like threadsleep in java
setTimeout(function(){
    console.log("function executed");}
    ,5000
)
//types
 
//Anonymous function
let car = function(carname){
    console.log(`carname is ${carname} !!!`);
}
car("BWM")

//call back function

function bike(word,callback){
    console.log(word); 
    callback();
}

function names() {
    console.log("MT-15")
}

bike("bike",names)

//immediately invoke
(function name() {
    console.log("runs within the bracket ")
})();
