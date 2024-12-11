
let data = ["bwm","benz","RR"];

//for of  -> prints value of array

for (let cars of data) {
    console.log(cars);
}

//for in  -> prints index of array

for(let carname in data){
    console.log(carname);
    
}

//for each  -> prints value, index ,full array
//        (stores value of ar, stores indexs of arr, store full arr)

data.forEach((a,b,c) => {
    console.log(a,b,c[b]);
})
