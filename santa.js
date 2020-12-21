let pathA = document.querySelector("#a");
let pathB = document.querySelector("#b");
let nicolaus = document.querySelector("#santa");

function AInlineFunction() {
    pathA.style.display = "inline", pathB.style.display = "none";
}


function BInlineFunction() {
    pathA.style.display = "none", pathB.style.display = "inline";
}



setInterval(BInlineFunction, 1000); 
console.log(b);
setInterval(AInlineFunction, 2000);
console.log(a);

