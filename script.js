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

// --- FITUR BACKGROUND MUSIC (BGM) AUTOPLAY MUTED STRATEGY ---
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");
    const musicIcon = musicBtn ? musicBtn.querySelector("i") : null;

    if (music && musicBtn) {
        // Atur volume standar (0.0 - 1.0)
        const targetVolume = 0.4; 
        music.volume = targetVolume;

        // LANGSUNG PAKSA LOMPAT KE MENIT 1:10 (Detik 70) saat web baru terbuka
        music.currentTime = 70;

        // Coba paksa putar langsung (kondisi muted aktif di HTML)
        music.play().then(() => {
            console.log("Autoplay muted sukses berjalan di latar belakang!");
        }).catch(error => {
            console.log("Browser memblokir penuh autoplay, menunggu interaksi.");
        });

        // FUNGSI UNMUTE: Hidupkan suara begitu pengunjung klik apa saja di dalam website
        function handleFirstClick() {
            if (music.muted) {
                music.muted = false; // Hidupkan suara asli
                music.volume = targetVolume;
                
                if (musicIcon) musicIcon.className = "fa-solid fa-pause";
                musicBtn.classList.add("playing");
            }
            // Hapus detektor klik ini agar tidak nge-reset volume terus setiap di-klik
            document.removeEventListener("click", handleFirstClick);
        }

        // Jalankan fungsi unmute otomatis pada klik pertama pengunjung
        document.addEventListener("click", handleFirstClick);

        // KONTROL TOMBOL MANUAL (BGM Button di pojok kiri bawah)
        musicBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // Biar tidak bentrok dengan detektor klik pertama di atas
            
            if (music.muted) {
                // Jika masih dalam kondisi bisu, langsung hidupkan suaranya
                music.muted = false;
                music.play();
                if (musicIcon) musicIcon.className = "fa-solid fa-pause";
                musicBtn.classList.add("playing");
            } else if (music.paused) {
                // Jika musik sedang di-pause biasa, mainkan lagi
                music.play();
                if (musicIcon) musicIcon.className = "fa-solid fa-pause";
                musicBtn.classList.add("playing");
            } else {
                // Jika musik sedang bunyi, pause suaranya
                music.pause();
                if (musicIcon) musicIcon.className = "fa-solid fa-play";
                musicBtn.classList.remove("playing");
            }
        });
    }
});

// --- SCRIPT INTERAKSI TOOLTIP SKILL KHUSUS HP/MOBILE ---
document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {
        card.addEventListener("click", function (e) {
            // Cek apakah layar perangkat adalah ukuran HP/Tablet
            if (window.innerWidth <= 768) {
                e.stopPropagation(); // Mencegah bentrok klik global

                // Jika kartu yang sama diklik lagi, tutup tooltip-nya
                if (this.classList.contains("active-tooltip")) {
                    this.classList.remove("active-tooltip");
                } else {
                    // Bersihkan dulu tooltip aktif di kartu lain
                    skillCards.forEach(c => c.classList.remove("active-tooltip"));
                    // Aktifkan tooltip di kartu yang baru saja diklik
                    this.classList.add("active-tooltip");
                }
            }
        });
    });

    // Otomatis menutup tooltip melayang jika user mengklik area luar/kosong di HP
    document.addEventListener("click", function () {
        skillCards.forEach(c => c.classList.remove("active-tooltip"));
    });
});
