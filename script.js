// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    if (mainMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Menu navigation
const menuLinks = document.querySelectorAll('nav a, .btn');
const menuSections = document.querySelectorAll('.menu-section');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('data-target');
        
        // Hide all sections
        menuSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        document.getElementById(targetId).classList.add('active');
        
        // Close mobile menu if open
        if (mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active');
            
            // Reset hamburger animation
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Scroll to top of content
        window.scrollTo({
            top: document.querySelector('.main-content').offsetTop - 20,
            behavior: 'smooth'
        });
    });
});