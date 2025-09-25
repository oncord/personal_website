// Performance optimized - stars removed

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);



// Hero Animation - Name cycling and subtitle typing
document.addEventListener('DOMContentLoaded', () => {
    const animatedName = document.querySelector('.animated-name');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (animatedName && heroSubtitle) {
        const names = ['Richyyy', '@on_cord', 'Richard M.'];
        const subtitleText = 'Welcome to my corner of the internet :)';
        let currentNameIndex = 0;
        let currentCharIndex = 0;
        
        // Function to cycle through names
        function cycleNames() {
            if (currentNameIndex < names.length) {
                const currentName = names[currentNameIndex];
                
                // If this is not the first name, delete the previous name first
                if (currentNameIndex > 0) {
                    deleteCurrentName();
                } else {
                    // For the first name, just start typing
                    typeName();
                }
                
                function deleteCurrentName() {
                    const currentText = animatedName.textContent;
                    if (currentText.length > 0) {
                        animatedName.textContent = currentText.slice(0, -1);
                        setTimeout(deleteCurrentName, 50);
                    } else {
                        // Start typing the new name
                        typeName();
                    }
                }
                
                function typeName() {
                    let charIndex = 0;
                    
                    function typeChar() {
                        if (charIndex < currentName.length) {
                            animatedName.textContent += currentName[charIndex];
                            charIndex++;
                            setTimeout(typeChar, 100);
                        } else {
                            // Wait a bit, then move to next name
                            setTimeout(() => {
                                currentNameIndex++;
                                if (currentNameIndex < names.length) {
                                    setTimeout(cycleNames, 1000);
                                } else {
                                    // After all names, start typing subtitle
                                    setTimeout(typeSubtitle, 500);
                                }
                            }, 1500);
                        }
                    }
                    
                    typeChar();
                }
            }
        }
        
        // Function to type subtitle
        function typeSubtitle() {
            heroSubtitle.classList.add('typing');
            currentCharIndex = 0;
            
            function typeChar() {
                if (currentCharIndex < subtitleText.length) {
                    heroSubtitle.textContent += subtitleText[currentCharIndex];
                    currentCharIndex++;
                    setTimeout(typeChar, 50);
                } else {
                    // Remove typing cursor after completion
                    setTimeout(() => {
                        heroSubtitle.classList.remove('typing');
                        // Also remove the typing class from animated name to stop blinking
                        animatedName.classList.remove('typing');
                    }, 1000);
                }
            }
            
            typeChar();
        }
        
        // Start the animation sequence
        setTimeout(cycleNames, 1000);
    }
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .stat, .skill-category, .code-object');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Tooltip click functionality
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const url = trigger.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Console typing animation with flag-based system
document.addEventListener('DOMContentLoaded', () => {
    const outputLines = document.querySelectorAll('.output-line');
    const consoleCursor = document.querySelector('.console-cursor');
    const consoleLines = document.querySelectorAll('.console-line');
    
    if (outputLines.length > 0) {
        // Hide cursor initially
        if (consoleCursor) {
            consoleCursor.style.display = 'none';
        }
        
        // Initialize line states
        const lineStates = Array.from(outputLines).map(() => ({
            isTyping: false,
            isComplete: false,
            text: ''
        }));
        
        // Set up each line with its text
        outputLines.forEach((line, index) => {
            const text = line.getAttribute('data-text');
            line.textContent = '';
            lineStates[index].text = text;
        });
        
        // Show console commands first, then start output
        setTimeout(() => {
            // Show compilation command
            if (consoleLines[0]) {
                consoleLines[0].style.opacity = '1';
            }
            // Show execution command
            setTimeout(() => {
                if (consoleLines[1]) {
                    consoleLines[1].style.opacity = '1';
                }
                // Start output after commands are shown
                setTimeout(() => {
                    startNextLine(0);
                }, 500);
            }, 800);
        }, 1000);
        
        function startNextLine(lineIndex) {
            if (lineIndex >= outputLines.length) {
                // All lines are done, show final cursor briefly
                if (consoleCursor) {
                    consoleCursor.style.display = 'inline-block';
                    setTimeout(() => {
                        consoleCursor.style.display = 'none';
                    }, 2000);
                }
                return;
            }
            
            const line = outputLines[lineIndex];
            const state = lineStates[lineIndex];
            
            // Mark as typing and start animation
            state.isTyping = true;
            line.classList.add('typing');
            typeText(line, state.text, 50, () => {
                // Callback when this line is complete
                state.isTyping = false;
                state.isComplete = true;
                line.classList.remove('typing');
                line.classList.add('typing-complete');
                
                // Start next line after a brief pause
                setTimeout(() => {
                    startNextLine(lineIndex + 1);
                }, 200);
            });
        }
    }
});

function typeText(element, text, speed, onComplete) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            // Ensure text remains visible
            element.textContent = text;
            // Call completion callback
            if (onComplete) {
                onComplete();
            }
        }
    }, speed);
}

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation for images
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active class to current navigation link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #4fc3f7 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
    body.loaded .hero {
        opacity: 1;
    }
`;
document.head.appendChild(style); 

// Draggable popup montage windows
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.open-montage');
    const windows = {
        hvac: document.getElementById('window-hvac'),
        spotify: document.getElementById('window-spotify')
    };

    function bringToFront(el) {
        // Simple z-index bump
        const maxZ = Array.from(document.querySelectorAll('.floating-window'))
            .reduce((m, w) => Math.max(m, parseInt(window.getComputedStyle(w).zIndex) || 0), 2000);
        el.style.zIndex = String(maxZ + 1);
    }

    function openWindow(key) {
        const win = windows[key];
        if (!win) return;
        win.style.display = 'block';
        bringToFront(win);
        // Center near viewport
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const rect = win.getBoundingClientRect();
        win.style.left = Math.max(12, (vw - rect.width) / 2) + 'px';
        win.style.top = Math.max(12, (vh - rect.height) / 3) + 'px';
        // Autopause others
        document.querySelectorAll('.floating-window video').forEach(v => {
            if (v.closest('.floating-window') !== win) {
                v.pause();
            }
        });
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-target');
            openWindow(key);
        });
    });

    // Close buttons
    document.querySelectorAll('.floating-buttons .close').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-close');
            const win = document.getElementById(id);
            if (!win) return;
            const vid = win.querySelector('video');
            if (vid) vid.pause();
            win.style.display = 'none';
        });
    });

    // Drag logic
    function makeDraggable(win) {
        const header = win.querySelector('.floating-header');
        if (!header) return;
        let isDown = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener('mousedown', (e) => {
            isDown = true;
            bringToFront(win);
            const rect = win.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const rect = win.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            let left = e.clientX - offsetX;
            let top = e.clientY - offsetY;
            // Constrain within viewport with 8px padding
            const pad = 8;
            left = Math.min(Math.max(pad, left), vw - width - pad);
            top = Math.min(Math.max(pad, top), vh - 40); // allow some to go off-screen
            win.style.left = left + 'px';
            win.style.top = top + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDown = false;
            document.body.style.userSelect = '';
        });

        // Touch support
        header.addEventListener('touchstart', (e) => {
            const t = e.touches[0];
            isDown = true;
            bringToFront(win);
            const rect = win.getBoundingClientRect();
            offsetX = t.clientX - rect.left;
            offsetY = t.clientY - rect.top;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const t = e.touches[0];
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const rect = win.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            let left = t.clientX - offsetX;
            let top = t.clientY - offsetY;
            const pad = 8;
            left = Math.min(Math.max(pad, left), vw - width - pad);
            top = Math.min(Math.max(pad, top), vh - 40);
            win.style.left = left + 'px';
            win.style.top = top + 'px';
        }, { passive: true });

        document.addEventListener('touchend', () => {
            isDown = false;
        });
    }

    Object.values(windows).forEach(win => {
        if (win) makeDraggable(win);
    });
});