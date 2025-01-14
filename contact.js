document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Mocking a successful submission
    document.getElementById('successMessage').innerText = 'Thank you for your message! We will get back to you soon.';
    
    // Clear the form fields
    document.getElementById('contactForm').reset();
});
