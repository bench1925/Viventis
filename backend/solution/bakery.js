const table = require("./bakeryTable");

/**
 * bakery
 * @param {String} orderLine
 * @returns
 */
function bakery (orderLine = "") {
    if(orderLine === "") return 0;

    const [qty = "", code = "" ] = orderLine.split(" ");
    const item = getItem(code);
    const itemPackQtys = item.packs.map((packItem) => { return packItem.qty; });
    const itemPackPriceObject = generatePriceObject(item.packs);
    const combinations = generateCombinations(qty, itemPackQtys);
    const minCombination = getMinimalCombination(combinations);
    const minCombinationPrice = computePriceCombination(minCombination, itemPackPriceObject);
    return { combination: minCombination, price: Number(minCombinationPrice.toFixed(2)) } ;
}

/**
 * getItem
 * @param {String} itemCode
 * @returns
 */
function getItem (itemCode = "") {
    const item = table.filter(tableItem => tableItem.code === itemCode);
    return item.length > 0 ? item[0] : {};
}

/**
 * sortDesc
 * @param {Array} qtys
 * @returns
 */
function sortDesc (qtys = []) {
    return qtys.sort((a, b) => {
        if(a < b) return 1;
        else if(a > b) return -1;
        else return 0;
    });
}

/**
 *
 * @param {Array} itemPacks
 * @returns
 */
function generatePriceObject (itemPacks = []) {
    const priceObject = {};
    for(let i=0; i<itemPacks.length; i++) {
        priceObject[itemPacks[i].qty] = itemPacks[i].price;
    }
    return priceObject;
}

/**
 * generateCombinations
 * @param {Number} qty
 * @param {Array} qtys
 * @returns
 */
function generateCombinations(qty = 0, qtys = []) {
    let possibleCombinations = [];

    const qtyArr = sortDesc(qtys);

    for(var i=0; i<qtyArr.length; i++) {
        const k = generateCombinationFromSequence(qty, qtyArr.slice(i));
        possibleCombinations.push(k)
    }

    return possibleCombinations;
}

/**
 * generateCombinationFromSequence
 * @param {Number} qty
 * @param {Array} subArray
 * @returns
 */
function generateCombinationFromSequence (qty, subArray) {
    const combination = [];
    let currentQty = 0, index = 0;
    do {
        currentQty += subArray[index];
        combination.push(subArray[index]);

        if(((qty-currentQty) < subArray[index]) && index < subArray.length -1) {
            index++;
        }
    } while (currentQty < qty);
    return combination;
}

/**
 *
 * @param {Array} combination
 * @param {Object} packObject
 */
function computePriceCombination (combination = [], itemPackPriceObject = {}) {
    let totalPrice = 0;
    for(var i=0; i<combination.length; i++) {
        totalPrice += itemPackPriceObject[combination[i]];
    }
    return totalPrice;
}

/**
 *
 * @param {Array} combinations
 * @returns
 */
function getMinimalCombination (combinations = []) {
    let minCombination = [], minCombinationCounter = 0;

    for(let i=0; i<combinations.length; i++) {
        let j =  combinations[i].reduce((a, b) => a+b, 0);
        if(j< minCombinationCounter || minCombinationCounter === 0) {
            minCombinationCounter = j;
            minCombination = combinations[i];
        }
    }

    return minCombination;
}

module.exports = bakery;