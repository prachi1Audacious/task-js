//Task 1-Print employee data and sum total salary.


/*let employee = [
    {name:'prachi', age:20, salary:10000},
    {name:'Aastha', age:24, salary:30000},
    {name:'prajjawal', age:25, salary:50000},
    {name:'deepak', age:26, salary:100000}
];
console.log(employee);

//for loop method

/*output-{name:'prachi', age:20, salary:10000},
{name:'Aastha', age:24, salary:30000},
{name:'prajjawal', age:25, salary:50000},
{name:'deepak', age:26, salary:100000}
Sum of salary is=1900000





//Task 2


const d = new Date();
d.getFullYear();
d.getMonth();
d.getDate();
d.getDay()
d.getHours()
d.getMinutes();
d.getHours()>=12?"PM":"AM"
console.log(d);

let date = new Date()
let str =  `Today full date is ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} 
 Time is(${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours()>=12?"PM":"AM"})`
console.log(str)/*

/*output- Today full date is 24/2/23
        Time is(15:43:50 PM)*/


      /* let b="hello";
       if(b=="Hello");
        console.log("TRUE");
        else
        console.log("false");

//Task -3

/const str= "Today is the friday";
const count={};
for(let i=0;i<str.length;i++)
{
    const ch = str[i];
    if(!count[ch]){
        count[ch]=0;
    }
    count[ch]++;
}
console.log(count);



//Task-4

const str= "Today is the friday";

//function maxChar(str)
{
    let freqCount = {}
    let newstr= str.toLowerCase()

    for(let char of newstr){
        freqCount[char] = freqCount[char] +1 || 1;
    }

    let maxCount = 0;
    let maxChar = null;
    for(let key in freqCount){
        if(freqCount[key] > maxCount){
            maxCount = freqCount[key]
            maxChar = key
        }
    }
    return maxChar
}
 console.log(maxChar("Shriram "));
 var newstring = str.replace(maxChar,"3");
 
 console.log(str);

 //Task 5

 
let person = {
    firstName: "prachi",
    lastName: "patel",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
    
  };console.log(person.fullName());


  //Task 6


  
 let x,y;

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(add, 2, 3);           // => 5
console.log(multiply, 2, 3);   */ // => 6

//Task 7


function addNum(x,y)
{
  //nested function
  function showMessage(text)
  {
  console.log(text);
  }
  let sum=x+y;
  //invoking the nested function
  showMessage("sum is "+ sum)
}