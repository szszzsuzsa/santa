let pathA = document.querySelector("#a");
let pathB = document.querySelector("#b");
let nicolaus = document.querySelector("#santa");

function AInlineFunction() {
    pathA.style.display = "inline", pathB.style.display = "none";
}


function BInlineFunction() {
    pathA.style.display = "none", pathB.style.display = "inline";
}


for (let index = 0; index < 2; index++) {
    setInterval(() => {
        BInlineFunction();
        console.log(index);
    }, 1000);
    setInterval(() => {
        AInlineFunction();
        console.log(index);
    }, 2000);

    ;

}