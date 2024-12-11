//asyn await

function car1() {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
           
       const c1 = true;
       if (c1) {
           resolve("BWM")
       } else {
           reject("no cars")
       }
       }, 1000);
   });
   }
   
   function car2() {
       return new Promise((resolve,reject)=>{
           setTimeout(() => {
               
       const c2 = false;
       if (c2) {
           resolve("Audi")
       } else {
           reject("no cars")
       }
       }, 5000);
   });
   }
   
   function car3() {
       return new Promise((resolve,reject)=>{
           setTimeout(() => {
       const c3 = true;
       if (c3) {
           resolve("Benz")
       } else {
           reject("no cars")
       }
       }, 3000);
   });
   }

async function call(){
try {
    let a1 = await car1();
    console.log(a1);
    
    let a3 = await car3();
    console.log(a3);

    let a2 = await car2();
    console.log(a2);
} catch (error) {
    console.log(error);
}
}
call();
   
   
   