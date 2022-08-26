const placementOnPages = (pageSize, totalCards) => {
    let [matrix, arr] = [[], []]
    for (let card = 0; card < totalCards.length; card++) {
        arr.push(totalCards[card - 1])
        if (card % pageSize === 0) {
            matrix.push(arr)
            arr = []
        }
    }
    if (arr !== []) {
        matrix.push(arr)
    }
    matrix.splice(0, 1)
    return matrix
}
export default placementOnPages
