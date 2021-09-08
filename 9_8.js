// Output is an object representing the most optimal
// way to represent that amount with standard U.S. cons.

function generateCoinChange(input) {
    var output = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0,
    }
    // we take the key from output and give it the value of input / 25 - rounded down Math.floor
    output['quarters'] = Math.floor(input/25)
    // we then set up a new variable called 'remaining' which equals to input modulus 25 - modulus takes input and divids it by 25 & remainder is what we put into remaining.
    var remaining = input % 25;

    output['dimes'] = Math.floor(remaining/10)
    remaining = remaining % 10;

    output['nickels'] = Math.floor(remaining/5)
    remaining = remaining % 5;

    output['pennies'] = remaining
    return output
    
}

console.log(generateCoinChange(96))
console.log(generateCoinChange(300))
console.log(generateCoinChange(152))
console.log(generateCoinChange(987))
console.log(generateCoinChange(10005))
console.log(generateCoinChange(25))