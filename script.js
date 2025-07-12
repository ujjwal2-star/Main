
        // Create bubbles for header background
        function createBubbles() {
            const bubblesContainer = document.getElementById('bubbles-js');
            const bubbleCount = 20;
            
            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                // Random size between 10px and 50px
                const size = Math.random() * 40 + 10;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                
                // Random position
                bubble.style.left = `${Math.random() * 100}%`;
                
                // Random animation duration between 10s and 20s
                const duration = Math.random() * 10 + 10;
                bubble.style.animationDuration = `${duration}s`;
                
                // Random delay
                bubble.style.animationDelay = `${Math.random() * 5}s`;
                
                bubblesContainer.appendChild(bubble);
            }
        }
        
        // Animate sections when they come into view
        function animateOnScroll() {
            const sections = document.querySelectorAll('section');
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY || window.pageYOffset;
            
            sections.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top + scrollPosition;
                const sectionOffset = sectionTop - windowHeight;
                
                if (scrollPosition >= sectionOffset + 100 && !section.classList.contains('visible')) {
                    // Add different animations based on section position
                    if (index % 2 === 0) {
                        section.classList.add('animate__fadeInLeft');
                    } else {
                        section.classList.add('animate__fadeInRight');
                    }
                    section.classList.add('visible');
                }
            });
        }
        
        // Back to top button
        function setupBackToTop() {
            const backToTop = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTop.style.display = 'flex';
                } else {
                    backToTop.style.display = 'none';
                }
            });
            
            backToTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Set current year in footer
        function setCurrentYear() {
            document.getElementById('year').textContent = new Date().getFullYear();
        }
        
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createBubbles();
            setupBackToTop();
            setCurrentYear();
            
            // Initial check for visible sections
            animateOnScroll();
            
            // Check for sections coming into view on scroll
            window.addEventListener('scroll', animateOnScroll);
        });
   // Prevent right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});

// Add transparent overlay to images
document.querySelectorAll('img').forEach(img => {
  img.style.pointerEvents = 'none';
  img.style.userSelect = 'none';
});