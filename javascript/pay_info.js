// document.addEventListener("DOMContentLoaded", function(event) {
//     var updateButton = document.getElementById("submit_payment");
//     var messageDiv = document.getElementById("message2");


//     form.addEventListener("submit", function(event) {
//         event.preventDefault();  
//         messageDiv.textContent = "Your payment information has been updated!";  // Set the success message
//         messageDiv.style.display = "block";  // Show the message
    
//         setTimeout(function() {
//             messageDiv.style.display = "none";
//         }, 5000);    
//     });

// });


document.addEventListener("DOMContentLoaded", function(event) {
    var form = document.querySelector('form');  // Assign the form variable by selecting the form element
    var messageDiv = document.getElementById("message2");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  
        messageDiv.textContent = "Your payment information has been updated!";  // Set the success message
        messageDiv.style.display = "block";  // Show the message
    
        setTimeout(function() {
            messageDiv.style.display = "none";
        }, 5000);    
    });
});
