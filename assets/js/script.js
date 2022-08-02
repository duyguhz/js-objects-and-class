
class CustomMatch 
{
    constructor (num)
    {
        this.number = num;
    }
    plus = function (value)
    {
        this.number+= value;
        return this.number;
    }
    minus = function (value)
    {
        this.number-= value;
        return this.number;
    }
    multiply = function (value)
    {
        this.number*= value;
        return this.number;
    }
    divide = function (value)
    {
        this.number/= value;
        return this.number;
    }

}
var result = new CustomMatch(50);
result.plus(6);
console.log(result);
result.minus(30);
console.log(result);
result.multiply(3);
console.log(result);
result.divide(2);
console.log(result);


