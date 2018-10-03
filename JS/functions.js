function isEven (num){
    if(num % 2 === 0)
    {
        return true;
    }
    return false;
}
function factorial(num){
    var result = 1;
    for (var i = 1; i <= num; i++)
    {
        result *= i;
    }
    return result;
}
function toLower(str){
    str.replace(/-/g, "_");
    return str;
}
var todos = ["Buy new turtle"];