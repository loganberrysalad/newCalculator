let ac = document.getElementById('ac')
let del = document.getElementById('del')
let screenInput = document.getElementById('screenInput')
let dot = false

// to display the vaules and append them to the screen 
function clickedValue(btnPressed){
    screenInput.value += btnPressed
}
// clearing the screen by replacing it with a empty screen 
function allclear(){
    screenInput.value = '';
}
// deleting one by one from the RHS 
function delBtn(){
    screenInput.value = screenInput.value.slice(0,-1)
}
/*
.slice(0, -1): This is a string method that is used to extract a portion of a string. In this case, it's used to extract all characters from index 0 (the beginning) up to, but not including, the last character. The -1 as the second argument indicates the position one character before the end.
 */
// equaling numbers
function equaling(){
    screenInput.value = eval(screenInput.value)
}
// one dot
function oneDot(){
if (!dot){
    screenInput.value += '.';
    dot = true
}
}
