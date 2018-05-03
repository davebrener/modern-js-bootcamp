let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
    console.log('is account locked');
} else if (userRole === 'admin') {
    console.log('Welcome, Admin');
} else {
    console.log('Welcome');
} 



// Challenge

let temp = 4;

if (temp<=32) {
    console.log('It is freezing outside!');
} else if (temp >= 110) {
    console.log('It hot outside');
} else {
    console.log('Go for it. It is pretty nice out.');
}