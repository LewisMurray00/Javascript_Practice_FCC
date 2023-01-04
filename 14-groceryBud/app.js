// ******** Select items ************
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
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
        const element = document.createElement('article');
        // Add class 
        element.classList.add('grocery-item');
        // Add Id 
        const attr = document.createAttribute('date-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `;

        //Append child
        list.appendChild(element);

        //Display alert
        displayAlert('item added to the list', 'success');

        //Show container
        container.classList.add('show-container');

        // Add to local storage
        addToLocalStorage(id,value);

        //Set back to default
        setBackToDefault();

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

    //Remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000);
}

//Set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = "submit";
}

// ******** Local Storage *********
function addToLocalStorage(id,value){
    console.log("added to local storage")
}
// ******** Setup Items *********