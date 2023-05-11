var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txtInput")

var output = document.querySelector(".output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getURL(text){
    return serverUrl+"?"+"text="+text
}

function errorHandler(error){
    console.log("Error :"+error)
    alert("As mentioned in the documentation of the API , it can only handle 5 translations per hour , so if it's not working , try again Later !!")
}

function onClicked(){

    var input = txtInput.value
    fetch(getURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
    
}

btnTranslate.addEventListener("click",onClicked)



