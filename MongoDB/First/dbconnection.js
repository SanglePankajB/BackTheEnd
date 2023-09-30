const mongoose = require('mongoose');

try {
    mongoose.connect("mongodb://localhost:27017/TodoLocalDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("connection is success")
        
    }) 
} catch (error) {
    console.log('Unsuccess.....')
    
}





