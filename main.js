document.getElementById('submit').addEventListener('click', submit);

function submit() {
    let fahrenheit = document.getElementById('input').value
    fahrenheit = (fahrenheit - 32)* 5/9;
    fahrenheit = fahrenheit*100;
    fahrenheit = Math.round(fahrenheit);
    fahrenheit = fahrenheit/100;
    document.getElementById('output').innerHTML = fahrenheit
}