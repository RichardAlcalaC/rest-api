/**
 * Created by Richard Alcala on 15/06/15.
 */

/**
 * calculate the number of words
 * @param pharagraph
 */
function numberWords(phara){
    words = phara.toString().split(' ');
    console.log("The words number is: " + words.length);
}

/**
 * calculate the basic operations
 */
function numberCalculator()
{
    //var array = arguments.split(',');
    var sum = SumTotal(arguments);
    console.log("The summatory is: " + SumTotal(arguments));
    console.log("The average is: " + (SumTotal(arguments)/arguments.length));
    console.log("The number of numbers is: " + arguments.length);
}

function SumTotal(argumentsData)
{
    var sum=0;
    for ( i = 0; i < argumentsData.length-1; i++ ) {
        sum += a[ i ];
    }
    return sum;
}

/**
 * Display the current date in a specific format
 */
function dateToday()
{
    console.log("The current day is: " + returnD());
    console.log("The current time is: " + returnT());
}

function returnT()
{
    var day = new Date();
    var cad;
    if (day.getHours() <= 12)
    {
        cad = "AM " + day.getHours();
    }
    else
    {
        cad = "PM " + day.getHours() - 12;
    }
    cad = cad + ":" + day.getMinutes() + ":" + day.getSeconds();

    return cad;
}

function returnD()
{
    var day = new Date();
    if (day.getDay() == 1)
    {
        return ("Monday");
    }
    if (day.getDay() == 2)
    {
        return ("Tuesday");
    }
    if (day.getDay() == 3)
    {
        return ("Wednesday");
    }
    if (day.getDay() == 4)
    {
        return ("Thrusday");
    }
    if (day.getDay() == 5)
    {
        return ("Friday");
    }
    if (day.getDay() == 6)
    {
        return ("Saturday");
    }
    if (day.getDay() == 7)
    {
        return ("Sunday");
    }
}

/***
 * validate a Date
 * @param customdate
 */
function formatDay(customdate)
{
    var reg = new RegExp(/^\d\d\d\d-\d\d-\d\d$/);
    console.log(reg.test(customdate));
}
