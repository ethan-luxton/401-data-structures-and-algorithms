function leftJoin(htOne, htTwo) {
    let output = []
    for (let key of htOne.keys()) {
        htTwo.has(key) ? 
            output.push([key, htOne.get(key), htTwo.get(key)])
            :
            output.push([key, htOne.get(key), null]);
    }
    return output
}

module.exports = leftJoin