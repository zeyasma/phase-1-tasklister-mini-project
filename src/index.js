document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.querySelector('#create-task-form');
const input = document.querySelector('#new-task-description');
const taskList = document.querySelector('#tasks');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const li = document.createElement('li');
  li.textContent = input.value;

  taskList.appendChild(li);
});