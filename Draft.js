function car1(){
    return new Promise((acc,rej)=>{
    setTimeout(() => {
        let a = true;
        if (a) {
            acc ("car1")
        } else {
            rej ("no cars")
        }
    }, 3000);
    })
}
function car2(){
    return new Promise((acc,rej)=>{
    setTimeout(() => {
        let a = true;
        if (a) {
            acc ("car2")
        } else {
            rej ("no cars")
        }
    }, 3000);
    })
}
function car3(){
    return new Promise((acc,rej)=>{
    setTimeout(() => {
        let a = true;
        if (a) {
            acc ("car3")
        } else {
            rej ("no cars")
        }
    }, 3000);
    })
}
car3().then((value)=>{
    console.log(value);
    return car2()
})
.then((value)=>{
    console.log(value);
    return car1()
})
.then((value)=>{
    console.log(value);
    
})
