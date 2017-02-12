
    
  /*  var mycar = new Object();
        mycar.make = 'Ford';
        mycar.model = 'Mustang';
        mycar.year = 1969;
   */   
    /*Objects are sometimes called associative arrays, since each property is 
    associated witha string value to access it.*/
/*    
    var mycar = new Object();
        mycar['make'] = 'Ford';
        mycar['model'] = 'Mustang';
        mycar['year'] = 1969;
        
    var myobj = new Object();
    var    str = 'myString';
    var    rand = Math.random();
    var    obj = new Object();

myobj.type;
myobj['data created'];
myobj[str];
myobj[rand];
myobj[obj];
myobj['']

*/


var human = {
    name : "Waki",
    age : 27,
    dep : "Software"
}
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

var mynew = new Object();
mynew['make'] = 'Volvo';
mynew['model'] = 'Nice';
mynew['year'] = 12;

function showProps(obj, objectName){
    var result = '';
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result += objectName + '. ' + i + ' = ' + obj[i] + '\n';
        } else {
            console.log("Empty object " + obj);
        }
        
    }
    return result;
}

for (var i in human){
    console.log(i + ":" + human[i]);
}


function listAllProperties(o) {
    var 
}











var obj = {
    name : "Wakidur",
    dob : new Date("1990-1-12")
}

Object.defineProperty(obj, 'age' , {
    get: function(){
        return (new Date().getFullYear() - this.dob.getFullYear());
    }
    
});


