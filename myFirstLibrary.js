  

  window.loopThrough = function(array, callback){
    /* 

    1. loopThrough takes an array and a callback and invokes the callback on each value inside of the array.

    var print = function(val){
      console.log(val);
    };

    var truth = "Prep+ is the best".split(' ');
    
    loopThrough(truth, print)
      // Prep+
      // is
      // the
      // best

    */
  };  

  window.copyBy = function(array, callback){


    /*
    1. copyBy takes an array, and a callback, and returns a new array containing the result of the callback invoked on each value.

    2. Requirement: copyBy must utilize loopThrough to go through the array and perform the associated functionality.


    example:

    var nums = [1, 2, 3, 4, 5];
    var truth = ['I', "love", "functional", "programming"];
    
    var mult2 = function(val){
      return val * 2;
    };

    var upperCase = function(val){
      return val.toUpperCase()
    };
    copyBy(nums, mult2) --> [2, 4, 6, 8, 10];

    copyBy(truth, upperCase) ---> "I LOVE FUNCTIONAL PROGRAMMING";

  */

  };  

  window.filterBy = function(array, predicate){

  /*
    1. filterBy takes an array, and a predicate, and returns an array filled by with ONLY the values that pass the predicates truth test.


    2. Requirement: copyBy must utilize loopThrough to go through the array and perform the associated functionality.


  */
  };
  

  window.allPass = function(array, predicate){

    /*
    1. allPass takes an array and a predicate and returns true if every value in the array passes the truth test, and returns false if even one of the fails the predicate test.

    2. Requirement: allPass must utilize loopThrough to go through the array and perform the associated functionality.


    Example:

    var nums = [1, 2, 3, 4, 6];
    
    var isEven = function(val){
      return val % 2 === 0;
    };
    
    allPass(nums, isEven) --> false

    var evenArray = [2, 4, 6, 8, 10];

    allPass(evenArray, isEven) --> true;
    
  */

  };  

  window.somePass = function(array, callback){

    /*
    1. somePass takes an array, and a callback, and false is none of the values pass the predicate test.

    2. Requirement: somePass must utilize loopThrough to go through the array and perform the associated functionality.


    example:

    var nums = [1, 2, 3, 4, 5];
    
    var add = function(num1, num2){
      return num1 + num2;
    };
    
    reduceNums(nums, add) --> 15;

    var mult = function(num1, num2){
      return num1 * num2;
    };

    reduceNums(nums, mult) --> 120;

    */

  };
  

  window.reduceNums = function(array, callback){

  /*
    1. reduceNums takes an array, and a callback, and returns the sum of each value reduced by the callback function.

    2. Requirement: sumNums must utilize loopThrough to go through the array and perform the associated functionality.


    example:

    var nums = [1, 2, 3, 4, 5];
    
    var add = function(num1, num2){
      return num1 + num2;
    };
    
    reduceNums(nums, add) --> 15;

    var mult = function(num1, num2){
      return num1 * num2;
    };

    reduceNums(nums, mult) --> 120;

    */

  };



  // ===================================== Extra Credit ==================================================================


  /* ANONYMOUS FUNCTIONS:
  
  Anonymous functions aren't as helpful as named functions, but they are definitely used in the JavaScript wild. 

  If you haven't already, go through and refactor your loopThrough invocations to take anonymous functions rather than named functions.

  */


  /* EXPANDING LOOP THROUGH:

    Expand loopThrough to be able to take in an array OR an object.

    This should allow your other functions to do the same since they are built on top of loopThrough.

    Try this example below to see whether your implementation works:


    var obj {
      1: true,
      2: false,
      3: true,
      4: false,
    };

    var pureTruthy = function(val){
        if (typeof val === boolean & val === true){
            return true;
        } else {
            return false
        }
    };

    filter(obj, pureTruthy); --> [true, true];

  */



  /* EXPANDING REDUCENUMS:
  

    Turn reduceNums into extendedReduce. Extended reduce has an added 'start' parameter, and uses that value to collect the reduced values of each element in the input array.

    Example below:
    
    var alwaysBeCoding = ['I ', 'code ', 'all day ', 'every ', 'day'];
    var addToString = function(str1, str2){
      return str1 + str2;
    };

    extendedReduce(alwaysBeCoding, addToString, ''); --> 'I code all day ever day';

  */

