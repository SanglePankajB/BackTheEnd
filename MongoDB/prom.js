
const prom1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("time out after 3 sec")
        
    }, 3000)
}).then(()=>{
    console.log("Now promise is executed...")
    
})

console.log("Line after promise statements")
