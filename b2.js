let sum = 0;

function bur() {
    let b = document.getElementById("burger").value;
    sum += parseInt(b) || 0; 
    console.log(sum);
}

function sauce() {
    let b = document.getElementById("Sauce").value;
    sum += parseInt(b) || 0;
    console.log(sum);
}

function coffees() {
    let b = document.getElementById("Coffees").value;
    sum += parseInt(b) || 0;
    console.log(sum);
}

function calculateDiscount() {
    let discount = 0;
    if (sum > 700) {
        discount = 0.6 * sum;
    } else if (sum >= 250) {
        discount = 0.5 * sum;
    }
    return discount;
}

function total() {
    let discount = calculateDiscount();
    let disamount = sum - discount;
    alert(`Your total is: ${sum}\nAfter discount: ${disamount.toFixed(2)}`);
    document.getElementById("disamount").innerText = discount.toFixed(2);
    return disamount;
}

function printbill() {
    let Name = document.getElementById("Name").value;
    let Phone = document.getElementById("Phone no.").value;
    let discount = calculateDiscount();
    let disamount = sum - discount;

    let billcontent = `
        <h2>Bill</h2>
        <pre>Name: ${Name}
        Phone no: ${Phone}
        Total: ${sum}
        After discount: ${disamount.toFixed(2)}</pre>
    `;
    
}

function show()
{
    window.print();
}

document.getElementById("pr").addEventListener("click", () => {
    total(); 
    printbill();
    show();
});