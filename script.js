function compute()
{   
    var principal = document.getElementById("principal").value;
    if (principal > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var amount = interest;
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%<\/mark\>\<br\>You will receive an amount of \<mark\>"+amount+",<\/mark\>\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>";
    }
    else
    {
        document.getElementById("result").innerHTML="<mark>Amount has to be at least 1 or more!<\/mark><br\>";
        document.getElementById("principal").focus();
    }

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}      