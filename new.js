//class

class car {
    car1(){
        console.log("BWM");
    }
    car2(){
        console.log("Benz");
    }
    car3(){
        console.log("RR");
    }
}

let c = new car();
c.car1();
c.car2();
c.car3();

//method

function Details(empname,empid,empage) {
    this.empname = empname();
    this.empid = empid();
    this.empage = empage();
}

let a = new Details("hasu", 34,123456)
console.log(a);



