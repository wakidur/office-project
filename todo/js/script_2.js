//custom pattern 
/*
function trim(str){
    return str.replace(/^\s+|\s+$/g, '');
}

function checkEmail(email){
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(email)){
        return true;
    } else{
    return false;
    }
}
*/

//step 1
//golbal function for retive object property and value 
function showProps(obj, objectName){
    var result = '';
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result += objectName + '. ' + i + ' = ' + obj[i] + '\n';
        } else {
            console.log("Empty object " + obj);
        }
        
    }
    return result; // return value
    console.log(result); // for console parpase
}

window.onload = init;

function init() {
//   create a object
    var myObject = {
        name : 'Wakidur',
        age : 27,
        department : 'blue'
    };
    var myObjectJson = JSON.stringify(myObject);
    console.log(myObjectJson);
    localStorage.setItem('trish', myObjectJson);
    var newGetJson = localStorage.getItem('trish');
    var newMyObject = JSON.parse(newGetJson);
    console.log(newMyObject);
    console.log("Name: " + newMyObject.name + "\n" + "Age: " + newMyObject.age + "\n" + "Department: " + newMyObject.department )
    
    //var myNewobj = new Object();
    
    /*
    var myNewobj = {};
        myNewobj.name = "Wakdur Rahman";
        myNewobj.age = 28;
        myNewobj.department = "Software";
    var myObjectJson = JSON.stringify(myNewobj);
        localStorage.setItem('mynew', myObjectJson);
    var newGetJson = localStorage.getItem('mynew');
    var newMyObject = JSON.parse(newGetJson);
    console.log("Name: " + newMyObject.name + "\n" + "Age: " + newMyObject.age + "\n" + "Department: " + newMyObject.department );
    */
     
}

//step 2 
//Global variable ;
//var submitButton = document.getElementById('submit');
function Todo(id, task, who, dueDate){
    var $this = this;
       $this.id = id;
       $this.task = task;
       $this.who = who;
       $this.dueDate = dueDate;
       $this.done = false;
}

var todos = new Array();

window.onload = init;
function init(){
    var submitButton = document.getElementById('submit');
    submitButton.onclick = getFormData;
    getTodoItems();
}

function getTodoItems() {
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.substring(0, 4) == "todo") {
                var item = localStorage.getItem(key);
                var todoItem = JSON.parse(item);
                todos.push(todoItem);
           }
        }
        addTodosToPage();
    }
    else {
        console.log("Error: you don't have localStorage!");
    }
}
function addTodosToPage() {
    var ul = document.getElementById("todoList");
    var listFragment = document.createDocumentFragment();
    for (var i = 0; i < todos.length; i++) {
        var todoItem = todos[i];
        var li = createNewTodo(todoItem);
        listFragment.appendChild(li);
    }
    ul.appendChild(listFragment);
}

function parseTodoItems(todoJSON) {
    if(todoJSON == null || todoJSON.trim() == ''){
        return;
    }
    var todoArray = JSON.parse(todoJSON);
    if(todoArray.length == 0) {
        console.leg("Error: the to do list array is empty");
        return;
    }
    for (var i = 0 ; i < todoArray.length; i++){
        var todoItem = todoArray[i];
        todos.push(todoItem);
    }
}


//function addTodosTopage() {
//    var ul = document.getElementById('todoList');
//    var listFragment = document.createDocumentFragment();
//    for(var i = 0; i < todos.length; i++){
//        var todoItem = todos[i];
//        var li = createNewTodo(todoItem);
//        listFragment.appendChild(li);
//    }
//    ul.appendChild(listFragment);
//}


function addTodoToPage(todoItem){
    var ul = document.getElementById('todoList');
    var li = document.createNewTodo(todoItem);
    ul.appendChild(li);
    document.forms[0].reset();
}

function createNewTodo(todoItem){
    var li = document.createElement('li');
    var spanTodo = document.createElement('span');
    spanTodo.innerHTML = todoItem.who + "Need to " + todoItem.task + "by" + todoItem.dueDate;
    var spanDone = document.createElement('span');
    if(!todoItem.done){
        spanDone.setAttribute('class', 'notDone');
        spanDone.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else {
        spanDone.setAttribute('class', 'done');
        spanDone.innerHTML = "&nbsp;&#10004;&nbsp;";
    }
    li.appendChild(spanDone);
    li.appendChild(spanDone);
    return li;
}


function getFormData(){
    var task = document.getElementById('task').value;
    if(checkInputText(task, "Please enter a task"))
        return;
    var who = document.getElementById('who').value;
    if(checkInputText(who, 'Please enter a person to do task'))
        return;
    var date = document.getElementById('dueDate').value;
    if(checkInputText(date, "Please enete a due date"))
        return;
    var id = todos.length;
    var todoItem = new Todo(id, task, who, date);
    todos.push(todoItem);
    saveTodoItem(todoItem);
}

function checkInputText(value, msg){
    if(value == null || value == ""){
        alert(msg);
        return true;
    }
    return false;
}

function saveTodoItem(todoItem) {
    if(localStorage){
        var key = "todo" + todoItem.id;
        var item = JSON.stringify(todoItem);
        localStorage.setItem(key, item);
    } else {
      console.log("Error: you don't have localStorage");  
    }
}



