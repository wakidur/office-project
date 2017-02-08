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
window.onload = init;

function init() {
//   create a object
    var myObject = {
        name : "Wakidur",
        age : 27,
        department : "blue"
    };
    var myObjectJson = JSON.stringify(myObject);
        localStorage.setItem('trish', myObjectJson);
    var newGetJson = localStorage.getItem('trish');
    var newMyObject = JSON.parse(newGetJson);
    console.log("Name: " + newMyObject.name + "\n" + "Age: " + newMyObject.age + "\n" + "Department: " + newMyObject.department )
    
    //var myNewobj = new Object();
    var myNewobj = {};
        myNewobj.name = "Wakdur Rahman";
        myNewobj.age = 28;
        myNewobj.department = "Software";
    var myObjectJson = JSON.stringify(myNewobj);
        localStorage.setItem('mynew', myObjectJson);
    var newGetJson = localStorage.getItem('mynew');
    var newMyObject = JSON.parse(newGetJson);
    console.log("Name: " + newMyObject.name + "\n" + "Age: " + newMyObject.age + "\n" + "Department: " + newMyObject.department )
    
        
}

