// Diff types of error in js

// 1. Reange error
// 2. Reference error 
// 3. syntax error 
// 4. type error --> datatype 
// 5. URIError 














setTimeout(() => {
    try {
        dfdfdf
    } catch (error) {
        console.log(error.name+"\n")
        console.log(error.message+"\n")
        console.log(error.stack+"\n")
        
    }
    
}, 3000);