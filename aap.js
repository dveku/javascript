var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
//output statement
//outputdiv.innerText = "Dhanush Balivada";

function clickHandler() {
    outputdiv.innerText = "asjasjdoweldj" + txtInput.value;
}
btnTranslate.addEventListener("click", clickHandler);