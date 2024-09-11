
let promise2= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("first");
        
    },3000)
})

let promise3= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("secound");
        
    },3000)
})
let promise4= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("thrd");
        
    },3000)
})
Promise.all([promise2,promise3,promise4])
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    
})