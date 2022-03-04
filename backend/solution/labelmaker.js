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