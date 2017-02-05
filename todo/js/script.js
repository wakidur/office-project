//Grobal variable declaration 
var taskInput = document.getElementById("title");
var desInput = document.getElementById("description");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

//New Task List Item
var createNewTaskElement = function (taskString, desInput) {
    //Create List Item
    var listItem = document.createElement("li");

    //input (checkbox)
    var checkBox = document.createElement("input"); // checkbox
    //label for title & description
    var label = document.createElement("label"); // title
    var labeldes = document.createElement("label"); // description
    //input (text) for  title & description
    var editInput = document.createElement("input"); // title
    var editdesInput = document.createElement("input"); // description 
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");
    // each element dependent attribute and inner text,  
    checkBox.type = "checkbox";
    editInput.type = "text";
    editdesInput.type = "text";
    editButton.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true">';
    editButton.className = "edit";
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteButton.className = "delete";

    label.innerText = taskString;
    labeldes.innerText = desInput;

    // each element needs appending

    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(labeldes);
    listItem.appendChild(editdesInput);
    listItem.appendChild(checkBox);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
};

// Add a new task
var addTask = function () {
    console.log("Add task...");
    var listItem = createNewTaskElement(taskInput.value, desInput.value);
    console.log(taskInput.value + desInput.value);
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
    desInput.value = "";
};

// Edit an existing task
var editTask = function () {
    console.log("Edit Task...");

    var listItem = this.parentNode;
    var editInput = listItem.querySelectorAll("input[type=text]")[0];
    var label = listItem.querySelectorAll("label")[0];
    var editdesInput = listItem.querySelectorAll("input[type=text]")[1];
    var labeldes = listItem.querySelectorAll("label")[1];
    var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode 
    if (containsClass) {
        label.innerText = editInput.value;
        labeldes.innerText = editdesInput.value;
        console.log("If condition")
    } else {
        editInput.value = label.innerText;
        editdesInput.value = labeldes.innerText;
        console.log("Else")
    }
    // toggle .editMode on the parent
    listItem.classList.toggle("editMode");

};


// Delete an existing task
var deleteTask = function () {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
};

// Mark a task as complete 
var taskCompleted = function () {
    console.log("Task complete...");
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};



// Mark a task as incomplete
var taskIncomplete = function () {
    console.log("Task Incomplete...");
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask to edit button
    editButton.onclick = editTask;

    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;

    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
};

var ajaxRequest = function () {
    console.log("AJAX Request");
};

// Set the click handler to the addTask function
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


// Cycle over the incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
    // bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
};
// Cycle over the completeTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
    // bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);

};

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("incomplete-tasks");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("label")[0];
        console.log("Search text : " + a)
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}



