# Rental Application

A static website for a Choli rental business.

## Project Overview

This project is a client-side only web application built with HTML, CSS (Bootstrap 5), and JavaScript (jQuery). It demonstrates a modern, responsive design with form validations.

## Technologies Used

*   **HTML5**
*   **CSS3** (Custom Styles + Bootstrap 5)
*   **JavaScript** (jQuery for validation)
*   **Font Awesome** (for icons)

## How to Run

Since this is a static website, you do not need a server to run it.

1.  Navigate to the `rental-application` folder.
2.  Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).

## Features

*   **Responsive Design:** Works on mobile, tablet, and desktop.
*   **Navigation:** Fully functional navigation bar across all pages.
*   **Validation:** Client-side validation for:
    *   Registration Form (Name, Email, Phone, Strong Password)
    *   Login Form
    *   Contact Form
    *   Forgot Password Form
*   **Interactive Elements:** Hover effects, smooth transitions, and dynamic feedback.

## File Structure

```
rental-application/
├── index.html          # Home Page
├── about.html          # About Us Page
├── contact.html        # Contact Us Page
├── products.html       # Products Listing Page
├── register.html       # Registration Page
├── login.html          # Login Page
├── forgot-password.html# Password Reset Page
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── validation.js   # jQuery validation logic
└── README.md           # Project documentation
```

## Note

*   The forms are for demonstration purposes and include client-side validation logic. They log successful submissions to the browser console but do not send data to a backend server.
*   "Book Now" buttons on the products page display an alert as placeholder functionality.
