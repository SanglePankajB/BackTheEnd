// In JavaScript, you can create constructor functions
// This is a traditional way of creating classes in JavaScript before the introduction of ES6 classes.

function Calculator(){
    this.total = 0;
    // this.person = {
    //     name: "pankaj",
    //     age : 22
    // }
}


Calculator.prototype.add = function(num){
    return this.total +=num
}
Calculator.prototype.subtract = function(num){
    return this.total -=num
}
Calculator.prototype.multiply = function(num){
    return this.total *=num
}
Calculator.prototype.divide = function(num){
    if(num == 0){
        throw new Error("Number can't be 0")
    }
    return this.total /=num
}



exports.Calculator = Calculator