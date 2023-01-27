// types of variable
var price=120;
// console.log(typeof price);

var price='420';
// console.log(typeof price);

var status=true;
// console.log(typeof status);

var dead;
// console.log(typeof dead);

// problem
var num1=0.1;
var num2=0.2;
var sum=num1+num2;
// console.log(sum);

// problem solved
var num1=0.1;
var num2=0.2;
var sum=num1+num2;
sum=sum.toFixed(2);
sum=parseFloat(sum);
console.log(sum);
