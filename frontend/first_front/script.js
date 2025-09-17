// Grabbing HTML elements by their ID so I can manipulate them with JavaScript.
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


// An event listener that runs when the page is fully loaded. 
document.addEventListener('DOMContentLoaded', () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) { // Check if there are any saved tasks is local storage.
        const todos = JSON.parse(savedTodos);  // If yes, parse the string back into a JavaScript array.
        todos.forEach(todo => addTodoItem(todo.text, todo.isCompleted)); // Loop through the array and recreate each task on the page.
    }
});

// Listen for the form to be submitted (e.g., when the "Add" button is clicked).
todoForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the deafult browser action of reloading the page.
    const todoText = todoInput.value.trim(); // Get the input value and the "trim" func removes any extra whitespace.

    if (todoText !== ''){ // Only add a task if the input isn't empty.
        addTodoItem(todoText); // Calles the function to create a new task.
        todoInput.value = ''; // Clears the input field after adding.
    }
});


// A function that creats a new task element and adds it to the list, the func also builds a delete button.
function addTodoItem(text, isCompleted = false){
    // Create the main list item <li> element.
    const li = document.createElement('li'); 
    li.className = 'todo-item'; // Gives it a class for the design (style.css).

    // Create a <span> for the task's text.
    const todoTextSpan = document.createElement('span'); 
    todoTextSpan.textContent = text;
    todoTextSpan.className = 'todo-text';

    // Create the delete button element.
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#10006;'; // HTML entity for a close "X" symbol.
    deleteBtn.className = 'delete-btn';
    
    // Event listener to remove a task when the delete button is clicked.
    deleteBtn.addEventListener('click', function(){
        todoList.removeChild(li);
        saveTodosToLocalStorage();
    });

    // Event listener to toggle the "completed" status when a task is clicked.
    li.addEventListener('click', function(){
        li.classList.toggle('completed');
        saveTodosToLocalStorage();
    });

    // Attach the text and delete button to the list item.
    li.appendChild(todoTextSpan);
    li.appendChild(deleteBtn);

    // Add the "completed" class if the task was loaded from local storage.
    if (isCompleted) {
        li.classList.add('completed');
    }
    
    // Add the new task to the main list on the page.
    todoList.appendChild(li);
    // Call the func that saves the updated list to local storage.
    saveTodosToLocalStorage()
}

// A function that saves the current state of the entire to-do list.
function saveTodosToLocalStorage() {
    const todos = []
    // Get all the list items currently on the page.
    document.querySelectorAll('#todo-list li').forEach(li => {
        // Creates an object for each task with its text and completion status.
        const text = li.querySelector('span').textContent;
        const isCompleted = li.classList.contains('completed');
        todos.push({ text, isCompleted });
    });
    // Convert the array of objects into a JSON string and save it.
    localStorage.setItem('todos', JSON.stringify(todos));
}
