// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    //Convert n(integer) into a string, split the string into an array, reverse the
    // array characters, join it back into a string and then parse the string back into
    // a number. multiply it by its positive or negative self by using Math.sign

    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed) * Math.sign(n)

}

module.exports = reverseInt;
