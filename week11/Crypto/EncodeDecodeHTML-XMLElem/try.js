const entities = require('html-entities');

const originalText = '<div>Hello, World!</div>';
const encodedText = entities.encode(originalText);
const decodedText = entities.decode(encodedText);

console.log('Original text:', originalText);
console.log('Encoded text:', encodedText);
console.log('Decoded text:', decodedText);


// involves converting special characters used in HTML or XML documents into their respective entity references and vice versa.
// to ensure that the content is displayed correctly and doesn't interfere with the markup or scripting.
