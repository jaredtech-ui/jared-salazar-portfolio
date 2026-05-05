// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent! (This is just UI for now)');
});