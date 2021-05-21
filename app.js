var translateButton = document.querySelector("#translate-button");

var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"


function getTranslationURL(input)
{
    return serverURL + "?" + "text=" +input
}

function errorHandler(error)
{
    alert("Server Over-loaded!Please try again later");
}

function clickHandler()
{
    var inputText = translateInput.value;
    fetch(getTranslationURL(inputText))
    .then(Response=> Response.json())
    .then(json=> {var translatedText= json.contents.translated;
    translateOutput.innerText=translatedText; })
    .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler)
