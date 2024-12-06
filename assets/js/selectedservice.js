document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("selected-service-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        var formData = new FormData(form);
        var phone = formData.get("phone-input-field");
        var loanAmount = parseFloat(formData.get("loan-amount-input-field"));
        var interestRate = parseFloat(formData.get("interest-rate-input-field"));
        var loanTenure = parseInt(formData.get("loan-tenure-input-field"));

        //Console.log to check if the values are being captured
        console.log(phone);
        console.log(loanAmount);
        console.log(interestRate);
        console.log(loanTenure);


        // Basic validation to check if the fields are filled and contain valid numbers
        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
            alert("Please enter valid values for all fields.");
            return;
        }

        // Monthly interest rate (convert annual rate to monthly and from percentage to decimal)
        var monthlyInterestRate = (interestRate / 100) / 12;

        // Number of payments (in months)
        var numberOfPayments = loanTenure * 12;

        // Calculate the monthly payment using the formula for an annuity
        var monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        // Display the result to the user
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>`;
    });
});
