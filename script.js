document.addEventListener("DOMContentLoaded", () => {
    /* -------------------------------------------------------------------------- */
    /* 1. Navigation Scroll Effect
    /* -------------------------------------------------------------------------- */
    const nav = document.getElementById("main-nav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
    
    // Check initial position on load
    if (window.scrollY > 80) {
        nav.classList.add("scrolled");
    }

    /* -------------------------------------------------------------------------- */
    /* 2. Mobile Menu Toggle
    /* -------------------------------------------------------------------------- */
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    // Create paths for open/close icon
    const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    let isMenuOpen = false;

    menuToggle.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.add("open");
            menuToggle.innerHTML = closeIcon;
            document.body.style.overflow = "hidden"; // Prevent scrolling
            nav.classList.add("scrolled"); // Ensure background handles text contrast
        } else {
            mobileMenu.classList.remove("open");
            menuToggle.innerHTML = menuIcon;
            document.body.style.overflow = "";
            if (window.scrollY <= 80) {
                nav.classList.remove("scrolled");
            }
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            isMenuOpen = false;
            mobileMenu.classList.remove("open");
            menuToggle.innerHTML = menuIcon;
            document.body.style.overflow = "";
        });
    });

    /* -------------------------------------------------------------------------- */
    /* 3. Scroll Reveal Animations (Intersection Observer)
    /* -------------------------------------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Trigger when 15% visible
    };

    const fadeUpElements = document.querySelectorAll(".fade-up");

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    fadeUpElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* -------------------------------------------------------------------------- */
    /* 4. Contact Form Handler (Mock)
    /* -------------------------------------------------------------------------- */
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector("button[type='submit']");
            const originalText = btn.innerHTML;
            
            btn.innerHTML = "ИЗПРАЩАНЕ...";
            btn.style.opacity = 0.8;
            btn.disabled = true;

            // Simulate network request
            setTimeout(() => {
                btn.innerHTML = "УСПЕШНО ИЗПРАТЕНО";
                btn.style.background = "var(--color-primary)"; // Assuming a primary valid color or keep accent
                btn.style.borderColor = "var(--color-text-primary)";
                
                // Reset form
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.opacity = 1;
                    btn.disabled = false;
                    btn.style.background = "";
                    btn.style.borderColor = "";
                }, 3000);
            }, 1000);
        });
    }
});
