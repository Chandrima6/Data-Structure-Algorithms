////////////////////////////////////
// constructor design pattern
// same can be implmented using class
function constructorFn(name, age) {
    this.name = name;
    this.age = age;
}
constructorFn.prototype.speak = function() {
    this.speak = true;
}

myObject = new constructorFn('chan', 30);
console.log('constructor design pattern', myObject);
myObject.speak()
console.log('constructor design pattern', myObject);

////////////////////////////////////
// module design pattern
// singleton module as it run once since IIFE is used
var singletonModule = (function(){
    var publicApi = {
        bar: function() {
            publicApi.baz();
        },
        baz: function() {
            console.log('singleton module design pattern', 'bar')
        }
    }
    return publicApi;
})();

singletonModule.bar();

////////////////////////////////////
// revealing module design pattern
var revealingModule = (function(){
    var bar = function() {
        baz();
    }
    var baz = function() {
        console.log('revealing module design pattern', 'bar')
    }
    return {
        bar: bar,
        baz: baz
    }
})();

revealingModule.bar();


////////////////////////////////////
// singleton design pattern

var singleton = (function(){
    var instance;
    function init() {
        var bar = function() {
            baz();
        }
        var baz = function() {
            console.log('singleton design pattern', 'bar')
        }
        return {
            bar: bar,
            baz: baz
        }
    }

    function getInstance() {
        if (!instance) {
            console.log('No instance');
            instance = init()
        }
        return instance;
    }
    return getInstance;
})();
var instance1 = singleton();
var instance2 = singleton();
console.log(instance1 === instance2);
instance1.bar()
instance2.bar()

////////////////////////////////////
// prototypal design pattern
// implmented with prototypal inheritance(Object.create) 
// ability to look up in prototypal chain not realling inheriting properties
var prototypalObject = {
    name: 'foo',
    bar: function() {
        this.baz();
    },
    baz: function() {
        console.log('prototypal design pattern', 'bar')
    }
}

myPrototypalObject = Object.create(prototypalObject);
myPrototypalObject.bar();
// disadvantage is methods bar and baz are copied to all objects created
////////////////////////////////////
// observer design pattern

////////////////////////////////////
// factory design pattern
// same as singleton module pattern but can be called multiple times.
var factory = function() {
    var publicApi = {
        bar: function() {
            publicApi.baz()
        },
        baz:  function() {
            console.log('factory design pattern', 'bar')
        }
    }
    return publicApi;
}
myFactory = factory()
myFactory.bar();
myFactory.bar();
////////////////////////////////////

