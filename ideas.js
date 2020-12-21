//WORKING:
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




//MY ORIGINAL IDEA IS WORKING TOO!!

let pathA = document.querySelector("#a");
let pathB = document.querySelector("#b");
let nicolaus = document.querySelector("#santa");

function AInlineFunction() {
   setTimeout(function () {
         pathA.style.display = "inline", pathB.style.display = "none"; console.log(a) }, 1000);

}

function BInlineFunction() {
   setTimeout(function () { 
        pathA.style.display = "none", pathB.style.display = "inline"; console.log(b)}, 2000);
}

BInlineFunction()
AInlineFunction()
BInlineFunction()
AInlineFunction()

BInlineFunction()
AInlineFunction()

BInlineFunction()
AInlineFunction()

//setinterval short version is working too

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
setInterval(AInlineFunction, 2000);


//







//////////////////





let pathA = document.querySelector("#a");
let pathB = document.querySelector("#b");
let nicolaus = document.querySelector("#santa");

function AInlineFunction() {
   // setTimeout(function () {
         pathA.style.display = "inline", pathB.style.display = "none"; console.log(a) }, 2000);

}

/*
setInterval(() => {
    AInlineFunction(pathA);
    console.log("setintervalAAAA");
}, 4000);*/



function BInlineFunction() {
   // setTimeout(function () { 
        pathA.style.display = "none", pathB.style.display = "inline"; console.log(b)}, 2000);

}
/*
setInterval(() => {
    BInlineFunction(pathB);
    console.log("setintervalBBBB");
}, 4000);*/




for (let index = 0; index < 10; index++) {
    setInterval(() => {
        BInlineFunction();
        console.log(index);
    }, 10000);
    setInterval(() => {
        AInlineFunction();
        console.log(index);
    }, 10000);
    
    ;
    
}

();















/*
function AInvoke() {
    setInterval(AInlineFunction(),
        console.log("Hello")
        , 300);

}

function BInvoke() {

    setInterval(BInlineFunction(),
        console.log("Hello")
        , 300);

}


AInvoke()
BInvoke()*/

