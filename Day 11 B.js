//callback hell

function cars(callback1) {
    
    console.log("BWM");
    callback1();
}
function bike(callback2) {
    console.log("MT-15");
    callback2();
}
function house(callback) {
    console.log("new house");
    callback();
}
cars(()=>{
    bike(()=>{
        house(()=>{
            console.log("done");
            
        });
    })
})





// house(()=>{
//     cars(()=>{
//         bike(()=>{
//             console.log("done");
            
//         })
//     })
// })