

// elements
const resultField = document.getElementById('result-field');
const copyAlert = document.getElementById('copy-alert');
// create onload handler
window.onload = () => {
    main();
}

// main function
function main(){

    // get all element
    const root = document.getElementById('root');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        root.style.backgroundColor = generateHexColor();
        resultField.value = generateHexColor();
        copyAlert.innerText = 'Copy Color Code'
    })
}

// rgb generator
function generateHexColor(){
    const red = Math.floor(Math.random()*255).toString(16);
    const green = Math.floor(Math.random()*255).toString(16);
    const blue = Math.floor(Math.random()*255).toString(16);
    return `#${red}${green}${blue}`
};


// color copy functionality
const copyBtn = document.getElementById('copy-btn');



copyBtn.addEventListener('mouseover', function() {
    copyAlert.style.display = 'flex'
})

copyBtn.addEventListener('mouseleave', function(){
    copyAlert.style.display = 'none'
})

// copy function
copyBtn.addEventListener('click', function(){
   
    resultField.setSelectionRange(0, 100);
    navigator.clipboard.writeText(resultField.value);
    copyAlert.innerText = 'Color Code Copied';

})