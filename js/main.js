// Örnek blog yazıları verisi
const posts = [
    {
        id: 1,
        title: 'Modern Web Teknolojileri',
        excerpt: 'Günümüzde kullanılan modern web teknolojileri ve framework\'ler hakkında detaylı bir inceleme.',
        image: 'https://picsum.photos/id/1/500/300',
        date: '15 Mart 2024',
        featured: true
    },
    {
        id: 2,
        title: 'JavaScript\'te Async/Await',
        excerpt: 'Asenkron programlama ve modern JavaScript\'te async/await kullanımı.',
        image: 'https://picsum.photos/id/2/500/300',
        date: '12 Mart 2024',
        featured: true
    },
    // Daha fazla yazı eklenebilir
];

// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeAndLanguage();
    setupEventListeners();
    initializeIntersectionObserver();
});

// Tema ve dil başlangıç ayarları
function initializeThemeAndLanguage() {
    const theme = localStorage.getItem('theme') || 'light';
    const lang = localStorage.getItem('lang') || 'tr';
    
    setTheme(theme);
    setLanguage(lang);
    
    // Başlangıç durumunda doğru butonu aktif et
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // Önce tüm aktif sınıfları kaldır
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Event listener'ları ayarla
function setupEventListeners() {
    // Tema değiştirme
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Dil değiştirme
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            
            // Aktif buton stilini güncelle
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Tema değiştirme fonksiyonu
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Tema ikonunu güncelle
    const themeBtn = document.getElementById('themeToggle');
    if (theme === 'dark') {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Dil değiştirme fonksiyonu
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    
    // Tüm çevrilebilir elementleri güncelle
    document.querySelectorAll('[data-tr]').forEach(element => {
        element.textContent = element.getAttribute(lang === 'tr' ? 'data-tr' : 'data-en');
    });

    // Diğer metinleri çevir
    updateTranslations(lang);
}

// Tüm metinlerin çevirileri
const translations = {
    tr: {
        title: "Yunus Akçiçek - Yazılım Geliştirici",
        developer: "Yazılım Geliştirici",
        backendDev: "Backend Geliştirici",
        netExpert: ".NET Geliştirici",
        testEng: "Test Mühendisi",
        copyright: "Tüm hakları saklıdır.",
        aboutMe: "1996 yılında Malatya'da doğdum. İlk ve orta öğretimimi Malatya'da tamamladıktan sonra Kayseri'de Üniversite eğitimimi bitirdim. Eğitim hayatım boyunca teknoloji ve yazılım alanına olan ilgim, beni sürekli yeni şeyler öğrenmeye ve kendimi geliştirmeye yönlendirdi.",
        careerInfo: "Üniversite eğitimimi tamamladıktan sonra İstanbul'da profesyonel iş hayatıma başladım. 2021 yılından beri İstanbul'da yaşıyor ve yazılım sektöründe aktif olarak çalışıyorum. Evliyim ve bir kız çocuk babasıyım.",
        expTitle: "İş Deneyimi",
        currentRole: "Devam Ediyor",
        projectDesc: "E-ticaret platformu için kapsamlı CRM & ERP çözümleri geliştirdim:",
        techUsed: "Kullanılan Teknolojiler:",
        testExp: "Test süreçlerinde kapsamlı deneyim:",
        internshipProject: "DengeIK İnsan Kaynakları Yazılımı Projesi:",
        eduTitle: "Eğitim",
        university: "Bilgisayar Mühendisliği",
        highSchool: "Lise Eğitimi",
        primarySchool: "İlk ve Orta Okul",
        skillsTitle: "Yetenekler",
        database: "Veritabanı",
        frontend: "Frontend",
        projectManagement: "Proje Yönetimi",
        netBackend: ".Net Backend Geliştiricisi",
        testEngineer: "Yazılım Test Mühendisi",
        internship: "Bilgisayar Mühendisliği Stajı",
        dengeCompany: "Denge Bilgisayar Ltd. Şti.",
        optiimCompany: "Optiim Yazılım",
        ongoing: "Devam Ediyor",
        erpSolutions: "E-ticaret platformu için kapsamlı CRM & ERP çözümleri geliştirdim:",
        erpFeatures: [
            "LOGO muhasebe yazılımı ile tam entegrasyon",
            "Stok & Satış yönetimi sistemleri",
            "Satınalma süreçleri ve raporlama araçları",
            "Yönetimsel ve finansal raporlama modülleri",
            "Teknik servis & depo yönetim sistemleri",
            "Kargo entegrasyonları ve takip sistemleri"
        ],
        techStack: "Kullanılan Teknolojiler:",
        technologies: [
            ".NET Framework & .NET Core",
            "C#, ASP.NET MVC & Web API",
            "MS SQL Server",
            "HTML5, CSS3, JavaScript",
            "jQuery, Bootstrap"
        ],
        testExperience: "Test süreçlerinde kapsamlı deneyim:",
        testFeatures: [
            "Manuel test senaryoları oluşturma ve uygulama",
            "Java Selenium ile test otomasyonu geliştirme",
            "Postman ile API testleri",
            "JMeter ile performans testleri",
            "Grafana ve influxDB ile test metriklerinin takibi",
            "AgeSA projesinde 6 ay test mühendisliği"
        ],
        hrProject: "DengeIK İnsan Kaynakları Yazılımı Projesi:",
        hrFeatures: [
            "ASP.NET MVC mimarisi ile web uygulaması geliştirme",
            "MS SQL Server veritabanı tasarımı ve yönetimi",
            "Responsive tasarım için HTML5 ve CSS3 kullanımı",
            "jQuery ile dinamik kullanıcı arayüzü geliştirme"
        ]
    },
    en: {
        title: "Yunus Akçiçek - Software Developer",
        developer: "Software Developer",
        backendDev: "Backend Developer",
        netExpert: ".NET Developer",
        testEng: "Test Engineer",
        copyright: "All rights reserved.",
        aboutMe: "I was born in Malatya in 1996. After completing my primary and secondary education in Malatya, I finished my University education in Kayseri. Throughout my education, my interest in technology and software has led me to continuously learn new things and improve myself.",
        careerInfo: "After completing my university education, I started my professional career in Istanbul. I have been living in Istanbul since 2021 and actively working in the software industry. I am married and have a daughter.",
        expTitle: "Work Experience",
        currentRole: "Present",
        projectDesc: "Developed comprehensive CRM & ERP solutions for e-commerce platform:",
        techUsed: "Technologies Used:",
        testExp: "Comprehensive experience in testing processes:",
        internshipProject: "DengeIK Human Resources Software Project:",
        eduTitle: "Education",
        university: "Computer Engineering",
        highSchool: "High School",
        primarySchool: "Primary & Middle School",
        skillsTitle: "Skills",
        database: "Database",
        frontend: "Frontend",
        projectManagement: "Project Management",
        netBackend: ".Net Backend Developer",
        testEngineer: "Software Test Engineer",
        internship: "Computer Engineering Internship",
        dengeCompany: "Denge Computer Ltd. Co.",
        optiimCompany: "Optiim Software",
        ongoing: "Present",
        erpSolutions: "Developed comprehensive CRM & ERP solutions for e-commerce platform:",
        erpFeatures: [
            "Full integration with LOGO accounting software",
            "Stock & Sales management systems",
            "Purchasing processes and reporting tools",
            "Management and financial reporting modules",
            "Technical service & warehouse management systems",
            "Cargo integrations and tracking systems"
        ],
        techStack: "Technologies Used:",
        technologies: [
            ".NET Framework & .NET Core",
            "C#, ASP.NET MVC & Web API",
            "MS SQL Server",
            "HTML5, CSS3, JavaScript",
            "jQuery, Bootstrap"
        ],
        testExperience: "Comprehensive experience in testing processes:",
        testFeatures: [
            "Creating and implementing manual test scenarios",
            "Developing test automation with Java Selenium",
            "API testing with Postman",
            "Performance testing with JMeter",
            "Test metrics monitoring with Grafana and influxDB",
            "6 months as test engineer in AgeSA project"
        ],
        hrProject: "DengeIK Human Resources Software Project:",
        hrFeatures: [
            "Web application development with ASP.NET MVC architecture",
            "MS SQL Server database design and management",
            "HTML5 and CSS3 for responsive design",
            "Dynamic user interface development with jQuery"
        ]
    }
};

// Sayfadaki tüm metinleri güncelle
function updateTranslations(lang) {
    // Başlık ve meta bilgiler
    document.title = translations[lang].title;

    // Profil bilgileri
    document.querySelector('.profile-info h2').textContent = translations[lang].developer;
    document.querySelector('.tagline').textContent = 
        `${translations[lang].backendDev} | ${translations[lang].netExpert} | ${translations[lang].testEng}`;

    // Hakkımda metinleri
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts[0].textContent = translations[lang].aboutMe;
    aboutTexts[1].textContent = translations[lang].careerInfo;

    // Section başlıkları
    document.querySelectorAll('.section-title').forEach(title => {
        if (title.parentElement.id === 'experience') {
            title.textContent = translations[lang].expTitle;
        } else if (title.parentElement.id === 'education') {
            title.textContent = translations[lang].eduTitle;
        } else if (title.parentElement.id === 'skills') {
            title.textContent = translations[lang].skillsTitle;
        }
    });

    // Eğitim bilgileri
    document.querySelectorAll('.education-card').forEach(card => {
        const h4 = card.querySelector('h4');
        if (h4.textContent.includes('Bilgisayar')) {
            h4.textContent = translations[lang].university;
        } else if (h4.textContent.includes('Lise')) {
            h4.textContent = translations[lang].highSchool;
        } else {
            h4.textContent = translations[lang].primarySchool;
        }
    });

    // Yetenekler
    document.querySelectorAll('.skill-card h3').forEach(skill => {
        if (skill.textContent.includes('Veritabanı')) {
            skill.textContent = translations[lang].database;
        } else if (skill.textContent.includes('Frontend')) {
            skill.textContent = translations[lang].frontend;
        } else if (skill.textContent.includes('Proje')) {
            skill.textContent = translations[lang].projectManagement;
        }
    });

    // Footer
    document.querySelector('.footer-content p').textContent = 
        `© 2025 Yunus Akçiçek. ${translations[lang].copyright}`;

    // İş deneyimi başlıkları ve açıklamaları
    document.querySelectorAll('.timeline-content').forEach(content => {
        const h3 = content.querySelector('h3');
        const h4 = content.querySelector('h4');
        const description = content.querySelector('.description');
        
        // Staj kısmını kontrol et
        if (h3.textContent.includes('Staj') || h3.textContent.includes('Internship')) {
            h3.textContent = translations[lang].internship;
            h4.textContent = translations[lang].dengeCompany;
            if (description) {
                description.innerHTML = `
                    <p>${translations[lang].hrProject}</p>
                    <ul>
                        ${translations[lang].hrFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                `;
            }
        }
        // Test mühendisi kısmını kontrol et
        else if (h3.textContent.includes('Test')) {
            h3.textContent = translations[lang].testEngineer;
            h4.textContent = translations[lang].optiimCompany;
            updateProjectDescription(description, 'test', lang);
        }
        // Backend geliştirici kısmını kontrol et
        else if (h3.textContent.includes('Backend')) {
            h3.textContent = translations[lang].netBackend;
            h4.textContent = translations[lang].dengeCompany;
            updateProjectDescription(description, 'erp', lang);
        }
    });
}

// Proje açıklamalarını güncellemek için yardımcı fonksiyon
function updateProjectDescription(element, type, lang) {
    if (!element) return;

    switch(type) {
        case 'erp':
            element.innerHTML = `
                <p>${translations[lang].erpSolutions}</p>
                <ul>
                    ${translations[lang].erpFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <p>${translations[lang].techStack}</p>
                <ul>
                    ${translations[lang].technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            `;
            break;
        case 'test':
            element.innerHTML = `
                <p>${translations[lang].testExperience}</p>
                <ul>
                    ${translations[lang].testFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
            break;
        case 'hr':
            element.innerHTML = `
                <p>${translations[lang].hrProject}</p>
                <ul>
                    ${translations[lang].hrFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
            break;
    }

    // Şirket ismini ve tarihi güncelle
    const h4 = element.parentElement.querySelector('h4');
    const date = element.parentElement.querySelector('.date');
    
    if (h4 && h4.textContent.includes('Denge')) {
        h4.textContent = translations[lang].dengeCompany;
    } else if (h4 && h4.textContent.includes('Optiim')) {
        h4.textContent = translations[lang].optiimCompany;
    }
}

// Mobil navigasyon için hamburger menü
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Blog yazılarını yükle
function loadPosts() {
    const featuredPostsContainer = document.getElementById('featuredPosts');
    const recentPostsContainer = document.getElementById('recentPosts');

    // Öne çıkan yazıları filtrele ve göster
    const featuredPosts = posts.filter(post => post.featured);
    featuredPosts.forEach(post => {
        featuredPostsContainer.appendChild(createPostCard(post));
    });

    // Son yazıları göster
    posts.slice(0, 6).forEach(post => {
        recentPostsContainer.appendChild(createPostCard(post));
    });
}

// Blog yazısı kartı oluştur
function createPostCard(post) {
    const card = document.createElement('article');
    card.className = 'post-card';
    
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">${post.date}</div>
        </div>
    `;

    card.addEventListener('click', () => {
        // Blog yazısı detay sayfasına yönlendirme
        window.location.href = `/post/${post.id}`;
    });

    return card;
}

// Sayfa kaydırma animasyonu
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Smooth scroll için yardımcı fonksiyon
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop - 80; // navbar height için offset
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing fonksiyonu
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Nav linklerine smooth scroll ekle
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScroll(targetId, 1000); // 1000ms = 1 saniye
    });
});

// Intersection Observer kurulumu
function initializeIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
} 