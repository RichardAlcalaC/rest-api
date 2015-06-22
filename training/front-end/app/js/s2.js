/**
 * Created by Richard Alcala on 15/06/15.
 */

/**
 * calculate all the operations
  */
var calculatorAll = function(){
    console.log('NUMBERS:' , arguments);
    console.log('SUM: ' , sum(arguments));
    console.log('AVG: ' , average(arguments));
    console.log('MAX: ' , maxNumber(arguments));
    console.log('MIN: ' , minNumber(arguments));
};

/**
 * Calculate the sum
 * @param numbers
 * @param pos
 * @returns {*}
 */
var sum = function(numbers, pos){
    if (!pos)
        pos = 0;
    if (pos == numbers.length - 1)
        return numbers[pos];
    return numbers[pos] + sum(numbers, pos + 1);
};

/**
 * calculate the average
 * @param numbers
 * @returns {number}
 */
var average = function(numbers){
    return sum(numbers)/numbers.length;
};

/**
 * calculate the max number
 * @param numbers
 */
var maxNumber = function(numbers){
    return Math.max.apply(null, numbers);
};

/**
 * calculate the min number
 * @param numbers
 */
var minNumber = function(numbers){
    return Math.min.apply(null, numbers);
};