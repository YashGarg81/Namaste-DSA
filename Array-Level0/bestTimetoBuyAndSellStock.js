/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

function maxProfit(prices) {
    let minPrice = prices[0]; // Store the minimum price
    let maxProfit = 0; // Store the maximum profit
   
    for (let i = 1; i < prices.length; i++) {
        // Calculate potential profit
        let potentialProfit = prices[i] - minPrice;
        
        // Update maxProfit if potentialProfit is higher
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
        
        // Update minPrice if current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }

    return maxProfit;
}

// Example usage
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5

// 📊 Time Complexity: O(n)
// Because the price array iterate only once.

// 🧠 Space Complexity: O(1)
// - The space complexity is O(1) because we only use a few extra variables (minPrice and maxProfit).
