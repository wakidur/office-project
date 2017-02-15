(function(){
    var person = {
        name : ['Bom','Smith'],
        age : 32,
        gender: 'Male',
        interests : ['Music', 'Skiing'],
        bio: function(){
            console.log(this.name[2] + " " + this.name[1])
        },
        greetion: function(){
            console.log('Hi I\'m' + this.name[0]);
        }
    }
    var personObj = {
        name : {
            first: 'Bom',
            last: 'Smith'
        },
        age : 32,
        gender: 'Male',
        interests : ['Music', 'Skiing'],
        bio: function(){
            console.log(this.name[2] + " " + this.name[1])
        },
        greetion: function(){
            console.log('Hi I\'m' + this.name[0]);
        }
    }
    
    function createNewPerson(name){
        var obj = {};
        obj.name = name;
        obj.greeting = function() {
            console.log('Hi I\'m ' + this.name + '.');
        };
        return obj;
    }
    
    var salva = createNewPerson('Salva');
    salva.name;
    salva.greeting();
    
    function Person(name){
        var $this = this;
            this.name = name;
            this.greeting = function(){
                console.log('Hi I\'m ' + this.name + '.');
                return 'Hi I\'m ' + this.name + '.';
            };
    }
    var person1 = new Person('Bob');
    var person2 = new Person('Sarah');
    debugger;
    person1.name;
    person1.greeting()
    person2.name;
    person2.greeting();
    
    /*after the new objects have been created, the person1
    and person2 variables contain the following object
      
    {
        name: 'Bob',
        greeting: function () {
            alert('Hi! I\'m ' + this.name + '.');
        }
    }

    {
        name: 'Sarah',
        greeting: function () {
            alert('Hi! I\'m ' + this.name + '.');
        }
    }
    */
   
    function personFinished(first, last, age, gender,interests){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = function() {
            console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
            return this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';
        };
        this.greeting = function(){
            console.log('Hi! I\'m ' + this.name.first + '.');
            return 'Hi! I\'m ' + this.name.first + '.';
        }
    }
    
    var person1 = new personFinished('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
    var person2 = new personFinished('Wakidur', 'Rahman', 27, 'male', ['music', 'skiing']);
    person1['age']
    person1.interests[1]
    person1.bio();
    
    person2['age']
    person2.interests[1]
    person2.bio();
    debugger;
    /*
    for(var key in person1){
        if(person1.hasOwnProperty(key)){
            console.log(key + "->" + person1[key]);
       }
    }*/
//    The Object constructor
    var person1 = new Object();
    person1.name = 'Chris';
    person1['age'] = 36,
    person1.greeting  = function(){
        console.log('Hi! I\'m ' + this.name + '.');
    }
    
    var person1 = new Object({
        name : 'Chris',
        age : 36,
        greeting : function() {
            console.log('Hi! I\'m ' + this.name + '.');
        }
    });
    
    var person2 = Object.create(person1);
    person2.name;
    person2.greeting();
    
    
})()


/*
 * 
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


showProps(human,"wakd");
for (var i in human){
    console.log(i + ":" + human[i]);
}


function listAllProperties(o) {
    var a = "";
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


*/