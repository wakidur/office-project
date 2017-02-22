(function(){
    function personFinished(first, last, age, gender, interests){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = function() {
            console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
            //return this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';
        };
        this.greeting = function(){
            console.log('Hi! I\'m ' + this.name.first + '.');
            //return 'Hi! I\'m ' + this.name.first + '.';
        }
    }
    
    var person1 = new personFinished('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
   
    
    
})(window)


//Object prototype
/*
(function(){
    console.log("Hello world!")
})()
*/

