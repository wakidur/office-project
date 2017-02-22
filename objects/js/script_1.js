(function(){
    
})();
var perosn = {
    name : ['Wakidur','Rahman'],
    age : 32,
    gender : 'male',
    interests: ['nusic', 'skiin'],
    obi: function(){
        console.log(this.name[0] + ' ' + this.name[1] + ' '+ this.age + 'your old, ' + this.interests[0]);
    },
    greeting: function(){
        console.log('Hi! I\'m ' + this.name[0] + ' . ');
    }
}

perosn.name.forEach(function(index,value){
    console.log(index + ":" + value);
});

//Wakidur:0
//Rahman:1

//-------------------
var perosn = {
    name : {
        first : 'Wakidur',
        last: 'Rahman'  
    },
    age : 32,
    gender : 'male',
    interests: ['Music', 'skiin'],
    obi: function(){
        console.log(this.name.first + ' ' + this.name.last + ' '+ this.age + 'your old, ' + this.interests[0]);
    },
    greeting: function(){
        console.log('Hi! I\'m ' + this.name.first + '  ' + this.name.last );
    }
};
perosn['eyes'] = 'hazel';
perosn.farewell = function(){
    console.log("Bye everybody!");
};


var person1 = {
    name: 'chris',
    greeting : function(){
        console.log('Hi! I\'m ' + this.name + '. ');
    }
};

var person2 = {
    name: "Brian",
    greeting : function() {
        console.log('Hi! I\'m ' + this.name + '. ');
    }
};


var obj = {
    name : "Wakidur",
    age : 12
}

function cloneFunc(object, objectName){
    var val = '';
    if(Object.hasOwnProperty(object)){
        for( var i in object){
            console.log( i +  " : " + object[i] );
        }
    }
}
var obj = {
    name : "Wakidur",
    age : 12,
    interests : ['Music', 'skiin']
}
function cloneFunc(object){
    var val = '';
    for(var i in object){
        if(object.hasOwnProperty(i)){
            console.log( i +  " : " + object[i] );
        }else{
            console.log("hello")
        }
    }
}
cloneFunc(obj);