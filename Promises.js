const promiseOne =new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("async one task is complet")
        resolve() 
    },5000)
    
})
promiseOne.then(function(){
    console.log("promise one resolve")
})

// promise two

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("async two task is complet")
        resolve()
    },3000)
}).then(function(){
    console.log("promise two resolve")
})


// promise three


const promiseThree= new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({userName : "Munawar", Email : "muna@gmail.com"})
    },2000)
})

promiseThree.then(function(data){
   console.log(data)
})


const promisefour = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve([`banana, apple, graps`])
  },6000)
})

promisefour.then(function(data){
    console.log(data)
})

//promise five 


const promisefive = new Promise(function(resolve, reject){
   
    setTimeout(function(){
        let error = true;
        if(! error){
            resolve({userName: "munawar", email:" munawar@gmail.com"})
        }else{
            reject("ERROR 101 some thing went wrong")
        }
    },1000)
}).then((data)=>{
   // console.log(data)
    return data.userName
}).then((userName)=>{
    console.log(userName);
}).catch(function(error){
  console.log(error);
  
})