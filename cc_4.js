//Task 1: If Statements

let purchaseAmount = 120;

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.10; 
    purchaseAmount -= discount;
}

console.log(`Final amount after discount: $${purchaseAmount}`);


//Task 2: For Loop

let sales = [155, 65, 321, 110, 10];

let totalSales = 0;

for (let i = 0 < sales.length; i++) {
    totalSales += sales [i];
}

console.log(`Total sales: $${tatalSales}`);