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

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value !== '' && editFlag === flag){
        
    }
}

// ******** Functions *********

// ******** Local Storage *********

// ******** Setup Items *********