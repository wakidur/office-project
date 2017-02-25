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
        //getValue();
        onload()
        showhideContain();
        title_val = " ";
        description_val = " ";
    }
}
/*
function getValue() {
    var data = localStorage.getItem('todo');
        data = JSON.parse(data);  
    for (var i = 0; i <data.length; i++) 
        {
            console.log(data[i].title + '\n');
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
                             '<button class="delete" id="delete" onclick="deleteTask('+i+')">'+
                                  '<i class="fa fa-trash" aria-hidden="true"></i>'+
                              '</button>'+
                          '</div>'+
                      '</li>'
        }
    document.getElementById("incomplete-tasks").innerHTML = localhtml;
} 
*/
function processFormDataEdit(){
    //console.log(editIndex);
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
    //console.log(index);
    create.style.display = "none";
    edit.style.display = "block";
    inputFormsection.style.display = "block";
    todo = JSON.parse(localStorage.todo);
    document.getElementById('title').value = todo[index].title;
    document.getElementById('description').value = todo[index].description;
    editIndex = index; 
}


function deleteTask(index){
    var list = document.getElementById('delete');
    var parent = list.parentNode.parentNode;
    //console.log(parent);
    //console.log("Index of" + index);
    todo = JSON.parse(localStorage.todo);
    todo.splice(index,1);
    parent.remove();
    localStorage.setItem('todo', JSON.stringify(todo));
    alert(index);
}
//ChangeCheckbox
function OnChangeCheckbox(checkbox) {
    console.log(checkbox);
    var checkboxx = document.getElementById('myCheckbox');
    var parent = checkbox.parentNode.parentNode;
    console.log(parent);
    if (checkbox.checked) {
       parent.classList.add("anotherclass");
       console.log("The check box is checked.");
    }
    else {
        parent.classList.remove("anotherclass");
        console.log("The check box is not checked.");
    }
}
//Full text search
function fullTextsearch() {
    var input, filter, ul, li, a,i;
    input = document.getElementById("textsearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("incomplete-tasks");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        console.log("Search text : " + a)
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
function myRadio(val){
    var arr = [];
    var allList = document.getElementsByTagName('li');
    for(var i = 0 ; i < allList.length ; i++){
        console.log(allList[i]);
        allList[i]
    }
    var allListClass = document.getElementsByClassName('anotherclass');
    for(var j = 0 ; j < allListClass.length ; j++){
        console.log(allListClass[j]);
        allListClass[j]
    }
    
    if(val.value == 'all'){
        for(var i = 0 ; i < allList.length ; i++){
        console.log(allList[i]);
         allList[i].style.display = "block";
    }
    for(var j = 0 ; j < allListClass.length ; j++){
        console.log(allListClass[j]);
       allListClass[j].style.display = "block";
    }
       
        
        console.log("All value " + val.value)
    }  else if  (val.value == 'check') {
         for(var i = 0 ; i < allList.length ; i++){
        console.log(allList[i]);
          allList[i].style.display = "none";
    }
     for(var j = 0 ; j < allListClass.length ; j++){
        console.log(allListClass[j]);
        allListClass[j].style.display = "block";  
    }
       
       
        
    } else if(val.value == 'uncheck') {
        console.log("uncheck " + val.value)
        for(var i = 0 ; i < allList.length ; i++){
        console.log(allList[i]);
        allList[i].style.display = "block";
    }
    for(var j = 0 ; j < allListClass.length ; j++){
        console.log(allListClass[j]);
        allListClass[j].style.display = "none";
    }
        
        
       
       
    } else{
        console.log(val.value);
    }
    
    //if( )
}
window.onload = function() {
    localhtml = ''; 
    if(localStorage.getItem("todo") === null) { // for initial stage todo is not present
        console.log("value no present" + todo);
    } else {
        console.log( "no value exist" );
        var data = localStorage.getItem('todo');
        data = JSON.parse(data);

         // sort by name
         data.sort(function(a, b) {
           var nameA = a.title.toUpperCase(); // ignore upper and lowercase
           var nameB = b.title.toUpperCase(); // ignore upper and lowercase
           if (nameA < nameB) {
             return -1;
           }
           if (nameA > nameB) {
             return 1;
           }
           // names must be equal
           return 0;
           
         });
        console.log(data);
        console.log(data.title + " " + data.description);
        console.log("Sort valu" + data);
        console.log("type of " + typeof data);
      for (var i = 0; i <data.length; i++) 
      {
          console.log(data[i].title + '\n');
         localhtml += '<li>'+
                       '<div class="contain-box">'+
                            '<h2>' + data[i].title + '</h2>'+
                            '<p>'+ data[i].description+'</p>'+
                       '</div>'+
                       '<div class="function-box">'+
                            '<input  type="checkbox" onclick="OnChangeCheckbox (this)" id="myCheckbox">'+
                           '<button class="edit" onclick="editTask('+i+')">'+
                                '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                            '</button>'+
                           '<button class="delete" id="delete" onclick="deleteTask('+i+')">'+
                                '<i class="fa fa-trash" aria-hidden="true"></i>'+
                            '</button>'+
                        '</div>'+
                    '</li>'
      }
    document.getElementById("incomplete-tasks").innerHTML = localhtml;
     }
};
//var myCheckbos = document.querySelectorAll('input[type=checkbox]');
//for(var i = 0 ; i < myCheckbos.length; i++){
//    var result = 0;
//    result += myCheckbos[i].checked;
//    console.log("Chekbox Result" + result);
//    }
//if (myCheckbos.checked) {
//       console.log("The check box is checked dddddddddddd.");
//       for(var i = 0 ; i < myCheckbos.length; i++){
//        var result = 0;
//            result += myCheckbos[i].checked;
//            console.log("Chekbox Result" + result);
//        }
//    }
//    else {
//        console.log("The check box is not checked.");
//    }

//document.querySelectorAll('li.anotherclass');