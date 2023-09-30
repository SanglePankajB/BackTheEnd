// Import faker as below 
const { faker } = require('@faker-js/faker');


const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz


console.log(faker.date.birthdate())
console.log(faker.person.firstName())
console.log(faker.person.lastName())
console.log(faker.person.sexType())
console.log("for somethis else")

// Generate a random phone number
const randomPhoneNumber = faker.phone.phoneNumber;
console.log(randomPhoneNumber)


console.log(randomName)
console.log(randomEmail)



