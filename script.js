// --- FITUR PRELOADER / LOADING SCREEN DENGAN TEKS WELCOME ---
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const progressBar = document.querySelector(".preloader-progress");
    const percentText = document.querySelector(".preloader-percent");
    const preloaderBarContainer = document.querySelector(".preloader-bar");
    const welcomeText = document.getElementById("preloader-welcome-text");

    if (preloader && progressBar && percentText) {
        let progress = 0;

        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 10) + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);

                if (preloaderBarContainer) preloaderBarContainer.style.display = "none";
                if (percentText) percentText.style.display = "none";
                if (welcomeText) welcomeText.style.display = "block";

                setTimeout(() => {
                    preloader.classList.add("loaded");
                }, 600); 
            }
            progressBar.style.width = progress + "%";
            percentText.innerText = progress + "%";
        }, 80);
    }
});

// --- UTAMA: DOM CONTENT LOADED ---
document.addEventListener("DOMContentLoaded", () => {

    // 1. FITUR GANTI BAHASA (ID / EN)
    const langToggleBtn = document.getElementById("lang-toggle");
    
    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_journey: "Journey",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_subtitle: "Computer Networking Student | Web Developer | Content Creator | Front-End Development.",
            hero_btn: "Explore",
            about_title: "About Me",
            about_p1: "I am a Computer and Networking student with a lifelong passion for technology, having been immersed in the world of computers since the age of three. Growing up surrounded by hardware, software, and digital technology shaped not only my curiosity but also my determination to continuously learn and explore new possibilities within the tech industry.",
            about_p2: "My journey into the creative field began in 2017 as a Digital Creator, where I developed experience in graphic design, digital branding, content production, video editing, and visual storytelling. Throughout the years, I have worked on a variety of personal and collaborative projects that strengthened my creativity, attention to detail, and ability to transform ideas into engaging digital experiences.",
            about_p3: "Beyond creative work, I have always been passionate about understanding how technology works behind the scenes. This led me to pursue Computer and Networking, where I continue to expand my knowledge in computer hardware, networking fundamentals, troubleshooting, operating systems, and IT infrastructure. Combining technical expertise with creativity has become one of my greatest strengths.",
            about_p4: "Recently, I have broadened my skill set by learning Front-End Web Development. I enjoy building responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, and continuously exploring new frameworks and technologies. My goal is to create digital experiences that are not only visually appealing but also efficient, accessible, and technically well-structured.",
            about_p5: "I consider myself a fast learner, an adaptive problem solver, and someone who enjoys taking on new challenges. Whether I am designing digital content, troubleshooting technical issues, or developing web interfaces, I strive to deliver work with precision, creativity, and continuous improvement. As I continue growing in the technology industry, I aim to become a versatile developer who bridges creativity and engineering to build meaningful digital products.",
            journey_title: "My Journey & Stats",
            stat_exp: "Years of Experience",
            stat_projects: "Digital Projects Done",
            stat_community: "Community Members Managed",
            tl_1_title: "Start Roblox Community Management",
            tl_1_desc: "Diving deep into the Roblox ecosystem, managing community spaces, moderating player interactions, and organizing digital events for gaming groups.",
            tl_2_title: "3D Animation",
            tl_2_desc: "Began learning 3D workflows in Blender for Roblox assets.",
            tl_3_title: "XЯΞVERSE Clan Contributor & UGC Workflows",
            tl_3_desc: "Joined XЯΞVERSE as a content contributor and video editor on TikTok. Expanded skills into Roblox UGC development.",
            tl_4_title: "Front-End Web Development Expansion",
            tl_4_desc: "Blending networking logic and digital creativity into interactive web development, building clean, premium front-end web experiences.",
            skills_title: "Skills",
            projects_title: "Projects",
            filter_all: "All",
            filter_video: "Video Editing",
            filter_roblox: "Roblox Design",
            contact_title: "Contact",
            contact_desc: "Use this contact for more knowing about me!",
            form_name: "Your Name",
            form_email: "Your Email",
            form_msg: "Your Message",
            form_btn: "Send Message"
        },
        id: {
            nav_home: "Beranda",
            nav_about: "Tentang",
            nav_journey: "Perjalanan",
            nav_skills: "Keahlian",
            nav_projects: "Proyek",
            nav_contact: "Kontak",
            hero_subtitle: "Pelajar Komputer & Jaringan | Web Developer | Content Creator | Front-End Development.",
            hero_btn: "Jelajahi",
            about_title: "Tentang Saya",
            about_p1: "Saya adalah seorang pelajar bidang Komputer dan Jaringan dengan minat mendalam terhadap teknologi sejak usia tiga tahun. Tumbuh di lingkungan perangkat keras, perangkat lunak, dan teknologi digital membentuk rasa ingin tahu serta tekad saya untuk terus belajar dan mengeksplorasi peluang baru di industri teknologi.",
            about_p2: "Perjalanan saya di dunia kreatif dimulai pada tahun 2017 sebagai Digital Creator, di mana saya mendalami desain grafis, branding digital, produksi konten, penyuntingan video, dan penceritaan visual. Selama bertahun-tahun, saya telah terlibat dalam berbagai proyek pribadi maupun kolaboratif yang mengasah kreativitas, ketelitian, dan kemampuan mewujudkan ide menjadi pengalaman digital yang menarik.",
            about_p3: "Selain dunia kreatif, saya selalu tertarik memahami cara kerja teknologi di balik layar. Hal ini mendorong saya mendalami bidang Komputer dan Jaringan, memperluas wawasan seputar perangkat keras komputer, dasar-dasar jaringan, pemecahan masalah (troubleshooting), sistem operasi, dan infrastruktur IT. Memadukan keahlian teknis dengan kreativitas telah menjadi salah satu kekuatan utama saya.",
            about_p4: "Baru-baru ini, saya memperluas keterampilan dengan mempelajari Front-End Web Development. Saya menikmati proses membangun situs web yang responsif, modern, dan ramah pengguna menggunakan HTML, CSS, JavaScript, serta terus mengeksplorasi teknologi dan framework baru. Tujuan saya adalah menghadirkan pengalaman digital yang estetis, efisien, aksesibel, dan terstruktur dengan baik.",
            about_p5: "Saya menganggap diri saya sebagai pembelajar cepat, pemecah masalah yang adaptif, dan pribadi yang menyukai tantangan baru. Baik saat merancang konten digital, memperbaiki kendala teknis, maupun mengembangkan antarmuka web, saya selalu berusaha memberikan hasil terbaik dengan ketelitian, kreativitas, dan peningkatan berkelanjutan. Seiring langkah saya di industri teknologi, saya bercita-cita menjadi developer serba bisa yang menjembatani kreativitas dan teknik untuk menciptakan produk digital yang bermakna.",
            journey_title: "Perjalanan & Statistik",
            stat_exp: "Tahun Pengalaman",
            stat_projects: "Proyek Digital Selesai",
            stat_community: "Anggota Komunitas Dikelola",
            tl_1_title: "Memulai Manajemen Komunitas Roblox",
            tl_1_desc: "Terjun mendalam ke ekosistem Roblox, mengelola ruang komunitas, memoderasi interaksi pemain, dan menyelenggarakan acara digital untuk kelompok gaming.",
            tl_2_title: "Animasi 3D",
            tl_2_desc: "Mulai mempelajari alur kerja 3D menggunakan Blender untuk aset Roblox.",
            tl_3_title: "Kontributor Klan XЯΞVERSE & Alur Kerja UGC",
            tl_3_desc: "Bergabung dengan XЯΞVERSE sebagai kontributor konten dan editor video di TikTok. Memperluas keterampilan ke pengembangan UGC Roblox.",
            tl_4_title: "Ekspansi Front-End Web Development",
            tl_4_desc: "Memadukan logika jaringan dan kreativitas digital ke dalam web development interaktif, membangun pengalaman web front-end yang bersih dan premium.",
            skills_title: "Keahlian",
            projects_title: "Proyek",
            filter_all: "Semua",
            filter_video: "Penyuntingan Video",
            filter_roblox: "Desain Roblox",
            contact_title: "Kontak",
            contact_desc: "Gunakan kontak ini untuk mengenal saya lebih jauh!",
            form_name: "Nama Anda",
            form_email: "Email Anda",
            form_msg: "Pesan Anda",
            form_btn: "Kirim Pesan"
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            const key = element.getAttribute("data-i18n-placeholder");
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute("placeholder", translations[lang][key]);
            }
        });

        if (langToggleBtn) {
            langToggleBtn.innerText = lang === "id" ? "EN" : "ID";
        }
        localStorage.setItem("preferred_lang", lang);
    }

    const savedLang = localStorage.getItem("preferred_lang") || "en";
    setLanguage(savedLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("preferred_lang") || "en";
            const newLang = currentLang === "en" ? "id" : "en";
            setLanguage(newLang);
        });
    }

    // 2. Tombol Explore Smooth Scroll
    const exploreBtn = document.querySelector('.hero .btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector('#about');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // 3. Back to Top Button
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 4. Navigasi Pintar & Aktif Link
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

    // 5. Efek Kursor Glow
    const glow = document.querySelector(".cursor-glow");
    if (glow) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });
    }

    // 6. Logika Mode Gelap / Terang
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

    // 7. Click to Copy Discord
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

    // 8. Animasi Mengetik (Typing Effect)
    const textElement = document.getElementById("typing-text");
    const words = ["Tech Enthusiast", "Contributor", "Web Developer", "Digital Creator", "UGC Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!textElement) return;
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

    if (textElement) {
        typeEffect();
    }
});

// --- FITUR BACKGROUND MUSIC (BGM) ---
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");
    const musicIcon = musicBtn ? musicBtn.querySelector("i") : null;

    if (music && musicBtn) {
        const targetVolume = 0.4;
        music.volume = targetVolume;

        music.addEventListener("loadedmetadata", () => {
            music.currentTime = 70;
        });

        let hasStartedByInteraction = false;

        music.play().then(() => {
            if (musicIcon) musicIcon.className = "fa-solid fa-pause";
            musicBtn.classList.add("playing");
        }).catch(() => {});

        function handleFirstClick() {
            if (!hasStartedByInteraction) {
                music.muted = false;
                music.volume = targetVolume;
                music.play().then(() => {
                    if (musicIcon) musicIcon.className = "fa-solid fa-pause";
                    musicBtn.classList.add("playing");
                }).catch(() => {});
                hasStartedByInteraction = true;
            }
            document.removeEventListener("click", handleFirstClick);
        }
        document.addEventListener("click", handleFirstClick);

        musicBtn.addEventListener("click", function (e) {
            e.stopPropagation();

            if (music.muted || music.paused) {
                music.muted = false;
                music.play();
                if (musicIcon) musicIcon.className = "fa-solid fa-pause";
                musicBtn.classList.add("playing");
            } else {
                music.pause();
                if (musicIcon) musicIcon.className = "fa-solid fa-play";
                musicBtn.classList.remove("playing");
            }
            hasStartedByInteraction = true;
        });
    }
});

// --- SCRIPT INTERAKSI TOOLTIP SKILL HP/MOBILE ---
document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {
        card.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.stopPropagation(); 
                if (this.classList.contains("active-tooltip")) {
                    this.classList.remove("active-tooltip");
                } else {
                    skillCards.forEach(c => c.classList.remove("active-tooltip"));
                    this.classList.add("active-tooltip");
                }
            }
        });
    });

    document.addEventListener("click", function () {
        skillCards.forEach(c => c.classList.remove("active-tooltip"));
    });
});

// --- FITUR FILTER PROJECTS ---
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

// --- FITUR EMAILJS (CONTACT FORM) ---
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

        emailjs.send('service_s7jfm3l', 'template_q98gvsj', templateParams)
            .then(function(response) {
                statusText.innerText = "✅ Message sent successfully!";
                statusText.style.color = "#4CAF50"; 
                contactForm.reset(); 
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            }, function(error) {
                statusText.innerText = "❌ Failed to send message. Try again later.";
                statusText.style.color = "#f44336"; 
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            });
    });
}
