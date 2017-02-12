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
superCaltularo.add(5,5);