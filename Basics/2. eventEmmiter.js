// event firing

const eventEmitter = require('events');
class MyEmitter extends eventEmitter{}

const myEmitter = new MyEmitter();      // Created object of MyEmitter class 
// we can skip some code like below
// const obj = new eventEmitter.EventEmitter()     // above 2 lines can be done with single line like this -- given in web app book

//with  .on we bind event with callback fun
myEmitter.on('waterfull', ()=>{                      // event.on(event, listener): event is string of name of event & listner is fun will be executed
    console.log("Turn the motor off ")
})

myEmitter.emit("waterfull");             // .emit() method is used to trigger the event






//   Another version

// const eventEmitter = require('events');
// class MyEmitter extends eventEmitter{}

// const myEmitter = new MyEmitter();

// myEmitter.on('waterfull', ()=>{
//     console.log("turn off the motor")
//     setTimeout(() => {
//         console.log("Gentle reminder again Do it")
//     }, 5000);
// })

// myEmitter.emit("waterfull")      // setTimeOut is async fun which makes the it non blocking mechanism so it will not wait till that timeout function finishes execution it will move forward and complete other below oprations

// console.log("it does not waits for function to full execute")

