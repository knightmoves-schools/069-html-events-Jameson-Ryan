function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
    value *= value;
    
    if (isNaN(value)) {
        result = 'Invalid, please enter a number';
    } else {
        result = value;
    }

    document.getElementById('number').value = value;
    document.getElementById('result').innerHTML = result;
}

