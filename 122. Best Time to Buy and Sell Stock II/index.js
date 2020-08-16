let prices = [6,1,3,2,4,7]

var maxProfit = function(prices) {
    let max = 0
    let buyPos = 0;
    let sellPos = 1;
    for(let i = 0; i < prices.length; i++){
        for(let j = 1; j < prices.length; j++){
            let buyPrice = prices[i];
            let sellPrice = prices[j];
            if(sellPrice > buyPrice && i < j){
                let currentMax = prices[j] - prices[i];
                buyPos = i;
                sellPos= j;
                // TODO: need consider more carefully
                if(buyPos < sellPos && sellPos < prices.length && buyPos < prices.length){
                    buyPos = sellPos + 1;
                    sellPos = buyPos + 1;
                    if(prices[sellPos] - prices[buyPos]){
                        currentMax = currentMax + (prices[sellPos] - prices[buyPos])
                    }
                }
                max = max > currentMax ? max : currentMax
            }
        }
    }
    return max
};

let result = maxProfit(prices)
console.log(result)