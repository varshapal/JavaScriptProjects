let add = document.querySelector('#inc');
let subtract = document.querySelector('#dec');
let reset = document.querySelector('#rec');
add.addEventListener('click', function() {
    let output = document.querySelector('#counter');
    let result = parseInt(output.textContent) + 1;
    if(result>8)
    {
        result = 0;
    }
    output.textContent = result;
})

subtract.addEventListener('click', function() {
    let output = document.querySelector('#counter');
    let result = parseInt(output.textContent) - 1;
    if(result<0)
    {
        result = 0;
    }
    output.textContent = result;
})

reset.addEventListener('click', function() {
    let output = document.querySelector('#counter');
    let result = 0;
    output.textContent = result;
})