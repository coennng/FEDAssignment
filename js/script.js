document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "admin" && password === "password123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; 
            } else {
                const errorMessage = document.getElementById("error-message");
                errorMessage.style.display = "block";
            }
        });
    }

  
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const emailInput = document.getElementById("email").value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailInput)) {
                alert("Please enter a valid email address.");
                return; 
            }

            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";

        
            feedbackForm.reset();
        });
    }


    const bookingForm = document.getElementById("online-lesson-form");
    const confirmationMessage = document.getElementById("lesson-confirmation");
    const bookingDate = document.getElementById("booking-date");
    const bookingTime = document.getElementById("booking-time");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

        
            const selectedDate = document.getElementById("lesson-date").value;
            const selectedTime = document.getElementById("lesson-time").value;

            if (selectedDate && selectedTime) {
               
                bookingDate.textContent = selectedDate;
                bookingTime.textContent = selectedTime;

             
                confirmationMessage.style.display = "block";

         
                bookingForm.reset();
            } else {
                alert("Please select both a date and time.");
            }
        });
    }
});
