let prices = [250, 645, 300, 900, 50];

let offerRate = 10;

for (let i = 0; i < prices.length; i++) {
    console.log(`The price before offer is ${prices[i]}`);
    let offer = (prices[i] * offerRate) / 100;
    prices[i] = prices[i] - offer;
    console.log(`The price after offer is ${prices[i]}`);
}

