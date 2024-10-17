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


//       promiseFour


const promisefour = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve([`banana, apple, graps`])
  },6000)
})

promisefour.then(function(data){
    console.log(data)
})

//       promise five 


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

}).finally(()=>{
    console.log("The promise is resolve or rejcted")
})


//                promiseSix


 const promisesix = new Promise(function(resolve,reject){
    setTimeout(function(){
                let error =true;
                if(!error){
                    resolve({userName: "munawar", password:123})
                }else{
                    reject("ERROR 101 Js went wrong")
                }
            },1000)
 })
 async function consumPromisesix(){
 try {
        const respons =  await promisesix
         console.log(respons);
        
 } catch (error) {
         console.log(error)
 }
}
 consumPromisesix();



 //                  promise seven


 async function getAllusers(){
       const respons =  await fetch('https://jsonplaceholder.typicode.com/users')
      // console.log(respons)
       const data = await respons.json()
       console.log(data)
 }

 getAllusers()



//                    promiseEight



fetch("https://jsonplaceholder.typicode.com/users")
.then((Response)=>{
   return Response.json()

}).then((data)=> console.log(data))

.catch((error)=> console.log(error))



                  promiseNine



const promiseNine = new Promise(function(resolve, reject){
   
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({email: "Example@gmail.com", password:12345678})
        }else{
            reject("ERROR 101 promiseSeven went wrong")
        }
    },7000)

}).then((data)=>{
    console.log(data)
    return data.password

 })
.then((password)=>{
    console.log(password);

}).catch(function(error){
  console.log(error);

}).finally(()=>{
    console.log("The promise is resolve or rejcted")
})

console.log(promiseNine)