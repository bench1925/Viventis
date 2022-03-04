import express = require('express')

/**
 For the LabelMaker problem, I added an initial guard clause to catch numbers that are less than or equal the alphabet length to optimize the function and prevent these numbers to continue with the complicated algorithm that comes afterwards.
 For the algorithm, firstly, I did get the quotient between the number given and the alphabet length.
 If the quotient is greater than the alphabet length, the program will append the last letter of the alphabet and the product of two alphabet lengths will be deducted to the number before it goes thru the next loop.
 Now, once the quotient is less than the alphabet length, the program will get the remainder to check the last letters of the label. In this part, the loop will be stopped.
 */

/**
 *  labelmaker
 *  @param {Number} num
 *  @returns {String} label
 */
function labelmaker (num = 0) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", alphabetLength = alphabet.length;

    if(num <= alphabetLength) {
        return num > 0 ? alphabet[num-1]: "";
    }

    let label = "", loopOver = true;

    do {
        let quotient = Math.floor(num/alphabetLength);
        if(quotient > alphabetLength) {
            label += alphabet[alphabetLength-1];
            num -= (alphabetLength * alphabetLength);
        }
        else {
            const remainder = Math.floor(num%alphabetLength);
            label += ((quotient > 0) ? alphabet[quotient-1] : "") + ((remainder > 0) ? alphabet[remainder-1] : "")
            loopOver = false;
        }
    } while (loopOver);

    return label;
}

module.exports = labelmaker;