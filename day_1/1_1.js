// Import File reading system
const fs = require('fs');
var total = 0;

// Make quick function to get File and split its text into an array
const fileInput = filename =>
    fs.readFileSync(filename)
    .toString('UTF-8')
    .split('\n');

// Add it to array
let array = fileInput('day1Input.txt');

// Find left number
const findLeft = (input) => {
    for(let i = 0; i < input.length; i++){
        if(parseInt(input[i])){
            return input[i]
        } 
    }
};

// Find right number
const findRight = (input, location) => {
    for(let i = input.length - 1; i >= location; i--){
        if(parseInt(input[i])){
            return input[i]
        } 
    }
};

// Get numbers from array and add to total
const getNumber = () => {
    let i = 0;
    while(i < array.length){
        let letters = array[i].split('');
        let leftNumber = findLeft(letters);
        let rightNumber = findRight(letters, letters.indexOf(leftNumber));
        total += parseInt(leftNumber + rightNumber)
        i++
    }
};

getNumber();
console.log(total);

