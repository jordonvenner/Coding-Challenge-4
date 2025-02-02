//Task 1: If Statements

let purchaseAmount = 120;

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.10; 
    purchaseAmount -= discount;
}

console.log(`Final amount after discount: $${purchaseAmount}`);