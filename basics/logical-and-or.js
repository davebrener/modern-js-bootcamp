let temp = 55;

// Logical && Operator - True if both sides are true, False otherwise
// Logical Or Operator - True if at least one side is true, False otherwise
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!')
} else if (temp <= 0 || temp >= 120) {
    console.log('It is dangerous outside.')
} else {
    console.log('Do what you want.')
}

// Challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here are our vegan dishes')
} else if (isGuestOneVegan || isGuesTwoVegan) {
    console.log('Here are some vegan and non-vegan options.')
} else {
    console.log('Here is everything else on the menu!')
}


