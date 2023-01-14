let todos = []; //Todo-List array of todo-elements

      // const uid = function(){
      //   return Date.now().toString(36) + Math.random().toString(36).substr(2);
      // }
      
      function addTodo(){
        const textBox = document.getElementById("todo-title");
        const title = textBox.value;  //Taking in the input value for item's title
      
        const datePicker = document.getElementById("date-picker");
        const date = datePicker.value;
      
        createTodo(title, date);
        render();
      
      }
      function createTodo(title, dueDate){
        const id = '' + new Date().getTime();;
        todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });
      }

      function removeTodo(idToDelete){
        todos = todos.filter(function (todo){
          if(todo.id === idToDelete){
            return false;
          }
          else{
            return true;
          }
        });
      }
      function deleteTodo(event){
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        removeTodo(idToDelete);

        render();
      }
      
      function createDeleteButton(){
          const deleteButton = document.createElement('button');
          deleteButton.innerText = 'X';
          deleteButton.style = 'margin-left: 12px';
          deleteButton.onclick = deleteTodo;
          return deleteButton;
      }
      
      
      function render(){
        document.getElementById("todo-container").innerHTML = '';
      
        todos.forEach(todo => {
          const currentElement = document.createElement('div');
          currentElement.innerText = todo.title + ' ' + todo.dueDate;

          const deleteButton = createDeleteButton();
          deleteButton.id = todo.id;
          currentElement.appendChild(deleteButton);
          
      
          const todoList = document.getElementById('todo-container');
          todoList.appendChild(currentElement);
      
        });
      }