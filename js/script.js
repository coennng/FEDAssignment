document.addEventListener("DOMContentLoaded", () => {
    // --- Login form validation ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "admin" && password === "password123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to the dashboard
            } else {
                const errorMessage = document.getElementById("error-message");
                errorMessage.style.display = "block";
            }
        });
    }

    // --- Feedback form validation ---
    const feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission

            const emailInput = document.getElementById("email").value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailInput)) {
                alert("Please enter a valid email address.");
                return; // Stop further execution if email is invalid
            }

            // Show success message if email is valid
            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";

            // Optionally clear the form
            feedbackForm.reset();
        });
    }

    // --- Online lesson booking ---
    const bookingForm = document.getElementById("online-lesson-form");
    const confirmationMessage = document.getElementById("lesson-confirmation");
    const bookingDate = document.getElementById("booking-date");
    const bookingTime = document.getElementById("booking-time");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Get the selected date and time
            const selectedDate = document.getElementById("lesson-date").value;
            const selectedTime = document.getElementById("lesson-time").value;

            if (selectedDate && selectedTime) {
                // Set the date and time in the confirmation message
                bookingDate.textContent = selectedDate;
                bookingTime.textContent = selectedTime;

                // Show the confirmation message
                confirmationMessage.style.display = "block";

                // Optionally reset the form after booking
                bookingForm.reset();
            } else {
                alert("Please select both a date and time.");
            }
        });
    }
});
