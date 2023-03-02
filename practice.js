//rest
/* arr =[1,2,3,4,5]
 const add=(a,b,...rest)=>{
    return a+b+rest
 };
 console.log(add(...arr));

 //spread
 arr =[1,2,3,4,5]
 const add = (a,b,c,d,e)=>{
    return a+b+c+d+e
 };
 console.log(add(...arr));*/


 const myName ={fn:"Tarun",
                ln:"1234"
 }
 const bio = {...myName,
              fn:"Aman",
              ln:"1234",
              city:"Indore"  

}
console.log(...bio);

//rest
arr =[1,2,3,4,5]
 const add=(a,b,...rest)=>{
    return a+b+rest
 };
 console.log(add(...arr));

