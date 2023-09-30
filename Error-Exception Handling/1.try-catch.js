// console.log("This is error handling in js ......")
// console.log("Printing 2nd line with no error")
// console.log("This is 3rd line trying to print variable which is not declare so it will throw error and stop further execution of program" + ram)
// console.log("This is 4th line")



// with try and catch block

try {
    console.log("This is 3rd line trying to print variable which is not declare" + ram)
} catch (error) {
    console.log("This error is handled by catch block and execution of progrma did not stoped")
    // console.log(error)
}

console.log("This line shows code exection did not stoped")

// try catch asynchronously habldes the error means fun like seTimeout wil not work properly as expected

try {
    setTimeout(() => {
        dfdfdf;
    }, 3000);
} catch (error) {
    console.log("Error in try ...")
    
}

// In above case try catch is unable to handle error So we can use another way in this case like using try-catch inside setTimeout fun etc
// like
setTimeout(() => {
    try {
        dfdfdf
    } catch (error) {
        console.log("Error caught ...")
        
    }
    
}, 3000);

// To make understanding of error msg clear we get the methods as below like error.name, etc
setTimeout(() => {
    try {
        dfdfdf
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
        
    }
    
}, 3000);
