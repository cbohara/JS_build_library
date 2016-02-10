     /* 
    1. loopThrough takes an array and a callback and invokes the callback on each value inside of the array.
    var print = function(val){
      console.log(val);
    };
    var truth = "Prep+ is the best".split(' ');
    */
//loopThrough takes an array and a callback and invokes the callback on each value inside of the array
window.loopThrough = function(array, callback){
  for(var i = 0; i < array.length; i++){
      callback(array[i]);
  }
};  
// loopThrough(truth, print);

    /*
    1. copyBy takes an array, and a callback, and returns a new array containing the result of the callback invoked on each value.
    2. Requirement: copyBy must utilize loopThrough to go through the array and perform the associated functionality.
    example:
    */
   /*var nums = [1, 2, 3, 4, 5];
    var mult2 = function(val){
      return val * 2;
    };
    */
    /*
    var truth = ['I', "love", "functional", "programming"];
    var upperCase = function(val){
      return val.toUpperCase()
    };
    */
// copyBy takes an array, and a callback, and returns a new array containing the result of the callback invoked on each value
window.copyBy = function(array, callback){
  // new array to be returned
  var result = [];
  // utilize loopThrough function and push new values into the results array
  loopThrough(array,function(val) {result.push(callback(val));} );
  return result;
}; 

// copyBy(nums, mult2);
// copyBy(truth, upperCase);

    /*
    var nums = [1, 2, 3, 4, 6];
    
    var isEven = function(val){
      if(val % 2 === 0){
        return true;
      }
      else{
        return false;
      }
    };
    */
// filterBy takes an array, and a predicate, and returns an array filled by with ONLY the values that pass the predicates truth test
window.filterBy = function(array, predicate){
  // new array to be returned
  var result = [];
  // utilize loopThrough function and push values that pass the predicate test into the results array
  loopThrough(array, function(val) {result.push(predicate(val));});
  return result;
};

// filterBy(nums,isEven);

/*
var nums = [1, 2, 3, 4, 6];

var evenArray = [2, 4, 6, 8, 10];
    
var isEven = function(val){
  return val % 2 === 0;
};
*/

// allPass takes an array and a predicate and returns true if every value in the array passes the predicate test. returns false if any value in array fails the predicate test. 

var filterFalse = function(val){      
  return val === false;
};

window.allPass = function(array, predicate){
  // create array to hold result values
  var predicateResult = [];
  // loop though the array and push the boolean value result of the predicate test into the result array
  loopThrough(array, function(val){predicateResult.push(predicate(val));});
  // filter through predicateResult array to return a new array of false values, if they exist 
  var filterForFalseArray = predicateResult.filter(filterFalse);
  // if filterForFalseArray contains any values, then the predicate returned false for at least one value in the original array. therefore return false. otherwise return true.
  if(filterForFalseArray.length > 0){
    return false;
  }
  else{
    return true;
  }
};

// allPass(nums, isEven);
// allPass(evenArray, isEven);

/*
var nums = [1, 2, 3, 4, 6];

var evenArray = [2, 4, 6, 8, 10];

var oddArray = [1, 3, 5, 7];
  
var isEven = function(val){
  return val % 2 === 0;
};
*/
var filterTrue = function(val){      
  return val === true;
};
// somePass takes an array, and a predicate, and returns false if none of the values pass the predicate test
window.somePass = function(array, predicate){
  // create array to hold result values
  var predicateResult = [];
  // loop though the array and push the boolean value result of the predicate test into the result array
  loopThrough(array, function(val){predicateResult.push(predicate(val));});
  // filter through predicateResult array to return a new array of true values, if they exist 
  var filterForTrueArray = predicateResult.filter(filterTrue);
  // if filterForTrueArray contains no values, then return false. otherwise return true.
  if(filterForTrueArray.length === 0){
    return false;
  }
  else{
    return true;
  }
};

// var testMix = somePass(nums, isEven);
// console.log('testMix',testMix);
// var testEven = somePass(evenArray, isEven);
// console.log('testEven',testEven);
// var testOdd = somePass(oddArray, isEven);
// console.log('testOdd',testOdd);














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

