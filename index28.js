//Nested function
/*function addNum(x,y)
{
  //nested function
  function showMessage(text)
  {
  console.log(text);
  }
  let sum=x+y;
  //invoking the nested function
  showMessage("sum is "+ sum)
}console.log(addNum(5,2));

//callback

function register(callback){
    setTimeout(() => {
    console.log('register end');
    callback();
    },2000);
    
}
function sendEmail(callback){
    setTimeout(() => {
    console.log('Email end');
    callback();
    } ,3000);
}
function login(callback){
    setTimeout(() =>{
    console.log('login end');
    callback();
    },2000);
}
function getUserData(){
    setTimeout(() =>{
    console.log('Got user data ');
    },1000);
}
function displayUserData(){
    setTimeout(() =>{
    console.log('user data displayed');
    },1000);
}

register(function() {
   sendEmail(function() {
     login(function() {
       getUserData();
         displayUserData();
     });

   });
});

console.log('other application woek!');



//promise

function register(){
    return new Promise((resolve,reject) => {
     setTimeout(() => {
     console.log('register end');
     resolve();
     },2000);
});
    
}
function sendEmail(){
    return new Promise((resolve,reject)=> {
    setTimeout(() => {
    console.log('Email end');
    resolve();
    } ,3000);
 });
}
function login(){
    return new Promise((resolve,reject) => {
    setTimeout(() =>{
    console.log('login end');
    resolve();
    },2000);
 });
}
function getUserData(){
    return new Promise((resolve,reject)=> {
    setTimeout(() =>{
    console.log('Got user data ');
    resolve();
    },1000);
 });
}
function displayUserData(){
    return new Promise((resolve,reject)=> {
    setTimeout(() =>{
    console.log('user data displayed');
    resolve();
    },1000);
 });
}

//register()
//.then(sendEmail)
 //.then(login)
  //.then(getUserData)
    //.then(displayUserData);
  

    async function Authenticate(){
        await register();
        await sendEmail();
        await login();
        await getUserData();

    }

    Authenticate().then(()=> {
      console.log("All set");

    });

console.log("end user");




 //async await
const prachi=()=> {
    console.log("p");
}  ;
 const getData = async() =>{
    let a = await "Hello world";
    console.log(a)
};
const setData = async()=>{
    let b = await "hello India";
    console.log(b);
};
getData();
setData();
prachi();
console.log("1");
console.log("2");

//setTimeout
const fun2= () =>{
    setTimeout(()=>{
      console.log("1")
    },2000);
}
const fun1 = () =>{
   console.log("fun 2")

    fun2();
      console.log("fun end")
}
const fun3 = () =>{
console.log("fun 1")
fun1();
}
fun1();*/

//setIntrval
var i = 0;
let star = setInterval(() => {


    for (i = 1; i <= 5; i++) {

        {
            for (var j = 1; j <= 5; j++) {
                console.log("*")
            }console.log("\n");
        }
    }
},2000);




