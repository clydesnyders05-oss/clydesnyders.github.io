<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clyde Snyders - 3D Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three-orbitcontrols-ts@0.1.2/lib/index.min.js"></script>
    
  <style>
        :root {
            --primary: #0052cc;
            --secondary: #0d8fff;
            --accent: #fde68a;
            --light-bg: #f8f9fa;
            --text-main: #22223b;
            --text-light: #6b7280;
            --header-font: 'Montserrat', sans-serif;
            --body-font: 'Roboto', sans-serif;
        }
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: var(--body-font);
            background: var(--light-bg);
            color: var(--text-main);
            overflow-x: hidden;
        }
        /* Preloader */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--light-bg);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease-out;
        }
        .loader {
            border: 8px solid #f3f3f3;
            border-top: 8px solid var(--primary);
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        nav {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 16px rgba(13,143,255,0.1);
            border-bottom: 1px solid #e5e7eb;
            position: sticky;
            top: 0;
            z-index: 50;
        }
        .nav-link {
            position: relative;
            color: var(--text-main);
            font-weight: 500;
            padding: 0.5em 1.2em;
            transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active {
            color: var(--secondary);
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: var(--secondary);
            transition: width 0.3s ease;
        }
        .nav-link.active::after {
            width: 50%;
        }

        /* Hero Section */
        .hero {
            position: relative;
            width: 100%;
            height: 100vh;
            background: linear-gradient(120deg, #0d8fff 0%, #0052cc 100%);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #three-canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
        }
        .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            color: white;
            padding: 2rem;
        }
        .hero-title {
            font-family: var(--header-font);
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 700;
        }
        .section {
            padding: 5rem 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        .section-title {
            font-size: clamp(2.2rem, 5vw, 2.8rem);
            font-family: var(--header-font);
            font-weight: 700;
            text-align: center;
            margin-bottom: 1.2rem;
            color: var(--primary);
        }
        .section-subtitle {
            text-align: center;
            color: var(--text-light);
            font-size: 1.1rem;
            margin-bottom: 3rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        .card {
            background: white;
            border-radius: 1.2em;
            padding: 2em;
            box-shadow: 0 4px 25px rgba(0,82,204,0.08);
            margin-bottom: 1.5em;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 40px rgba(13,143,255,0.12);
        }

        /* Gallery Section */
        .gallery-filters {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2.5rem;
            flex-wrap: wrap;
        }
        .filter-btn {
            background: #e0e7ef;
            color: var(--text-main);
            border: none;
            padding: 0.6em 1.5em;
            border-radius: 999px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
        }
        .filter-btn:hover, .filter-btn.active {
            background: var(--primary);
            color: white;
        }
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        .gallery-item {
            border-radius: 1em;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        .gallery-item:hover img {
            transform: scale(1.05);
        }
        .gallery-item .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 82, 204, 0.7);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 700;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .gallery-item:hover .overlay {
            opacity: 1;
        }
        
        /* Lightbox Modal */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            z-index: 1001;
            display: none;
            align-items: center;
            justify-content: center;
        }
        .lightbox-content {
            max-width: 90vw;
            max-height: 90vh;
        }
        .lightbox-close {
            position: absolute;
            top: 2rem;
            right: 2rem;
            color: white;
            font-size: 2.5rem;
            cursor: pointer;
        }

        /* Blog Section */
        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
        }
        .blog-card {
            background: white;
            border-radius: 1em;
            overflow: hidden;
            box-shadow: 0 4px 25px rgba(0,82,204,0.08);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 40px rgba(13,143,255,0.12);
        }
        .blog-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .blog-card-content {
            padding: 1.5em;
        }
        .blog-title {
            font-family: var(--header-font);
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        .blog-meta {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        .blog-excerpt {
            color: var(--text-main);
            margin-bottom: 1.2rem;
        }
        .read-more-btn {
            color: var(--secondary);
            font-weight: 700;
            text-decoration: none;
        }

        /* Footer */
        .footer {
            background: var(--text-main);
            color: #f8f9fa;
        }
        
        /* Back to top button */
        #back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--primary);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
            z-index: 40;
        }
        #back-to-top:hover {
            background: var(--secondary);
            transform: scale(1.1);
        }
        #back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        /* Mobile Nav */
        #mobile-menu-btn {
            display: none;
            z-index: 60;
        }
        #mobile-nav {
            position: fixed;
            top: 0;
            left: -100%;
            width: 70%;
            height: 100%;
            background: white;
            z-index: 55;
            transition: left 0.3s ease-in-out;
            padding-top: 5rem;
        }
        @media (max-width: 768px) {
            #desktop-nav { display: none; }
            #mobile-menu-btn { display: block; }
        }

    </style>
</head>
<body>
    <div id="preloader">
        <div class="loader"></div>
    </div>
    
<nav class="flex items-center justify-between px-6 py-4">
        <div class="font-bold text-2xl" style="font-family: var(--header-font);"><a href="#home">Clyde Snyders</a></div>
        <div id="desktop-nav" class="space-x-2">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#academics" class="nav-link">Academics</a>
            <a href="#achievements" class="nav-link">Achievements</a>
            <a href="#gallery" class="nav-link">Gallery</a>
            <a href="#blog" class="nav-link">Blog</a>
            <a href="#timeline" class="nav-link">Trajectory</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-btn" class="md:hidden text-2xl">
            <i class="fas fa-bars"></i>
        </button>
    </nav>

  <div id="mobile-nav" class="flex flex-col items-center space-y-6">
        <a href="#home" class="nav-link text-xl">Home</a>
        <a href="#about" class="nav-link text-xl">About</a>
        <a href="#academics" class="nav-link text-xl">Academics</a>
        <a href="#achievements" class="nav-link text-xl">Achievements</a>
        <a href="#gallery" class="nav-link text-xl">Gallery</a>
        <a href="#blog" class="nav-link text-xl">Blog</a>
        <a href="#timeline" class="nav-link text-xl">Trajectory</a>
        <a href="#contact" class="nav-link text-xl">Contact</a>
    </div>

 <section id="home" class="hero" data-aos="fade-in">
        <canvas id="three-canvas"></canvas>
        <div class="hero-content">
            <h1 class="hero-title">Clyde Snyders</h1>
            <div class="hero-subtitle">
                Grade 9 Student | Paterson High School | Eastern Cape
            </div>
            <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0021.jpg?raw=true" alt="C.Snyders" class="mx-auto rounded-lg shadow-md mt-4 w-50 h-64">
        </div>
    </section>
    
  <section id="about" class="section" data-aos="fade-up">
        <div class="section-title">About Me</div>
    <div class="section-subtitle">A driven and curious student, passionate about science, technology, and growth.</div>
    <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="md:w-1/3 text-center">
            <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0008.jpg?raw=true" 
  alt="C.Snyders"
  class="mx-auto w-70 h-70 rounded-full object-cover shadow-lg">
        </div>
        <div class="md:w-2/3">
            <p class="mb-4" style="font-size:1.13em;">
                Hi, my name is Clyde Snyders and I am a grade 9 student at Paterson High School in the vibrant Eastern Cape. My journey into the world of STEM wasn't a single moment but a gradual awakening. It started with a simple fascination for how things work—taking apart old electronics and trying to put them back together.
            </p>
            <p class="mb-4" style="font-size:1.13em;">
                My true inspiration, however, came from my mom, who saw my potential and encouraged from the start up until where I am now . This showed me that my passion could be transformed into tangible creations. I'm driven by the desire to solve real-world problems. Whether it’s building robots, exploring physics, performing well in academics, or collaborating on team projects, I believe every challenge is an opportunity to learn, innovate, and contribute to a better future.
            </p>
        </div>
    </div>
    </section>
    <section id="academics" class="section" data-aos="fade-up">
        <div class="section-title">Academic Performance</div>
        <div class="section-subtitle">My Grade 9 results reflect a commitment to excellence across diverse subjects.</div>
        <div class="card overflow-x-auto max-w-2xl mx-auto">
            <table class="w-full text-left">
                <thead>
                    <tr class="border-b border-gray-200">
                        <th class="py-2 px-4">Subject</th>
                        <th class="py-2 px-4">Score (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="py-2 px-4">Mathematics</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="92">0</span>%</td></tr>
                    </tbody>
            </table>
        </div>
    </section>
    <section id="achievements" class="section" data-aos="fade-up">
        <div class="section-title">Key Achievements</div>
        <div class="section-subtitle">Milestones from national and international competitions.</div>
        <div class="achievements-grid">
            </div>
    </section>
    
 <section id="gallery" class="section" data-aos="fade-up">
        <div class="section-title">Gallery</div>
        <div class="section-subtitle">A visual journey through my projects, competitions, and awards.</div>
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="robotics">Robotics</button>
            <button class="filter-btn" data-filter="expo">Science Expo</button>
            <button class="filter-btn" data-filter="awards">Awards</button>
        </div>
        <div class="gallery-grid">
            <div class="gallery-item" data-category="robotics" data-aos="zoom-in">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0002.jpg?raw=true" alt="Robotics Project">
                <div class="overlay">WRO 2024</div>
            </div>
            <div class="gallery-item" data-category="expo" data-aos="zoom-in" data-aos-delay="100">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0003.jpg?raw=true" alt="Science Expo">
                <div class="overlay">Regional Science Fair</div>
            </div>
             <div class="gallery-item" data-category="awards" data-aos="zoom-in" data-aos-delay="200">
                <img src="https://placehold.co/400x400/0052cc/fde68a?text=Gold+Medal" alt="Award Ceremony">
                <div class="overlay">Gold Medal</div>
            </div>
            </div>
    </section>

  <section id="blog" class="section" data-aos="fade-up">
        <div class="section-title">My Blog</div>
        <div class="section-subtitle">Sharing my thoughts on technology, learning experiences, and project deep dives.</div>
        <div class="blog-grid">
            <div class="blog-card" data-aos="fade-up">
                <img src="https://placehold.co/600x400/0d8fff/ffffff?text=Robotics+Insights" alt="Blog Post Image">
                <div class="blog-card-content">
                    <div class="blog-meta">August 25, 2025 | Robotics</div>
                    <h3 class="blog-title">Lessons from the World Robot Olympiad</h3>
                    <p class="blog-excerpt">Competing on a global stage was an incredible experience. Here are my key takeaways on teamwork, resilience, and creative problem-solving...</p>
                    <a href="#" class="read-more-btn">Read More &rarr;</a>
                </div>
            </div>
            <div class="blog-card" data-aos="fade-up" data-aos-delay="100">
                <img src="https://placehold.co/600x400/0052cc/ffffff?text=Science+Expo+Journey" alt="Blog Post Image">
                <div class="blog-card-content">
                    <div class="blog-meta">August 15, 2025 | Science Expo</div>
                    <h3 class="blog-title">From Hypothesis to Gold Medal</h3>
                    <p class="blog-excerpt">My journey through the Regional Science Expo, from the initial idea for my physics project to presenting it to the judges...</p>
                    <a href="#" class="read-more-btn">Read More &rarr;</a>
                </div>
            </div>
            </div>
    </section>

 <section id="timeline" class="section" data-aos="fade-up">
        <div class="section-title">My Trajectory</div>
        <div class="section-subtitle">Key milestones shaping my high school journey.</div>
        <ul class="timeline-list">
             </ul>
    </section>
    
  <section id="contact" class="section" data-aos="fade-up">
        <div class="section-title">Get In Touch</div>
        <div class="section-subtitle">I'm always open to new challenges and opportunities. Let's connect!</div>
        <div class="max-w-xl mx-auto card">
            </div>
    </section>
    
 <footer class="footer">
        </footer>
    
<div class="lightbox">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" src="" alt="Enlarged gallery view">
    </div>

  <a href="#home" id="back-to-top" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
    </a>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
        document.addEventListener('DOMContentLoaded', () => {
            // --- PRELOADER ---
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                preloader.style.opacity = '0';
                setTimeout(() => { preloader.style.display = 'none'; }, 500);
            });

            AOS.init({ once: true, duration: 900 });

            // --- ADVANCED NAVIGATION ---
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');

            const activateNavLink = (id) => {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            };

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activateNavLink(entry.target.id);
                    }
                });
            }, { rootMargin: '-30% 0px -70% 0px' });
            
            sections.forEach(sec => observer.observe(sec));

            mobileMenuBtn.addEventListener('click', () => {
                const isOpen = mobileNav.style.left === '0px';
                mobileNav.style.left = isOpen ? '-100%' : '0px';
            });
            document.querySelectorAll('#mobile-nav a').forEach(link => {
                link.addEventListener('click', () => mobileNav.style.left = '-100%');
            });


            // --- GALLERY FILTER & LIGHTBOX ---
            const filterBtns = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            const lightbox = document.querySelector('.lightbox');
            const lightboxContent = document.querySelector('.lightbox-content');
            const lightboxClose = document.querySelector('.lightbox-close');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filter = btn.dataset.filter;
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    lightbox.style.display = 'flex';
                    lightboxContent.src = item.querySelector('img').src;
                });
            });

            const closeLightbox = () => lightbox.style.display = 'none';
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
            lightboxClose.addEventListener('click', closeLightbox);


            // --- BACK TO TOP BUTTON ---
            const backToTopBtn = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });
        
            // Add other JS functionalities from the original file (Counters, Typing, etc.)
            // ...

        });
        
        // --- THREE.JS SCENE (from original file) ---
        window.onload = function () {
            // The entire Three.js code from the original file goes here.
            const scene = new THREE.Scene();
            // ... rest of the 3D scene script
        };
    </script>
</body>
</html>
