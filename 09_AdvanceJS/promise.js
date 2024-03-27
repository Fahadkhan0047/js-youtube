const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task is COmpleted")
        resolve()
    }, 1000)
    

})

promiseOne.then(function(){
    console.log("Promise COnsumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")

})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Fahad" , password:"123"})
        }else{
            reject('ERROR:Somthing Went Wrong!')
        }
    },2000)
}) 

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>console.log("Promise is Completed and resolved"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript" , password:"123"})
        }else{
            reject('ERROR:Somthing Went Wrong!')
        }
    },2000)

});

async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()