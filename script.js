window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const progressBar = document.querySelector(".preloader-progress");
    const percentText = document.querySelector(".preloader-percent");

    if (preloader && progressBar && percentText) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 10) + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => { preloader.classList.add("loaded"); }, 300);
            }
            progressBar.style.width = progress + "%";
            percentText.innerText = progress + "%";
        }, 80);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Back to Top
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) { backToTopBtn.classList.add("show"); }
            else { backToTopBtn.classList.remove("show"); }
        });
        backToTopBtn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }

    // Hamburger Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const hamburgerIcon = hamburger ? hamburger.querySelector('i') : null;

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) { hamburgerIcon.className = "fa-solid fa-xmark"; }
            else { hamburgerIcon.className = "fa-solid fa-bars"; }
        });
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                if (hamburgerIcon) hamburgerIcon.className = "fa-solid fa-bars";
            });
        });
    }

    // Navbar Scrolled Effect
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { navbar.classList.add("scrolled"); }
        else { navbar.classList.remove("scrolled"); }
    });

    // Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector("i");
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
            if (currentTheme === "light") { themeIcon.className = "fa-solid fa-sun"; }
        }
        themeToggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            if (theme === "light") {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                themeIcon.className = "fa-solid fa-moon";
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
                themeIcon.className = "fa-solid fa-sun";
            }
        });
    }

    // Typing Effect
    const textElement = document.getElementById("typing-text");
    const words = ["Tech Enthusiast", "Contributor", "Web Developer", "Digital Creator", "UGC Creator"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            textElement.innerText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.innerText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        setTimeout(typeEffect, typeSpeed);
    }
    if (textElement) { typeEffect(); }
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// EmailJS Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const statusText = document.getElementById('form-status');
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        const templateParams = {
            name: document.getElementById('user_name').value,
            email: document.getElementById('user_email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_s7jfm3l', '8vz4juc', templateParams)
            .then(function() {
                statusText.innerText = "✅ Message sent successfully!";
                statusText.style.color = "#4CAF50";
                contactForm.reset();
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            }, function() {
                statusText.innerText = "❌ Failed to send message. Try again later.";
                statusText.style.color = "#f44336";
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            });
    });
}
