// Some other commonly used asynchronous fs module methods include:

// fs.writeFile(): Used to write data to a file asynchronously.

// fs.appendFile(): Used to append data to a file asynchronously.

// fs.readdir(): Used to read the contents of a directory asynchronously.

// fs.mkdir() and fs.rmdir(): Used to create and remove directories asynchronously.

// fs.unlink(): Used to delete a file asynchronously.

// fs.stat(): Used to get information about a file or directory asynchronously.

// fs.rename(): Used to rename files or directories asynchronously.


const fs = require('fs')

// fs.readFile('./Basics/file.txt','utf8', (err, data)=>{
//     console.log(err, data)
// })


// you can use the corresponding synchronous versions
// (e.g., fs.readFileSync(), fs.writeFileSync() if you purposefully want to block further operations


const a = fs.readFileSync('./Basics/file.txt', 'utf8')
console.log(a)

// OR

// const b = fs.readFileSync('file.txt')
// console.log(b.toString())

 
console.log("Finished")


//--------------------------------------------------------------------------

// .. writing 

// fs.writeFile('file.txt', "Thiss is Writing........" , ()=>{
//     console.log("Writing op is successful...")
// })
fs.appendFile('./Basics/file.txt', "Thiss is appending........" , ()=>{
    console.log("appending op is successful...")
})