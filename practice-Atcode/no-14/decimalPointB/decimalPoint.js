let checker = (D,A,B)=>{
    let sum = A+B;
    let sumPoint = sum.toFixed(D);
    console.log(sumPoint);
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin','utf8').trim();
let lines = input.split('\n');
let D = parseFloat(lines[0]);
let A = parseFloat(lines[1]);
let B = parseFloat(lines[2]);

checker(D,A,B);

