let todos = []; //Todo-List array of todo-elements

      //const uid = function(){
      //  return Date.now().toString(36) + Math.random().toString(36).substr(2);
      //}
      
      function addTodo(){
        const textBox = document.getElementById("todo-title");
        const title = textBox.value;  //Taking in the input value for item's title
      
        const datePicker = document.getElementById("date-picker");
        const date = datePicker.value;
      
        createTodo(title, date);
        render();
      
      }
      function createTodo(title, dueDate){
        todos.push({
          title: title,
          dueDate: dueDate,
        });
      }
      
      /**
       * I want this to be able to recreate the input div underneath an element when you add something.
       * Issue is that when adding a button property to the the addButton, it creates an infinite loop.
       * I am going to create a branch that instead just works as most typical todo-lists that has a 
       * static add task bar instead of this version, which aims to add the bar beneath etc.
       */
      function recreateInput(){
        
        const titleInput = document.createElement('input');
        titleInput.type = "text";
        const dateInput = document.createElement('input')
        dateInput.type = "date";
        
        const addButton = document.createElement('button');
        const addText = document.createTextNode('Add');
        addButton.appendChild(addText);
        addButton.addEventListener('click', addTodo);

        const add = document.createElement('div');
        add.appendChild(titleInput);
        add.appendChild(dateInput);
        add.appendChild(addButton);
        
        const todoList = document.getElementById('element-container');
        todoList.appendChild(add);
      }
      
      
      function render(){
        document.getElementById("element-container").innerHTML = null;
      
        todos.forEach(todo => {
          const currentElement = document.createElement('div');
          currentElement.innerText = todo.title + ' ' + todo.dueDate;
      
          const todoList = document.getElementById('element-container');
          todoList.appendChild(currentElement);
      
        });
        recreateInput();
      }