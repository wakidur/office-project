//The standard way to create an object prototype is to use an object constructor function
function Person(first, last, age , eyecolor){
    var $this =  this;
    $this.firstname = first;
    $this.lastname  = last;
    this.age = age;
    $this.eyeColor = eyecolor;
   
}
var myFather = new Person("John", "Doe", 50, "Blue");
myFather.name = function() {
    return $this.firstname + " " + $this.lastname;
}
//with a constructor function, your can use the naw keyword to create new objects from the same prototyp;
var myFther = new Person("John", "Doe" , 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "Green");
function personFun(first, last, age , eyecolor, myFunc){
    var $this =  this;
    $this.firstname = first;
    $this.lastname  = last;
    this.age = age;
    $this.eyeColor = eyecolor;
    $this.myFunc = function(){
        return $this.firstname + " " + $this.lastname;
    }
}


var o = {};
o.constructor === Object;

var o = new Object();
o.constructor === Object;

var a = [];
a.constructor === Array;

var a = new Arry;
a.construcor === Array;

var n 



var basecalcularo = function(){
    this.decimal = 5;
}
basecalcularo.prototype.add = function(x,y) {
    return x + y;
}



//--------------------
function calculate (x) {
    this.add = function add (y){
        return x + y;
    }
}

var cal = new calculate();

cal.add(6);

//--------------
function cal(){
  this.add = function(num1){
    return function(num2){
      return num1 + num2;
    }
  }
}

var cal=new cal();
var result = cal.add(1)(4);
alert(result);


function SuperCal(){
  var sum = 0; 
  this.add = function(){
    for (var i=0; i < arguments.length; i++){
      sum+= arguments[i]
    }
    return sum;
  }
}


SuperCal.prototype=cal;
var superCal=new SuperCal();
var superResult = superCal.add(4,8,3);
alert(superResult);

//--

var add = function() {
    // the function was called with 2 argument
    if(arguments.length > 1) {
        arguments.callee.first_argument = arguments[0];
    }
    if(arguments.callee.first_argument){
        var result = arguments.callee.first_argument + arguments[arguments.length -1];
        arguments.callee.first_argument = 0;
        return result;
    } else {
        arguments.callee.first_argument = arguments.callee.first_argument || arguments[0];
        return arguments.callee;
    }
}

console.log(add(2,4));
console.log(add(2)(4));


function add() {
    add.toString = function(){
        var answer = 0;
        for(i = 0; i < add.params.length ; i++)
            answer += add.params[i];
        return answer;
    };
    add.params = add.params || [];
    for( var i = 0; i < arguments.length; i++)
        add.params.push(arguments[i]);
    return add;
}


console.log(add(2)(4)(6)(8))
console.log(add(2, 4, 6, 8));




//var add = function(){
//  // the function was called with 2 arguments
//  if(arguments.length > 1)
//    arguments.callee.first_argument = arguments[0];
//
//  // if the first argument was initialized
//  if(arguments.callee.first_argument){
//    var result = arguments.callee.first_argument + arguments[arguments.length - 1];
//    arguments.callee.first_argument = 0;
//
//    return result;
//  }else{// if the function was called with one argument only then we need to memorize it and return the same function handler 
//    arguments.callee.first_argument = arguments.callee.first_argument || arguments[0];
//    return arguments.callee;
//  }
//}
//console.log(add(2)(4));
//console.log(add(2, 4));

function calculator(){
    this.add = function(a,b){
        return a + b;
    }    
}
//var mycal =  new calculator();

function superCaltularo () {
    
}
superCaltularo.prototype = new calculator();

superCaltularo.prototype.add = function(){
    
}
superCaltularo.add(5,5);





//------------
//First-class functions and closures do the job.
function add(x) {
    return function(y) {
        return x + y;
    }
}

function add(x){
    return function(y) {
        if(typeof y !== 'undefined'){
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
add(1)(2)(3)(); //6
add(1)(1)(1)(1)(1)(1)(); //6

//try this will help you in two ways add(2)(3) and add(2,3)

function add(a) {
    return function(b){
        return a + b;
    }
}
add(2)(3);

function add(a,b){
    var ddd = function(b) {
        return a + b;
    };
    if(typeof b == 'undefined'){
        return ddd;
    } else {
        return add(b);
    }
}
add(2)(3) // 5
add(2,3) // 5

//----------------------------------


function SimpleCalculator() { //Class
    this.name = 'SimpleCalculator' //
}

SimpleCalculator.prototype.add = function (a, b) {
    return a + b;
};

function SuperCalculator() { //Class
    this.name = 'SuperCalculator'
}

SuperCalculator.prototype = new SimpleCalculator(); // inheritance

SuperCalculator.prototype.add = function (a) {
    if (arguments.length == 1) {
        return function (b) {
//console.log('b',b);
            if (typeof b !== 'undefined') {
                a += b;
                return arguments.callee;
                //return two;
            } else {
                return a;
            }
        }
    } else {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
};

//inhering SimpleCalculator
var newOutput = new SuperCalculator(); //creating new SuperCalculator Instance
console.log(newOutput.add(17, 3, 1));
console.log(newOutput.add(17)(3)(1)())
//================================

function problem(a,b){
    this.a = a;
    this.b = b;
    this.add = function(){
        return this.a + this.b;
    };  
}
//var problem1 = new problem(4,2);

function superCal(){
    this.name = "kdjf";
}
superCal.prototype = new problem();
superCal.prototype.add = function(a){
    if (arguments.length == 1) {
        return function (b) {
            if (typeof b !== 'undefined') {
                a += b;
                return arguments.callee;
            } else {
                return a;
            }
        }
    } else {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
};
var newOutput = new superCal(); //creating new SuperCalculator Instance
console.log(newOutput.add(17, 3, 1));
console.log(newOutput.add(17)(3)(1)())

//--------------------------------------
function problem(a,b){
    this.a = a;
    this.b = b;
    this.add = function(){
        return this.a + this.b;
    };  
}
//var problem1 = new problem(4,2);

function superCal(){
    this.name = "kdjf";
}
superCal.prototype = new problem();
superCal.prototype.add = function(a){
    if (arguments.length == 1) {
        console.log(arguments.length);
        return function (b) {
            if (typeof b !== 'undefined') {
                a += b;
                return arguments.callee;
            } else {
                return a;
            }
        }
    } else {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
};
var newOutput = new superCal(); //creating new SuperCalculator Instance
console.log(newOutput.add(17, 3, 1));
console.log(newOutput.add(17)(3)(1)())