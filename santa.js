let pathA = document.querySelector("#a");
let pathB = document.querySelector("#b");
let nicolaus = document.querySelector("#santa");

function AInlineFunction() {
    setTimeout(function () { pathA.style.display = "inline", pathB.style.display = "none" }, 300);
   
}

function BInlineFunction() {
    setTimeout(function () { pathA.style.display = "none", pathB.style.display = "inline" }, 200);

}

AInlineFunction();
BInlineFunction();
AInlineFunction();
BInlineFunction();
AInlineFunction();
BInlineFunction();
AInlineFunction();
BInlineFunction();
