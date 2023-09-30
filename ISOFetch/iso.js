 // Import the 'fetch' function for Node.js
// const fetch = require('node-fetch');
//node-fetch as an ESM Package:

// The node-fetch package is designed as an ECMAScript module (ESM). In other words, it uses the import and export syntax rather than CommonJS require and module.exports.
import fetch from 'node-fetch';
// Usage is the same in both environments
fetch('http://localhost:3000/tasks/')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return "Done";      //response.json()
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
