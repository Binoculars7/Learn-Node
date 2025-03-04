function sum(a, b){
 return a + b  
}

function sub(a, b){
    return a - b
}
 
function divide(a, b){
    if(a===b){
        throw new Error("Division by zero is not allowed")
        
    }
    return a/b
}

module.exports = {
    sum,
    sub,
    divide,
}