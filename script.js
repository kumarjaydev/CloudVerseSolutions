// Ensure DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.main-nav');

    // Toggle active class on menu burger and nav links
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active'); // For burger animation
        navLinks.classList.toggle('active');      // For showing menu
    });

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.main-nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('is-active');
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Form Handling & Validation ---
    const quoteForm = document.getElementById('quoteForm');
    const formFeedback = document.getElementById('formFeedback');

    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Basic validation check (add more robust check as needed)
        const name = quoteForm.querySelector('input[type="text"]').value;
        const email = quoteForm.querySelector('input[type="email"]').value;
        const service = quoteForm.querySelector('select').value;

        if (name && email && service) {
            // Success State: Show feedback, clear form
            formFeedback.textContent = `Thank you, ${name}! Your request for ${service} has been simulated. We will (theoretically) contact you at ${email}.`;
            formFeedback.className = 'success'; // Apply CSS class
            quoteForm.reset();                  // Clear the form
        } else {
            // Error State: (Browser validation usually handles this first)
            formFeedback.textContent = 'Please fill out all required fields.';
            formFeedback.className = 'error'; // You would add an .error class in CSS
        }
    });

});