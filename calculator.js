
function add (num1,num2){
 return num1 + num2
}

function sub (num1,num2){
    return num1 - num2
   }

   function mult (num1,num2){
    return num1 * num2
   }

   function div (num1,num2){
    return num1 / num2
   }

function calc(num1,num2,cb) { 
    return cb(num1, num2)
}

console.log(calc(10,10000000000,div))