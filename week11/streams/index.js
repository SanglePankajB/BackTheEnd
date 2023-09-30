const fs = require("fs")

const readableSteam = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    // highWaterMark: 2,       // for specifying chunk size --> now it is 2 bytes and default is 16 KB
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableSteam.on("data", (chunk) =>{
    console.log(chunk);
    writeableStream.write(chunk);
    
})




