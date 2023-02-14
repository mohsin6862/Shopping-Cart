function getValuFronInputField(inputId){

    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const newInputValue = parseFloat(inputValueString);
    inputValue.value='';
    return newInputValue;
}
function getInnerTextFronTextField(innerText){

    const previousInnerTextField = document.getElementById(innerText);
    const previousInnerTextString = previousInnerTextField.innerText;
    const previousInnerText = parseFloat(previousInnerTextString);
    return previousInnerText;
}

function setValueById(innerText,newValue){

    const previousInnerTextField = document.getElementById(innerText);
    previousInnerTextField.innerText = newValue; 

}

