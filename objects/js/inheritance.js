(function(){
    function Person(first, last, age, gender, interests){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.greetin = function(){
            
        }
    };
    
//    The methods are all defined on the constructor's prototype,
    Person.prototype.greetin = function(){
        console.log('Hi! I\'m' + this.name.first + '.');
    }
    
//    Defining a Teacher() constructor function
    function Teacher(first,last, age, gender, interests, subject){
        Person.call(this, first, last, age, gender, interests);
        // we are using simply this as the value of this passed to call(), 
        // meanning that this will be the Teacher() function
        this.subject = subject;
    }
    
    function Teacher(first, last, age, gender, interests, subject){
        this.name = {
            first, 
            last
        };
        this.age = age;
        this.gender = gender;
        this.intersts = interests;
        this.subject = subject;
    };
    /*but this is just redefining the properties anew, not inheriting 
    them from person(), so it defeats the point of what we are trying to do.
    it also take mor lines of code.*/
    
//    Setting Teacher() protoype and constructor reference;
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    var prefix;
    if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
      prefix = 'Mr.';  
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender == 'F'){
        prefix = 'Mrs.';
    } else {
        prefix = 'Mx.';
    }
    console.log('Hello. My name is ' + prefix + this.name.last+ '; and I teach' + this.subject + '.');
}

})();


