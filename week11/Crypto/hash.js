const crypto = require('crypto');

// Hash text using SHA-256
function hashText(text) {
    // Creating a Hash Object
  const hash = crypto.createHash('sha256');     //SHA-256 produces a 256-bit hash value
  hash.update(text);
  return hash.digest('hex');        //used to compute and retrieve the hash value as a hexadecimal string
}

// SHA-256 is a cryptographic hash function that produces a fixed-length 256-bit (32-byte) hash value.


const plaintext = 'Hello, World!';
const hashedText = hashText(plaintext);

console.log('Original text:', plaintext);
console.log('Hashed text:', hashedText);        // total 32 bytes
