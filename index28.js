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

console.log("end user");*/


const fun = () =>{
          setTimeout(()=>{
            console.log("fun 2")
          },2000);
}
 const fun1 = ()=>{
         console.log("fun 1")
          fun2();
            console.log("fun end")
 }
 fun1();     