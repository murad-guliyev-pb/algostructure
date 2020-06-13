'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here

    //find max element in a array
    var aMaxElement = 0;
    for(let i = 0; i< a.length; i++) {
        if(a[i] > aMaxElement) {
            aMaxElement = a[i]
        }
    }

    //find min element in b array
    var bMinElement = 100;
    for(let i = 0; i< b.length; i++) {
        if(b[i] < bMinElement) {
            bMinElement = b[i]
        }
    }

    var arr = [];
    var i = 2;
    var step = 1;
    var result = 0;

    // parse max element on items and save them into arr
    while(i <= aMaxElement) {
        if(aMaxElement % i === 0) {
            arr.push(i)
            aMaxElement /= i
        } else {
            i++
        }
    }

    for(let i = 0; i < a.length; i++) {
        let j = 2;
        let currentElement = a[i]
        while(j <= currentElement) {
            if(currentElement % j === 0) {
                if(arr.indexOf(j) === -1) {
                    arr.push(j)
                }
                currentElement /= j
            } else {
                j++
            }
        }
    }

    for(let i = 0; i< arr.length; i++) {
        step *= arr[i]
    }

    for(let i = 0; i <= bMinElement; i += step) {
        for(let j = 0; j < b.length; j++) {
            if(b[j] % i !== 0) {
                break;
            }
            if(j === b.length - 1) result++
        }
    }

    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
