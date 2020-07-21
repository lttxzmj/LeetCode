var prices = [7,6,4,3,1]
var maxProfit = function(prices){
    let max = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = 1; j < prices.length; j++){
            let buy = prices[i]
            let sell =  prices[j]
            if(sell > buy && i < j){
                let tempMax = sell - buy
                max = tempMax > max ? tempMax : max
            }
        }
    }
    return max
}

let max = maxProfit(prices)
console.log(max)