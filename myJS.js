/*
* Excercise 1
*
*/

const colorBlock = document.querySelector('#color-block');
const colorText = document.querySelector('#color-name');
const firstColor = colorText.textContent;
const newColor = '#ADD8E6'

/*
* Then write a function that changes the text and the color inside the div
*
*/

colorBlock.addEventListener("click", function changeColor(){
    //Write a condition determine what color it should be changed to

    if(colorText.textContent == firstColor){
        //change the background color using JS
        colorBlock.style['background-color'] = newColor;
        //Change the text of the color using the span id color-name
        colorText.textContent = newColor;
    }
    else{
        //change the background color using JS
        colorBlock.style['background-color'] = firstColor;
        //Change the text of the color using the span id color-name
        colorText.textContent = firstColor;
    }
})


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertBtn = document.querySelector('#convertbtn');
const celsiusOutput = document.querySelector('#c-output');

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

convertBtn.addEventListener("click", function convertTemp(){
    //Calculate the temperature here
    var tempInput = document.querySelector('#f-input');
    const celsiusTemp = (tempInput.value - 32) * (5/9);

    //Send the calculated temperature to HTML
    celsiusOutput.textContent = celsiusTemp;
})
