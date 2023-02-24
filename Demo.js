//Task 1-Print employee data and sum total salary.


let employee = [
    {name:'prachi', age:20, salary:10000},
    {name:'Aastha', age:24, salary:30000},
    {name:'prajjawal', age:25, salary:50000},
    {name:'deepak', age:26, salary:100000}
];
console.log(employee);

//for loop method
sum=0;
for(let a=0;a<employee.length;a++)
{
   sum += employee[a].salary;
}
console.log("sum of salary is "+sum);

//Map REduce Method

  let sum = employee.map((curr) => curr.salary).reduce((a, b) => a + b, 0);
console.log(sum);

/*output-{name:'prachi', age:20, salary:10000},
{name:'Aastha', age:24, salary:30000},
{name:'prajjawal', age:25, salary:50000},
{name:'deepak', age:26, salary:100000}
Sum of salary is=1900000*/





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
console.log(str)

/*output- Today full date is 24/2/23
        Time is(15:43:50 PM)*/