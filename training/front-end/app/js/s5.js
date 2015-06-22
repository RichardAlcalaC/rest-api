/**
 * Created by Richard Alcala on 20/06/15.
 */

/**
 * CalculatorOOP Constructor
 * @constructor
 */
var Calculator = function(){
    //init the memory property
    var memory = 0;
    this.getMemory = function(){
        return memory;
    };
    this.setMemory = function(newValue){
        memory = newValue;
        return memory;
    };

    /*** Comparison and stats operators ***/
    /**
     * Calculate and return the max number
     */
    this.maxNumber = function(){
        return Math.max.apply(null, arguments);
    };

    /**
     * Calculate and return the min number}
     */
    this.minNumber = function(){
        return Math.min.apply(null, arguments);
    };

    /**
     * Return the average
     */
    this.average = function(){
        console.log(sumLocal(arguments) + '/' + arguments.length);
        return sumLocal(arguments)/arguments.length;
    };

    /**
     * Return the sum
     */
    this.sum = function(){
        return sumLocal(arguments);
    };

    /**
     * Calculate the sum
     * @param data
     * @returns {number}
     */
    var sumLocal = function(data){
        var sumIntern=0;
        for(n in data){
            sumIntern+=data[n];
        }
        return sumIntern;
    };
    /*** End comparison and stats operators ***/
};

/*** Arithmetic operators ***/
/**
 * Add operator(s)
 * @param ope1 operator 1
 * @param ope2 operator 2
 */
Calculator.prototype.add = function(ope1, ope2){
    if (!ope2)
        return this.setMemory(this.getMemory()+ope1) ;
    this.setMemory(ope1+ope2);
    return this.getMemory();
};

/**
 * Subtract operator(s)
 * @param ope1 operator 1
 * @param ope2 operator 2
 */
Calculator.prototype.sustract = function(ope1, ope2){
    if (!ope2)
        return this.setMemory(this.getMemory()-ope1) ;
    this.setMemory(ope1-ope2);
    return this.getMemory();
};

/**
 * Multiply operator(s)
 * @param ope1 operator 1
 * @param ope2 operator 2
 */
Calculator.prototype.multiply = function(ope1, ope2){
    if (!ope2)
        return this.setMemory(this.getMemory()*ope1) ;
    this.setMemory(ope1*ope2);
    return this.getMemory();
};

/**
 * Divide operator(s)
 * @param ope1 operator 1
 * @param ope2 operator 2
 */
Calculator.prototype.divide = function(ope1, ope2){
    if (!ope2)
        return this.setMemory(this.getMemory()/ope1) ;
    this.setMemory(ope1/ope2);
    return this.getMemory();
};
/*** End Arithmetic operators ***/

// instance of CalculatorOOP object
var calculator = new Calculator();