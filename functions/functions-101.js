// Functions - input, code, output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return result
}
let num = 3;
let value = square(num)
square(num)
console.log(value)


// Challenge

// Convert Fahrenheit to Celsius

// Call a couple of times (32 -> 0) (68 -> 20)

//Print the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)

