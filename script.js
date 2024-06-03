document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if (title && description) {
        addTodoItem(title, description);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill out both fields.');
    }
});

function addTodoItem(title, description) {
    let todoList = document.getElementById('todo-list');

    let row = document.createElement('tr');

    let titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    let descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);

    let deleteCell = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        row.remove();
    });
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    todoList.appendChild(row);
}
