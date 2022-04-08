var btnTranslate = document.querySelector("#btn-translate"); //storing the id in a variable
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
//output statement
//outputdiv.innerText = "Dhanush Balivada";
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"
    //this is the server which converts what is mentioned after json
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input //the function to attach the given text to the url
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server. Try again later");
} //incase of an error

function clickHandler() {

    var inputText = txtInput.value; //reading the input into the variable
    //calling server for processing
    fetch(getTranslationURL(inputText)) //giving the server info of the text
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated; //assigning the translated text to a variable
            outputdiv.innerText = translatedText;
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler);