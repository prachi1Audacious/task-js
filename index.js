//var Variable
var x = 5;
var y = 6;
var z = x + y;
console.log(z);
          //output-11



//lets variable
let  x = 10;


{  
  let x = 2;
  
}
console.log(x);
          //output-10



//const variable
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);
           //output-['Toyoto','Volvo','BNW','Audi']


//arrow function
let xyz= (a, b) => {console.log(a * b)} 
xyz(2,3)
            //output- 6


//Map 
let arr = [1,35,21,13]
let a = arr.map((value)=>{
 console.log(value)
    return value+1
})
console.log(a);
               /*output-
                       1
                       35
                       21
                       13
                       [2,36,22,14]*/


//filter
let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)
                //[0,3,5]



//Array
let marks=[84,90,null,76]
console.log(marks[0]);
console.log(marks[2]);
console.log(marks);
             /*output - [0,3,5]
                        84
                        null
                        [84,90,null,76]*/

//Default parameter
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
               // output - 10


//Rest parameter
function addition(...myArgs) {
    let sum = 0;
    for (let i of myArgs) {
      sum += i;
    }
    return sum;
  }
  console.log(addition(5, 6));
  console.log(addition(5, 6, 7));
          //output-11
             //output-18

