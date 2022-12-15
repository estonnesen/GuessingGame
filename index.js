const button = document.getElementById('button')

let val = 10;

button.addEventListener('click', function () {
    let input = document.getElementById('num');
    if(input === val) {
        console.log('this is the correct number');
    }
});

