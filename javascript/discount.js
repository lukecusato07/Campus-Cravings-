// function reloadPage() {
//     window.location.reload();
// }

// var pizzaSize, pizzaPrice, slices;

// pizzaSize = prompt("Enter size of pizza (diameter in inches)","12");
// pizzaPrice = prompt("Enter price of pizza as a decimal (no $ sign)","9.99");
// slices = prompt("How many slices would you like?","8");

// pizzaSize = parseInt(pizzaSize);
// pizzaPrice = parseFloat(pizzaPrice);
// slices = parseInt(slices);

// var radius = (pizzaSize / 2.0);
// var area = Math.PI * radius * radius;
// var pricePerSquareInch = (pizzaPrice / area).toFixed(2);
// var pricePerSlice = (pizzaPrice / slices).toFixed(2);

// document.write("<p class='result'>The price per square inch is: $" + pricePerSquareInch + "</p>");
// document.write("<p class='result'>The price per slice is: $" + pricePerSlice + "</p>");

document.addEventListener("DOMContentLoaded", function() {
    var discountButton = document.getElementById("discount_code");
    var messageDiv = document.getElementById("message3"); 

    discountButton.addEventListener('click', function() {
        var discountCode = prompt("Please enter your discount code:");


        if (discountCode) {
            messageDiv.textContent = `Your discount code ${discountCode} has been entered!`;
            messageDiv.style.display = "block";

            setTimeout(function() {
                messageDiv.style.display = "none";
            }, 5000);
        }
    });
});