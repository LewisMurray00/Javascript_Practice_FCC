// ******** Select items ************
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submit = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// Edit options
let editElement;
let editFlag = false;
let editId = "";

// ******** Event Listeners *********

//Submit Form
form.addEventListener('submit', addItem);

// ******** Functions *********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();

    if(value && !editFlag){
        console.log("add item to the list")
    } else if (value && editFlag){
        console.log("editing")
    } else {
        displayAlert('Please enter value', 'danger')
    }
}

// Display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}


// ******** Local Storage *********

// ******** Setup Items *********