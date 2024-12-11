let data = [{name: "hasu" , age :21},
            {name: "brahmos",age : 17},
            {name: "vicky",age : 34}]

let child =data.filter(child => child.age < 18)

child.forEach(child =>console.log(child.name));

child.forEach((a,b,c)=>{
    console.log(a);
})







