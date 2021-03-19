function compute()
{
    /*This function is used to calculate the Simple Interest with the 
    given values. Initially all the values are fetched from the Html elements
    and stored in the local variables. */
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Simple Interest is calculated
    var interest = principal*years*rate/100;

    // Current local time and date is saved in this variable
    var currentdate = new Date();
    
    // Future year is calculated from the current time and date.
    var futureYear = currentdate.getFullYear()+parseInt(years);

    // Validation for Principal Amount field is done here.
    if(principal <= 0){
        alert("Please Enter a Positive Value!");
        document.getElementById("principal").focus();
        return;
    }

    // The result of the Simple Interest calculation is added to the span element with its id
    document.getElementById("result").innerHTML = "<br>If you deposit <mark>"+principal+"</mark>,<br>"
                                                +"at an interest rate of <mark>"+rate+"%</mark>.<br>"
                                                +"You will receive an amount of <mark>"+interest+"</mark>,<br>"
                                                +"in the year <mark>"+futureYear+"</mark>.";
    
}

function dispRate()
{
    //This function is used to display the interest range value selected dynamically.
    var rate = document.getElementById("rate").value;
    document.getElementById("rateDisplay").innerHTML = rate+"%";
}
        