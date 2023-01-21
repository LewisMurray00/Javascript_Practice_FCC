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

// Clear items
clearBtn.addEventListener('click', clearItems);

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

        // add event listeners to both delete and buttons
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);

        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

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

// Clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }

    container.classList.remove('show-container');
    displayAlert('List has been emptied', 'danger');
    setBackToDefault();
    
    // localStorage.removeItem('list');
}

//Delete items function 
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("Item removed", "danger");

    setBackToDefault();

    // //Remove from local storage
    // removeFromLocalStorage(id);
}

// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;

    submitBtn.textContent = "edit";
  }


//Set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = "submit";
}

// ******** Local Storage *********

//Add to local storage
function addToLocalStorage(id,value){
    const grocery = { id, value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ******** Setup Items *********