document.addEventListener("DOMContentLoaded", function() {
    var yesRadio = document.getElementById("yes");
    var noRadio = document.getElementById("no");
    var dietarySelect = document.getElementById("dietary_restrictions");
    var specifyDiv = document.getElementById("specify");
    var updateButton = document.getElementById("submit_profile");
    var messageDiv = document.getElementById("message");
    var form = document.querySelector("form[name='profile_form']");

    function toggleDietaryDisplay(show) {
        dietarySelect.style.display = show ? "block" : "none";
        specifyDiv.style.display = "none"; 
    }

    yesRadio.addEventListener("change", function() {
        if (yesRadio.checked) {
            toggleDietaryDisplay(true);
        }
    });

    noRadio.addEventListener("change", function() {
        if (noRadio.checked) {
            toggleDietaryDisplay(false);
        }
    });

    dietarySelect.addEventListener("change", function() {
        if (dietarySelect.value === "allergy" || dietarySelect.value === "other") {
            specifyDiv.style.display = "block";
        } else {
            specifyDiv.style.display = "none";
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();  
        messageDiv.textContent = "Your profile information has been updated!";  // Set the success message
        messageDiv.style.display = "block";  

        setTimeout(function() {
            messageDiv.style.display = "none";
        }, 5000);
    });

    toggleDietaryDisplay(yesRadio.checked);
});
