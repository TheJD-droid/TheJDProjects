//Where the magic happens bay-bee!
function probabilityOfOutcome(numBalloons, popped) {
    // Handle edge case for zero or negative number of balloons
    if (numBalloons <= 0) {
        return 0;
    }

    // Handle edge case for negative number of popped balloons
    if (popped < 0) {
        return 0;
    }

    // Handle edge case for popped greater than number of balloons
    if (popped > numBalloons) {
        return 0;
    }

    //Numerator and denominator of formula that is used to calculate the probability
    let numerator = 1;
    let denominator = 2;
    for (let i = numBalloons; i > numBalloons - popped; i--) {
        numerator = numerator * i;
    }
    let twoNumBalloons = 2*numBalloons
    for (let i = twoNumBalloons; i > twoNumBalloons - popped; i--) {
        denominator = denominator * (i-1)
    }
    
    //Find probability, multiply by 100 to make it a percentage
    let result = (numerator / denominator) * 100
    
    //Controlling level of precision to display
    if (result % 1 === 0) {
        //Already precise enough, no need to truncate
    }
    else if ((25 < result) && (result < 50)) {
        result = result.toPrecision(4)
    }
    else if ((result > 3) && (result < 30)) {
        result = result.toPrecision(6)
    }
    else if (result < 3) {
        result = result.toPrecision(8)
    }
    else {
        result = result.toPrecision(2)
    }

return result;
}



export default probabilityOfOutcome;
// module.exports = probabilityOfOutcome;