
document.addEventListener("DOMContentLoaded", function() {
    const chocolates = {
        dark: { name: "Dark Chocolate", price: 2.50, count: 0 },
        milk: { name: "Milk Chocolate", price: 2.00, count: 0 },
        white: { name: "White Chocolate", price: 3.00, count: 0 }
    };

    const totalChocolates = document.getElementById("selected-count");
    const totalPrice = document.getElementById("price");

    const chocolateButtons = document.querySelectorAll(".add-chocolate");
    
    chocolateButtons.forEach(button => {
        button.addEventListener("click", function() {
            const type = this.dataset.type;
            const totalCount = getTotalCount(chocolates);
            if (totalCount < 8 && chocolates[type].count < 8) {
                chocolates[type].count++;
                totalChocolates.textContent = totalCount + 1;
                totalPrice.textContent = getTotalPrice(chocolates).toFixed(2);
            } else {
                alert("You've reached the maximum limit for chocolates!");
            }
        });
    });

    function getTotalCount(chocolates) {
        return Object.values(chocolates).reduce((acc, curr) => acc + curr.count, 0);
    }

    function getTotalPrice(chocolates) {
        return Object.values(chocolates).reduce((acc, curr) => acc + (curr.price * curr.count), 0);
    }

    document.getElementById("no-chocolate").addEventListener("click", function() {
        Object.values(chocolates).forEach(chocolate => {
            chocolate.count = 0;
        });
        totalChocolates.textContent = 0;
        totalPrice.textContent = 0.00;
    });
});


