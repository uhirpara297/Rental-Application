$(document).ready(function () {
    console.log("Validation script loaded.");

    // --- Helper Regex Functions ---
    function validateName(name) {
        // Min 3 chars, letters/spaces only
        return /^[a-zA-Z\s]{3,}$/.test(name);
    }

    function validateEmail(email) {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        // Exactly 10 digits
        return /^\d{10}$/.test(phone);
    }

    function validatePassword(password) {
        // Min 8 chars, 1 upper, 1 lower, 1 number
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }

    function validateMessage(message) {
        // Min 10 chars
        return message.length >= 10;
    }

    // --- Generic Field Validator ---
    // Handles input groups and standard inputs
    function validateField(selector, isValid, errorMessage) {
        const input = $(selector);
        if (input.length === 0) return true; // Skip if element doesn't exist

        // Determine where to place the error message
        // If input is in an input-group, message goes after the group
        let errorTarget = input;
        const inputGroup = input.closest('.input-group');

        if (inputGroup.length > 0) {
            errorTarget = inputGroup;
        }

        // Check for existing error message container
        let errorContainer = errorTarget.next('.field-error-text');

        // Create if missing
        if (errorContainer.length === 0) {
            errorTarget.after('<div class="field-error-text"></div>');
            errorContainer = errorTarget.next('.field-error-text');
        }

        if (!isValid) {
            // Add invalid class to input for border styling
            input.addClass('is-invalid').removeClass('is-valid');
            // Show error message
            errorContainer.text(errorMessage).show();
            return false;
        } else {
            // Add valid class
            input.addClass('is-valid').removeClass('is-invalid');
            // Hide error message
            errorContainer.hide();
            return true;
        }
    }

    // --- LOGIN FORM ---
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Prevent default submission
        console.log("Login form submit triggered.");

        let isFormValid = true;

        // 1. Validate Email
        const emailVal = $('#loginEmail').val().trim();
        const isEmailValid = validateEmail(emailVal);
        if (!validateField('#loginEmail', isEmailValid, 'Please enter a valid email address.')) {
            isFormValid = false;
        }

        // 2. Validate Password (Required)
        const passVal = $('#loginPassword').val();
        const isPassValid = passVal.length > 0;
        if (!validateField('#loginPassword', isPassValid, 'Password is required.')) {
            isFormValid = false;
        }

        if (isFormValid) {
            alert('Login Successful! Redirecting to home...');
            window.location.href = 'index.html';
        }
    });

    // --- REGISTRATION FORM ---
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        console.log("Register form submit triggered.");

        let isFormValid = true;

        // Name
        const nameVal = $('#fullName').val().trim();
        if (!validateField('#fullName', validateName(nameVal), 'Name must be 3+ letters.')) {
            isFormValid = false;
        }

        // Email
        const emailVal = $('#email').val().trim();
        if (!validateField('#email', validateEmail(emailVal), 'Invalid email address.')) {
            isFormValid = false;
        }

        // Phone
        const phoneVal = $('#phone').val().trim();
        if (!validateField('#phone', validatePhone(phoneVal), 'Phone number must be 10 digits.')) {
            isFormValid = false;
        }

        // Password
        const passVal = $('#password').val();
        if (!validateField('#password', validatePassword(passVal), 'Password: 8+ chars, 1 Upper, 1 Lower, 1 Number.')) {
            isFormValid = false;
        }

        // Confirm Password
        const confirmPassVal = $('#confirmPassword').val();
        const isMatch = (confirmPassVal === passVal) && (confirmPassVal.length > 0);
        if (!validateField('#confirmPassword', isMatch, 'Passwords do not match.')) {
            isFormValid = false;
        }

        if (isFormValid) {
            alert('Registration Successful! Redirecting to Login...');
            $('#registerForm')[0].reset();
            $('.is-valid').removeClass('is-valid');
            window.location.href = 'login.html';
        }
    });

    // --- CONTACT FORM ---
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        let isFormValid = true;

        const nameVal = $('#contactName').val().trim();
        if (!validateField('#contactName', validateName(nameVal), 'Name must be 3+ letters.')) {
            isFormValid = false;
        }

        const emailVal = $('#contactEmail').val().trim();
        if (!validateField('#contactEmail', validateEmail(emailVal), 'Invalid email address.')) {
            isFormValid = false;
        }

        const phoneVal = $('#contactPhone').val().trim();
        if (!validateField('#contactPhone', validatePhone(phoneVal), 'Phone number must be 10 digits.')) {
            isFormValid = false;
        }

        const msgVal = $('#contactMessage').val().trim();
        if (!validateField('#contactMessage', validateMessage(msgVal), 'Message must be at least 10 characters.')) {
            isFormValid = false;
        }

        if (isFormValid) {
            $('#contactSuccess').slideDown();
            $('#contactForm')[0].reset();
            $('.is-valid').removeClass('is-valid');
            setTimeout(function () {
                $('#contactSuccess').slideUp();
            }, 5000);
        }
    });

    // --- FORGOT PASSWORD FORM ---
    $('#forgotPasswordForm').on('submit', function (e) {
        e.preventDefault();

        const emailVal = $('#forgotEmail').val().trim();
        const isEmailValid = validateEmail(emailVal);

        if (validateField('#forgotEmail', isEmailValid, 'Please enter a valid email address.')) {
            $('#forgotSuccess').slideDown();
            $('#forgotPasswordForm')[0].reset();
            $('.is-valid').removeClass('is-valid');
        }
    });

    // --- Input Clean-up on Interaction ---
    $('input, textarea').on('input focus', function () {
        if ($(this).hasClass('is-invalid')) {
            $(this).removeClass('is-invalid');
            // Hide the error message associated with this input
            let target = $(this);
            if (target.closest('.input-group').length > 0) {
                target = target.closest('.input-group');
            }
            target.next('.field-error-text').hide();
        }
    });

});
