const request = require("request-promise")
const fs = require("fs")

const options = {
    method : 'GET',
    uri : "http://localhost:3000/gdata"
}

request(options)
    .then(function(response){
        console.log("success")
        console.log(response)
        
    })
    .catch(function(err){
        console.log("\nPankaj some error occured....\n")
        
    })

const option = {
    method: 'POST', // Use the POST method
    uri: 'http://localhost:3000/pdata',
    body: {
        name: 'PostWithRequest',
        key2: 'PostWithRequest'
        // Add any other data you want to send in the request body
    },
    json: true // Set this to true if you're sending JSON data in the body
};

request(option)
    .then(function(response){
        console.log("success")
        console.log(response)
        const data = option.body;
        fs.writeFile('./Basics/GetPostAssignment/pankaj.json', JSON.stringify(data), (err) => {
            console.log("succefully written file")
            return
            
    })
    })
    .catch(function(err){
        console.log("\nPankaj some error occured....\n", err)
        
    })