//rest
arr =[1,2,3,4,5]
 const add =(a,b,...rest)=>{
    return a+b+rest
 };
 console.log(add(...arr));

 //spread
 arr =[1,2,3,4,5]
 const add2= (a,b,c,d,e)=>{
    return a+b+c+d+e
 };
 console.log(add(...arr));


//spread function
function sum(x, y ,z) {
   console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1); // 8



//rest function
function addNumber(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
const res =addNumber(2,5,6,8,9,7,8,9)
console.log(res)

 //array object
 const services = [
   { name:"prachi",age:20,salary:1000},
   { name:"sakshi",age:21,salary:2000},
   { name:"kittu",age:22,salary:3000},
   { name:"nisha",age:23,salary:4000},
   { name:"swati",age:24,salary:5000},

 ]  
    console.log(services);

//  let total = 0;
//  services.forEach(item =>{
//    total +=item.price;
//  });
//  console.log("Total:",total); //error
let total =0;
for(let{salary} of services){
   total += salary;

}console.log(total);
