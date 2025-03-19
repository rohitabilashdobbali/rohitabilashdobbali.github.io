// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year to current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple animation for project cards when they come into view
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply initial styles and observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add active class to navigation links when scrolling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Simple form validation if a contact form is added later
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation logic would go here
            
            // Show a success message
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }
    
    // Typing effect for the headline (uncomment to enable)
    // typeWriter();
});

// Typewriter effect function (can be enabled by uncommenting the call above)
function typeWriter() {
    const element = document.querySelector('.hero h1');
    if (!element) return;
    
    const originalText = element.innerHTML;
    element.innerHTML = '';
    
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    
    function type() {
        if (i < originalText.length) {
            element.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Scroll to top button functionality
function createScrollTopButton() {
    // Create button element
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-top-btn';
    document.body.appendChild(scrollButton);
    
    // Style the button (you could also put this in your CSS file)
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '20px';
    scrollButton.style.right = '20px';
    scrollButton.style.width = '50px';
    scrollButton.style.height = '50px';
    scrollButton.style.borderRadius = '50%';
    scrollButton.style.backgroundColor = 'var(--primary-color)';
    scrollButton.style.color = 'white';
    scrollButton.style.border = 'none';
    scrollButton.style.fontSize = '20px';
    scrollButton.style.cursor = 'pointer';
    scrollButton.style.display = 'none';
    scrollButton.style.zIndex = '1000';
    scrollButton.style.transition = 'all 0.3s ease';
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment to add a scroll-to-top button
// createScrollTopButton();

// Optional dark mode toggle functionality
function enableDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
function checkDarkModeSetting() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Uncomment to enable dark mode feature
// checkDarkModeSetting();

// You would need to add CSS for dark mode like this in your CSS file:
/*
.dark-mode {
    --primary-color: #4da6ff;
    --primary-dark: #0080ff;
    --text-color: #f5f5f5;
    --text-light: #cccccc;
    --bg-light: #2a2a2a;
    --border-color: #444;
    background-color: #1a1a1a;
}
*/

// Window resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Add any responsive adjustments here if needed
});
