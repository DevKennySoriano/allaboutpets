
document.getElementById("submit-btn").addEventListener("click", function() {
    var nameInput = document.getElementById("name-input-field").value;
    var ratingInputs = document.querySelectorAll('input[name="rating"]'); 
    var feedbackText = document.getElementById("feedback-text").value;
    var ratingChecked = false;

    
    ratingInputs.forEach(function(input){
        if (input.checked) {
            ratingChecked = true;
        }
    });
    
    if (nameInput.trim() === "") {
        alert("Please provide your name.");
        return;
    }

    if (!ratingChecked) {
        alert("Please select a rating.");
        return;
    }

    if (feedbackText.trim() === "") {
        alert("Please provide your feedback.");
        return;
    }else{
        alert("Thank you for your feedback!");
    }
});
