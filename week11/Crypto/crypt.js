const crypto = require('crypto');

// Create a secret key and initialization vector (IV)
const secretKey = crypto.randomBytes(32); // You should store this securely
var iv = crypto.randomBytes(16);
// console.log("Secrete key : ", secretKey)

// Encrypt text
function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);      // Cipher Block Chaining (CBC)
  // updates the cipher with the input text in UTF-8 encoding and returns the encrypted data in hexadecimal (hex) format.
  let encrypted = cipher.update(text, 'utf8', 'hex');     //  (data, inputEncoding, outputEncoding)
//   finalizes the encryption and returns any remaining data in the specified encoding.
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt text
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const plaintext = 'Hello, World!';
const encryptedText = encrypt(plaintext);
const encryptedText2 = encrypt(plaintext);
const decryptedText = decrypt(encryptedText);

console.log('Original text:', plaintext);
console.log('Encrypted text:', encryptedText);
console.log('Encrypted text:', encryptedText2);
console.log('Decrypted text:', decryptedText);