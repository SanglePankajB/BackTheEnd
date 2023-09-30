// math-spec.js

// Absolute path(entire path from root) ---> C:\Users\User\Documents\file.txt
// Relative path ---> ./file.txt --> for curr dir
//                    ../file.txt --> for going one folder back
//                    ../../file.txt --> for going 2 folder back

// Import the functions to be tested
// const { add, subtract } = require('C:/Users/Pankaj Sangle/Desktop/Backend/Istanbul-Jasmine/src/math.js');
const { add, subtract } = require('../../src/math.js');

// Describe block for the Math functions
describe("Math Functions", function() {
  // Test case for the add function
  it("should correctly add two numbers", function() {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  // Test case for the subtract function
  it("should correctly subtract two numbers", function() {
    expect(subtract(5, 2)).toBe(2);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(-1, -1)).toBe(0);
  });
});

