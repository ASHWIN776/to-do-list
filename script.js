const form = document.querySelector("form");
const listItems = document.querySelector(".listItems");

// Event Listeners
form.addEventListener("submit", addTodo);
listItems.addEventListener("click", removeTodo)

function removeTodo(evt)
{
  // Will only fire if clicked on a button
  if(evt.target.nodeName === "BUTTON")
  {
    const button = evt.target;
    button.parentElement.remove();
  }
}

function addTodo(evt)
{
  const todo = this.elements["newItem"].value;
  // Preventing default submission of the form
  evt.preventDefault();

  // Fn will end if the todo is empty
  if(!todo) return;

  // Creating the todo
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `<span>${todo}</span> <button class="deleteIcon">x</button>`;

  listItems.append(todoItem);
  // Empty after adding an item
  this.elements["newItem"].value = "";
}

//function removeAllTodos(evt)
//