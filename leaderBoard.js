// Task 1
document.getElementById('top-players-title').style.color = 'red';
document.getElementById('top-blogs-title').style.color = 'red';



// Task 2
document.getElementById('players').style.backgroundColor = "rgba(0, 255, 0, 0.4)";



// Task 3
document.getElementById('add-item').addEventListener('click', function () {
    const itemList = document.getElementById('lists');
    const newItem = document.createElement('li')
    const itemText = document.createTextNode("New Item");
    newItem.appendChild(itemText);
    itemList.appendChild(newItem);
});



// Task 4/5
document.getElementById('num-increase').addEventListener('click', function () {
    const inputField = document.getElementById('num-count');
    const preValue = inputField.value;
    const finalValue = parseInt(preValue) + 1;
    if (finalValue > 5) {
        document.getElementById('num-increase').disabled = true;
    }
    else {
        inputField.value = finalValue;
    }
});



