
// Without eventListener

document.getElementById("1").onmouseover = ()=>{
    this.style.filter = "grayscale(0%)";
};
// document.getElementById("1").onmouseover = abc;

function abc(){
    document.getElementById("1").style.filter = "grayscale(0%)";
}

document.getElementById("1").onmouseout = xyz;

function xyz(){
    document.getElementById("1").style.filter = "grayscale(100%)";
}



//  With EventListner

// document.getElementById("1").addEventListener("mouseover", function(){
//     document.getElementById("1").style.filter = "grayscale(0%)";
// });


// document.getElementById("1").addEventListener("mouseout", function(){
//     // document.getElementById("1").style.filter = "grayscale(100%)";
//     // OR
//     this.style.filter = "grayscale(100%)";
// })

