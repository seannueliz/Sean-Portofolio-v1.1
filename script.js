document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animasi Muncul Saat Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.05
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // 2. Navigasi Pintar
    const navbar = document.querySelector("nav");
    const sections = document.querySelectorAll("section, hero");
    const navLinks = document.querySelectorAll("nav .menu a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. Efek Kursor Glow Mengikuti Mouse
    const glow = document.querySelector(".cursor-glow");
    if (glow) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });
    }

    // 4. Logika Mode Gelap / Terang (Theme Toggle)
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector("i");

        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
            if (currentTheme === "light") {
                themeIcon.className = "fa-solid fa-sun";
            }
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

    // 5. Fitur Click to Copy untuk Discord
    const discordBtn = document.querySelector(".contact-item.discord");
    if (discordBtn) {
        discordBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            const usernameText = discordBtn.querySelector(".username");
            const originalText = usernameText.innerText;
            
            navigator.clipboard.writeText(originalText).then(() => {
                usernameText.innerText = "Copied! ✨";
                usernameText.style.color = "#00FF66";
                
                setTimeout(() => {
                    usernameText.innerText = originalText;
                    usernameText.style.color = "";
                }, 2000);
            });
        });
    }

    // 6. ANIMASI MENGETIK (TYPING EFFECT)
    const textElement = document.getElementById("typing-text");
    const words = ["Tech Enthusiast", "Contributor", "Web Developer", "Digital Creator", "UGC Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Proses menghapus huruf
            textElement.innerText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Proses mengetik huruf
            textElement.innerText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Penentuan kecepatan ketik
        let typeSpeed = isDeleting ? 50 : 100;

        // Jika kata sudah selesai diketik penuh
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1500; // Jeda diam dulu selama 1.5 detik sebelum dihapus
            isDeleting = true;
        } 
        // Jika kata sudah habis terhapus
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Ganti ke kata berikutnya
            typeSpeed = 500; // Jeda sebelum mulai ngetik kata baru
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Jalankan animasi ketik jika elemennya ada
    if (textElement) {
        typeEffect();
    }
});

// --- FITUR BACKGROUND MUSIC (BGM) PLAYER ---
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");
    const musicIcon = musicBtn ? musicBtn.querySelector("i") : null;

    if (music && musicBtn) {
        // Mengatur volume awal agar tidak terlalu keras (skala 0.0 sampai 1.0)
        music.volume = 0.4; 

        musicBtn.addEventListener("click", function () {
            if (music.paused) {
                // Jika lagu sedang berhenti, maka mainkan
                music.play().then(() => {
                    if (musicIcon) musicIcon.className = "fa-solid fa-pause"; // Ubah ikon jadi pause
                    musicBtn.classList.add("playing");
                }).catch(error => {
                    console.log("Musik gagal diputar otomatis oleh browser:", error);
                });
            } else {
                // Jika lagu sedang berputar, maka hentikan (pause)
                music.pause();
                if (musicIcon) musicIcon.className = "fa-solid fa-play"; // Ubah ikon balik jadi play
                musicBtn.classList.remove("playing");
            }
        });
    }
});
