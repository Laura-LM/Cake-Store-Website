const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const searchForm = document.querySelector(".search-form"); // Define searchForm properly

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
    if (searchForm) { // Check if searchForm exists to avoid errors
        searchForm.classList.remove("active");
    }
});


function validateForm() {
    let valid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!name.value.trim()) {
        nameError.style.display = 'block';
        name.style.borderColor = '#f44336';
        name.focus();
        valid = false;
    } else {
        nameError.style.display = 'none';
        name.style.borderColor = '#ddd';
    }

    // Phone number validation (10 digits)
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d{10}$/;
    if (!phone.value.match(phonePattern)) {
        phoneError.style.display = 'block';
        phone.style.borderColor = '#f44336';
        phone.focus();
        valid = false;
    } else {
        phoneError.style.display = 'none';
        phone.style.borderColor = '#ddd';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.match(emailPattern)) {
        emailError.style.display = 'block';
        email.style.borderColor = '#f44336';
        email.focus();
        valid = false;
    } else {
        emailError.style.display = 'none';
        email.style.borderColor = '#ddd';
    }

    return valid;
}