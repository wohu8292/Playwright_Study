const minmax = (input)=>{
    if(input.length<2){
        return 0
    }

    let minPrice = Infinity
    let maxProfit = 0

    for (const price of input){
        minPrice = Math.min(minPrice, price)
        const profit = price-minPrice
        maxProfit = Math.max(maxProfit, profit)
    }

    return maxProfit
}

const input = [5, 11, 3, 50, 60 ,40]
console.log(minmax(input))