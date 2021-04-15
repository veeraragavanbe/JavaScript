// let name = "yamini";
// let msg = `i miss you ${name}`;
// console.log(msg);

let prop = 'name';
let age = '22';
let area = 'trichy';

let user = {
    [prop]: 'veera',
    [`user_${age}`]: `${area}`
};

console.log(user);