const todoList = [{
    name: 'make dinner',
    dueDate: '2025-4-19'
  }, {
    name: 'wash dishes',
    dueDate: '2025-4-19'
  }];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const { name, dueDate } = todoObject;
  
      const html = `
        <div class="d-flex justify-content-between align-items-center border p-2 mb-2 rounded bg-white shadow-sm">
          <div>
            <strong>${name}</strong><br>
            <small class="text-muted">${dueDate}</small>
          </div>
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
          " class="btn btn-danger btn-sm">Delete</button>
        </div>
      `;
  
      todoListHTML += html;
    }
  
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }
  
  
 
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
  
    todoList.push({
      name,
      dueDate
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }