//Promise

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

car1().then((value)=>{
    console.log(value);
    return car3();
})
    .then((value)=>{
    console.log(value);
    return car2();
})
    .then((value)=>{
    console.log(value);
})
    .catch((Error)=>{
        console.error(Error);
        
    })


