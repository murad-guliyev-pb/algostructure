'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positiveItems = 0
    let negativeItems = 0
    let length = arr.length

    for(let i = 0; i < length; i++) {
        if(arr[i] > 0) positiveItems++
        if(arr[i] < 0) negativeItems++
    }
    console.log( (positiveItems/length).toFixed(6) )
    console.log( (negativeItems/length).toFixed(6) )
    console.log( ((length - positiveItems - negativeItems) / length).toFixed(6) )

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
