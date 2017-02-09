//custom pattern 
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
//Global variable 
var inputFormsection = document.getElementById('subscribe_frm');
var showButtom = document.getElementById('add-btn');
var hideButtom = document.getElementById('nosub');
var create = document.getElementById('submit');
var edit = document.getElementById('edit');
var todo = [];
var localhtml = "";
var editIndex;

function showhideContain(){
    var vis = inputFormsection.style;
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    create.style.display = "block";
    edit.style.display = "none";
    if(vis.display == '' || vis.display == 'none'){
        console.log("if condetion");
        vis.display = 'block';
        showButtom.style.display = 'none';
        hideButtom.style.display = ''
    } else {
        console.log("Else condetion");
        vis.display = 'none';
        showButtom.style.display = 'block';
        hideButtom.style.display = 'none'
    }
}
function processFormData() {
    
    var title_element = document.getElementById('title');
    var description_element = document.getElementById('description');
    
    var title_val = trim(title_element.value);
    var description_val = trim(description_element.value);
    
    var errer_message = "The following fields had errors in them: \n\n";
    var data = 'You entered the following information: \n\n';
    
    var error_flag = false;
    
    if(title_val == '' ){
        errer_message += 'Title : plaease enter your title \n';
        error_flag = true;
    } else {
        data += 'Title : '+ title_val + ' \n '; 
    }
    
    if(description_val == ''){
        errer_message += 'Description : plaease enter your descrip \n';
        error_flag = true;
    }
    else{
        data += 'Description' + description_val + '\n';
    }
    
    if(error_flag){
        console.log(errer_message);
        alert(errer_message);
    } else {
        var object = {
            title : title_val,
	    description : description_val
	}
        todo.push(object);
        localStorage.setItem('todo', JSON.stringify(todo));
        console.log("success");
        getValue();
        showhideContain();
        title_val = " ";
        description_val = " ";
    }
}

 function getValue() {
    var data = window.localStorage.getItem('todo');
        data = JSON.parse(data);  
    for (var i = 0; i <data.length; i++) 
        {
          localhtml += '<li>'+
                         '<div class="contain-box">'+
                              '<h2>' + data[i].title + '</h2>'+
                              '<p>'+ data[i].description+'</p>'+
                         '</div>'+
                         '<div class="function-box">'+
                              '<input type="checkbox">'+
                             '<button class="edit" onclick="editTask('+i+')">'+
                                  '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                              '</button>'+
                             '<button class="delete">'+
                                  '<i class="fa fa-trash" aria-hidden="true"></i>'+
                              '</button>'+
                          '</div>'+
                      '</li>'
        }
    document.getElementById("incomplete-tasks").innerHTML = localhtml;
}
   
window.onload = function() 
   {
      localhtml = ''; 
    var data = window.localStorage.getItem('todo');
          data = JSON.parse(data);
          console.log(data.title + " " + data.description);
          console.log(data);
      for (var i = 0; i <data.length; i++) 
      {
         localhtml += '<li>'+
                       '<div class="contain-box">'+
                            '<h2>' + data[i].title + '</h2>'+
                            '<p>'+ data[i].description+'</p>'+
                       '</div>'+
                       '<div class="function-box">'+
                            '<input type="checkbox">'+
                           '<button class="edit" onclick="editTask('+i+')">'+
                                '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                            '</button>'+
                           '<button class="delete">'+
                                '<i class="fa fa-trash" aria-hidden="true"></i>'+
                            '</button>'+
                        '</div>'+
                    '</li>'
      }
    document.getElementById("incomplete-tasks").innerHTML = localhtml;

   }
//var myThis = " ";
//var listItem = document.createElement("li");
   // Edit an existing task
   
   
function processFormDataEdit(){
    console.log(editIndex);
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    todo = JSON.parse(localStorage.todo);
    todo[editIndex].title = title;
    todo[editIndex].description = description;
    localStorage.setItem('todo', JSON.stringify(todo));
    showhideContain();
    onload();
}   
function editTask(index) {
    
    create.style.display = "none";
    edit.style.display = "block";
    
    inputFormsection.style.display = "block";
    todo = JSON.parse(localStorage.todo);
    document.getElementById('title').value = todo[index].title;
    document.getElementById('description').value = todo[index].description;
    editIndex = index;
    
    /*
  console.log("Edit Task...");
  
  var listItem = contex.parentNode.parentNode;
 // var listItem = this.parentNode.parentNode;
   
    console.log(listItem);

  
  var h = listItem.querySelector("h2");
  var p = listItem.querySelector("p");

  
  var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode 
  if(containsClass) {
      //switch from .editMode 
      //Make label text become the input's value
    //label.innerText = editInput.value;
    //labeldes.innerText = editdesInput.value;
    console.log("no edit Mode");
  } else {
      //Switch to .editMode
      //input value becomes the label's text
    //editInput.value = h.innerText;
    //editdesInput.value = p.innerText;
    console.log("H2" + h.innerHTML + "\n" + "P:" + p.innerHTML );
  }
  
    // Toggle .editMode on the parent
  listItem.classList.toggle("editMode");
 */
}

