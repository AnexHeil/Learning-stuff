function printReverse(arr){
    for (var i = arr.length; i >= 0; i--)
    {
        console.log(arr[i]);
    }
}
var arr = [1, 2, 3];
printReverse(arr);
function isUniform(arr){
    var first = arr[0];
    for (var i = 1; i < arr.length; i++)
    {
        if (a[i] !== first)
            return false;
    }
    return true;
}
var newarr = [3, 3, 4, 3, 3];
console.log(isUniform(newarr));
function summArray(arr){
    var summ = 0;
    for (var i = 0; i < arr.length; i++){
        summ+=arr[i];
    }
    return summ;
}
var arrSumm = [1, 2, 3, 4, 5];
console.log(summArray(arrSumm));
function maxArray(arr){
    var max  = arr[0];
    for (var i = 1; i < arr.length; i++){
       if (arr[i] > max)
       {
           max = arr[i];
       }
    }
    return max;
}
var max = [1, 2, 3, 4, 5];
console.log(maxArray(max));