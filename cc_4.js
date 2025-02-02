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


//Task 3: While Loop

let stock = 10;

while (stock > 0) {
    console.log(`Stock remaining ${stock}`);
    stock--;
}

console.log("Stock is depleted!");


//Task 4: Do...While Loop

let respones = 0;

do {
    console.log(`Collected response #${respones + 1}`);
    responses++;
} while (respones < 3);

console.log("Survey complete. Thank you for your responses!");


//Task 5: For...In Loop

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
};


//Task 6: For...Of Loop


let products = ["Laptop", "Mouse","Keyboard"];

for (let product of products) {
    console.log(`Product: ${product}`);
};


//"Task 7 - Order Processing."

let orders = [121, 123, 125];

orders.forEach(order => {
    console.log(`processing order ID: ${order}`);
});


//Task 8: Function Declaration


function calculateTax(amount, taxRate) {
    return amount * taxRate;
};

let totalAmount = 1000;
let taxRate = 0.08;

let tax = calculateTax(totalAmount, taxRate);
console.log(`The tax on $${totalAmount} at a rate of ${taxRate * 100}% is $${tax}`);