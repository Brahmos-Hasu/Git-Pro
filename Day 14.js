//multilple object

const detail1={empname:"moses",age: 34,ID:435}
const detail2={empname:"ebe",age: 24,
                ID: function () {
                    console.log(`hi ${this.empname}`);  
                }}




const friend = [{empname: "hasu",age : 23, ID: 123},
                {empname: "brahmos",age : 22, ID: 456},
                {empname: "cr7",age : 41, ID: 789} ]


console.log(friend[2].empname);

console.log(friend[1].age);



