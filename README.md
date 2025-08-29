<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clyde Snyders - Advanced 3D Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    
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
            transition: opacity 0.5s ease-out, visibility 0.5s;
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

        /* Advanced Navigation */
        nav {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
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
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2em;
        }
        .skill-bar-bg {
            background: #e0e7ef;
            border-radius: 999px;
            height: 12px;
            overflow: hidden;
            margin-top: 6px;
        }
        .skill-bar {
            height: 12px;
            border-radius: 999px;
            background: linear-gradient(90deg, #0d8fff, #0052cc);
        }
        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 2em;
        }
        .achievement-title {
            font-size: 1.2em;
            font-weight: 700;
            color: var(--secondary);
        }
        .achievement-year {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 0.5em;
        }
        .timeline-list {
            border-left: 4px solid var(--primary);
            padding-left: 2em;
            margin-top: 2em;
            list-style: none;
        }
        .timeline-list li {
            position: relative;
            margin-bottom: 1.6em;
            font-size: 1.1em;
        }
        .timeline-list li::before {
            content: '';
            position: absolute;
            left: -2.4em;
            top: 0.25em;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: var(--accent);
            border: 2px solid var(--primary);
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
            aspect-ratio: 1 / 1;
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
            text-align: center;
            padding: 1rem;
        }
        .gallery-item:hover .overlay {
            opacity: 1;
        }
        
        /* Lightbox Modal & Blog Modal */
        .modal-overlay {
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
            padding: 1rem;
        }
        .modal-content-wrapper {
            max-width: 90vw;
            max-height: 90vh;
            position: relative;
        }
        .modal-close-btn {
            position: absolute;
            top: -2.5rem;
            right: 0;
            color: white;
            font-size: 2.5rem;
            cursor: pointer;
            line-height: 1;
        }
        .lightbox-content {
             border-radius: 0.5em;
        }
        .blog-modal-content {
            background: white;
            border-radius: 0.5em;
            padding: 2rem;
            max-width: 800px;
            max-height: 85vh;
            overflow-y: auto;
        }
        .blog-modal-title {
            font-family: var(--header-font);
            font-size: 2rem;
            color: var(--primary);
        }
        .blog-modal-meta {
            color: var(--text-light);
            margin: 0.5rem 0 1.5rem;
        }
        .blog-modal-body p {
            margin-bottom: 1rem;
            line-height: 1.6;
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
            display: flex;
            flex-direction: column;
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
            flex-grow: 1;
            display: flex;
            flex-direction: column;
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
            flex-grow: 1;
        }
        .read-more-btn {
            color: var(--secondary);
            font-weight: 700;
            text-decoration: none;
            align-self: flex-start;
            cursor: pointer;
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
            transform: translateY(20px);
            transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
            z-index: 40;
        }
        #back-to-top:hover {
            background: var(--secondary);
            transform: scale(1.1) translateY(0);
        }
        #back-to-top.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
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
            max-width: 300px;
            height: 100%;
            background: white;
            z-index: 55;
            transition: left 0.3s ease-in-out;
            padding-top: 5rem;
            box-shadow: 4px 0 15px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
            #desktop-nav { display: none; }
            #mobile-menu-btn { display: block; }
        }

    </style>
</head>
<body>
    <!-- PRELOADER -->
    <div id="preloader">
        <div class="loader"></div>
    </div>
     <!-- NAVIGATION -->
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
            <a href="#inspiration" class="nav-link">Inspiration</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-btn" class="md:hidden text-2xl">
            <i class="fas fa-bars"></i>
        </button>
    </nav>
  <!-- MOBILE NAVIGATION MENU -->
    <div id="mobile-nav" class="flex flex-col items-center space-y-6">
        <a href="#home" class="nav-link text-xl">Home</a>
        <a href="#about" class="nav-link text-xl">About</a>
        <a href="#academics" class="nav-link text-xl">Academics</a>
        <a href="#achievements" class="nav-link text-xl">Achievements</a>
        <a href="#gallery" class="nav-link text-xl">Gallery</a>
        <a href="#blog" class="nav-link text-xl">Blog</a>
        <a href="#timeline" class="nav-link text-xl">Trajectory</a>
        <a href="#inspiration" class="nav-link text-xl">Inspiration</a>
        <a href="#contact" class="nav-link text-xl">Contact</a>
    </div>
  <!-- HERO SECTION -->
    <section id="home" class="hero" data-aos="fade-in">
        <canvas id="three-canvas"></canvas>
        <div class="hero-content">
            <h1 class="hero-title">Clyde Snyders</h1>
            <div class="hero-subtitle">
                Grade 9 Student | Paterson High School | Eastern Cape
            </div>
            <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0021.jpg?raw=true" alt="C.Snyders" class="mx-auto rounded-lg shadow-md mt-4 w-50 h-64">
            <div style="margin-top:2em;">
                <span id="typing-effect" class="text-xl md:text-2xl" style="font-family:monospace;"></span>
            </div>
        </div>
    </section>
     <!-- ABOUT SECTION -->
    <section id="about" class="section" data-aos="fade-up">
        <div class="section-title">About Me</div>
        <div class="section-subtitle">A driven and curious student, passionate about science, technology, and growth.</div>
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/3 text-center">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0008.jpg?raw=true" alt="C.Snyders" class="mx-auto w-70 h-70 rounded-full object-cover shadow-lg">
            </div>
            <div class="md:w-2/3">
                <p class="mb-4 text-lg">
                    Hi, my name is Clyde Snyders and I am a grade 9 student at Paterson High School in the vibrant Eastern Cape. My journey into the world of STEM wasn't a single moment but a gradual awakening. It started with a simple fascination for how things work—taking apart old electronics and trying to put them back together.
                </p>
                <p class="mb-4 text-lg">
                    My true inspiration, however, came from my mom, who saw my potential and encouraged me from the start. This showed me that my passion could be transformed into tangible creations. I'm driven by the desire to solve real-world problems. Whether it’s building robots, exploring physics, or collaborating on team projects, I believe every challenge is an opportunity to learn, innovate, and contribute to a better future.
                </p>
                <h3 class="text-2xl font-bold mb-4 mt-8" style="font-family:var(--header-font);">Core Skills</h3>
                <div class="skills-grid">
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Mathematics</span><span>92%</span></div>
                        <div class="skill-bar-bg"><div class="skill-bar" style="width:92%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Natural Science</span><span>81.5%</span></div>
                        <div class="skill-bar-bg"><div class="skill-bar" style="width:81.5%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Robotics</span><span>88%</span></div>
                        <div class="skill-bar-bg"><div class="skill-bar" style="width:88%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Engineering Design</span><span>85%</span></div>
                        <div class="skill-bar-bg"><div class="skill-bar" style="width:85%"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
       <!-- ACADEMICS SECTION -->
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
                    <tr><td class="py-2 px-4">Natural Science</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="81.5">0</span>%</td></tr>
                    <tr><td class="py-2 px-4">Social Science</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="95.5">0</span>%</td></tr>
                    <tr><td class="py-2 px-4">Technology</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="87.5">0</span>%</td></tr>
                    <tr><td class="py-2 px-4">EMS</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="83.79">0</span>%</td></tr>
                    <tr><td class="py-2 px-4">Creative Arts</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="82.22">0</span>%</td></tr>
                    <tr><td class="py-2 px-4">English</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="74">0</span>%</td></tr>
                    <tr><td class="py-2 px-4">Afrikaans</td><td class="py-2 px-4 font-bold"><span class="counter" data-count="72">0</span>%</td></tr>
                </tbody>
            </table>
        </div>
    </section>
   <!-- ACHIEVEMENTS SECTION -->
    <section id="achievements" class="section" data-aos="fade-up">
        <div class="section-title">Key Achievements</div>
        <div class="section-subtitle">Milestones from national and international competitions.</div>
        <div class="achievements-grid">
            <div class="card" data-aos="zoom-in">
                <div class="achievement-title">Gold Medal: Regional Science Expo</div>
                <div class="achievement-year">2025</div>
                <p>Awarded a gold medal for the second consecutive year and won Best Category in Physics. Showcased a passion for experimentation and discovery.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="100">
                <div class="achievement-title">Gold Medal: Springbots Robotics</div>
                <div class="achievement-year">2025</div>
                <p>Won gold at the regional Springbots robotics competition, later placing 6th nationally. Led a team in designing and programming innovative robots.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
                <div class="achievement-title">4th Place Winner: World Robot Olympiad (WRO)</div>
                <div class="achievement-year">2025</div>
                <p>Secured 4th place in the World Robot Olympiad, competing with top students from various schools. Demonstrated creativity, problem solving and resilience under pressure.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="300">
                <div class="achievement-title">Gold Medal: Regional Science Fair</div>
                <div class="achievement-year">2024</div>
                <p>Secured a Gold in the 'Engineering' category at regional science fair, competing with top students with different projects in my region.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="400">
                <div class="achievement-title">Bronze Medal: International Science Fair (ISF)</div>
                <div class="achievement-year">2024</div>
                <p>Secured a bronze in the 'Engineering' category at ISF, competing with top students globally. Demonstrated creativity and resilience under pressure.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="500">
                <div class="achievement-title">Bronze Medal: World Robot Olympiad</div>
                <div class="achievement-year">2024</div>
                <p>Achieved a bronze at WRO, representing the Eastern Cape internationally and collaborating with diverse teams.</p>
            </div>
        </div>
    </section>
     <!-- GALLERY SECTION -->
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
            <div class="gallery-item" data-category="robotics" data-aos="zoom-in" data-aos-delay="300">
                <img src="https://placehold.co/400x400/0d8fff/ffffff?text=Robotics+Team" alt="Robotics Team">
                <div class="overlay">Springbots Team</div>
            </div>
        </div>
    </section>
   <!-- BLOG SECTION -->
    <section id="blog" class="section" data-aos="fade-up">
        <div class="section-title">My Blog</div>
        <div class="section-subtitle">Sharing my thoughts on technology, learning experiences, and project deep dives.</div>
        <div class="blog-grid">
            <!-- Blog cards will be dynamically generated by JavaScript -->
        </div>
    </section>
  <!-- TIMELINE SECTION -->
    <section id="timeline" class="section" data-aos="fade-up">
        <div class="section-title">My Trajectory</div>
        <div class="section-subtitle">Key milestones shaping my high school journey.</div>
        <ul class="timeline-list">
             <li><strong>Aug 2025:</strong> 4th Place Winner at World Robot Olympiad (WRO) — Achieved a certificate.</li>
            <li><strong>Aug 2025:</strong> Repeat Gold at Regional Science Fair — Won a second gold and Best Category award in Physics.</li>
            <li><strong>Jun 2025:</strong> 6th Place at National Springbots — Secured a sixth-place finish nationally.</li>
            <li><strong>May 2025:</strong> Gold at Regional Springbots — Won the gold medal at regional robotics.</li>
            <li><strong>Oct 2024:</strong> Bronze at International Science Fair (ISF) — Won a bronze medal in engineering.</li>
            <li><strong>Aug 2024:</strong> Bronze at World Robot Olympiad (WRO) — Achieved a bronze medal in robotics.</li>
            <li><strong>Aug 2024:</strong> Gold at Regional Science Fair — In my first year participating, I secured a gold medal.</li>
            <li><strong>Jan 2024:</strong> Joined Paterson High — Began my high school journey with a focus on academic excellence.</li>
        </ul>
    </section>
  <!-- INSPIRATION SECTION -->
    <section id="inspiration" class="section" data-aos="fade-up">
        <div class="section-title">Daily Inspiration</div>
        <div class="section-subtitle">A little motivation to keep going.</div>
        <div class="max-w-xl mx-auto card text-center">
            <div id="quote-container" class="text-xl italic mb-4">
                "The future belongs to those who believe in the beauty of their dreams."
            </div>
            <div id="quote-author" class="font-bold text-gray-600">
                - Eleanor Roosevelt
            </div>
            <button id="generate-quote-btn" class="mt-6 px-6 py-2 bg-secondary text-white font-bold rounded-lg transition-colors duration-200 hover:bg-primary">
                Generate a new quote
            </button>
        </div>
    </section>
     <!-- CONTACT SECTION -->
    <section id="contact" class="section" data-aos="fade-up">
        <div class="section-title">Get In Touch</div>
        <div class="section-subtitle">I'm always open to new challenges and opportunities. Let's connect!</div>
        <div class="max-w-xl mx-auto card">
           <form 
    action="https://formspree.io/f/xgvlvvnn" method="POST" class="contact-form"> 
  <label class="block mb-4"> 
    <span class="text-gray-700">Your Email:</span> 
    <input type="email" name="email" class="mt-1 block w-full" placeholder="you@example.com" required> 
  </label> 
  <label class="block mb-4"> 
    <span class="text-gray-700">Your Message:</span> 
    <textarea name="message" rows="4" class="mt-1 block w-full" placeholder="Let's build something amazing together!" required></textarea> 
  </label> 
  <button type="submit" class="w-full">Send Message</button> 
</form>
        </div>
    </section>
     <!-- FOOTER -->
    <footer class="footer text-center py-10">
        <div>© 2025 Clyde Snyders — All rights reserved.</div>
    </footer>
     <!-- MODALS -->
    <!-- Gallery Lightbox Modal -->
    <div id="lightbox-modal" class="modal-overlay">
        <div class="modal-content-wrapper">
            <span class="modal-close-btn" id="lightbox-close-btn">&times;</span>
            <img class="lightbox-content" src="" alt="Enlarged gallery view">
        </div>
    </div>
 <!-- Blog Post Modal -->
    <div id="blog-modal" class="modal-overlay">
        <div class="modal-content-wrapper">
            <span class="modal-close-btn" id="blog-close-btn">&times;</span>
            <div class="blog-modal-content">
                <h2 id="blog-modal-title" class="blog-modal-title"></h2>
                <div id="blog-modal-meta" class="blog-modal-meta"></div>
                <div id="blog-modal-body" class="blog-modal-body"></div>
            </div>
        </div>
    </div>
  <!-- BACK TO TOP BUTTON -->
    <a href="#home" id="back-to-top" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
    </a>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
   <script>
        // --- MASTER SCRIPT FOR ALL PAGE FUNCTIONALITY ---
        document.addEventListener('DOMContentLoaded', () => {
            
            // --- DATA ---
            const blogPosts = [
                {
                    id: 1,
                    title: "Robotics is a Sport",
                    meta: "August 23, 2025 | WRO",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0023.jpg?raw=true",
                    excerpt: "A team of 3 learners, Me(Clyde Snyders), CAYZEN HAUPT, and ASAVELA VUMISA, represented Paterson High at the annual World Robotics Olympiad in Makhanda! 🤖🇿🇦,Robotics is no longer just a field of engineering; it is the language through which we will converse with the future....",
                    fullContent: `<p>The World Robot Olympiad was more than just a competition; it was a marathon of innovation, pressure, and collaboration. Our team spent months designing, building, and programming our robot. The biggest lesson I learned was the importance of adaptability. When our main robots wheel failed just hours before the final round, we had to quickly redesign and change our code and recalibrate everything. It was stressful, but we pulled together and managed to secure 4th place.</p><p>Another key takeaway was the power of collaboration. Seeing how teams from various schools compete and approached the same problem with completely different strategies was eye-opening. It taught me that there's never just one right answer in engineering.</p>`
                },
                {
                    id: 2,
                    title: "Science in Action",
                    meta: "August 22, 2025 | Science Week",
                    image: "https://placehold.co/600x400/0052cc/ffffff?text=Science+Expo+Journey",
                    excerpt: "NATIONAL SCIENCE WEEK at NMU as a future scientist and engineer. I got to engaged with different science stations and interacted with peers from other schools....",
                    fullContent: `<p>🌟Hands-on activities in robotics, environmental science, and more sparked my curiosity and enthusiasm for science and engineering, inspiring me to continue exploring and contributing to scientific advancements. The experience not only deepened my understanding of scientific concepts but also fueled my passion for innovation and discovery. I'm excited to see where my interest in science and engineering takes me!.</p><p> The importance thing is not to stop questioning. Curiosity has its own reason for existance ~ Albert Einstein..</p>`
                },
                {
                    id: 3,
                    title: "Inspiring Talks",
                    meta: "August 19, 2025 | Motivating",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0015.jpg?raw=true",
                    excerpt: "I had the privilege of speaking at the Rotary Club for Algoa Bay Lunch, where I shared my insights and experiences with the members. The event was a great opportunity to connect with people and sharing my story....",
                    fullContent: `<p>As a token of appreciation for my visit, the Rotary Club gifted me with a travel bag and other goodies in preparation for my upcoming trip to Panama. Their thoughtfulness and generosity are truly appreciated!.</p>`
                },
                {
                    id: 4,
                    title: "The Importance of Prototyping",
                    meta: "July 10, 2025 | Engineering",
                    image: "https://placehold.co/600x400/fde68a/22223b?text=Prototyping",
                    excerpt: "Fail fast, learn faster. Why building physical prototypes is the most important step in the design process...",
                    fullContent: `<p>In both robotics and my science fair projects, I've learned that you can't perfect a design on paper. Building a physical prototype, no matter how rough, is essential. It reveals flaws in your thinking that you'd never see otherwise. My first robot for the Springbots competition could barely move in a straight line! But that failure taught me more than any textbook could. Each iteration, each broken part, is a lesson that leads to a better final product.</p>`
                },
                {
                    id: 5,
                    title: "Balancing Academics and Competitions",
                    meta: "June 25, 2025 | Student Life",
                    image: "https://placehold.co/600x400/0052cc/ffffff?text=Time+Management",
                    excerpt: "Juggling homework, exams, and international competitions isn't easy. Here are some strategies that have worked for me...",
                    fullContent: `<p>People often ask me how I manage my schoolwork while preparing for major competitions. The key is rigorous time management and prioritizing tasks. I use a digital calendar to block out my time for studying, building, programming, and relaxing. It's crucial to be disciplined but also to know when to take a break to avoid burnout. It's a balancing act, but the skills I'm learning in time management are just as valuable as the technical skills.</p>`
                },
                {
                    id: 6,
                    title: "My Favourite Programming Language: Python",
                    meta: "June 5, 2025 | Coding",
                    image: "https://placehold.co/600x400/0d8fff/ffffff?text=Python+Code",
                    excerpt: "Why Python is my go-to language for robotics, data analysis, and exploring new ideas...",
                    fullContent: `<p>I've experimented with a few programming languages, but I always come back to Python. Its clean syntax makes it easy to learn and read, but beneath that simplicity is a powerful ecosystem of libraries. For robotics, libraries like OpenCV for computer vision are invaluable. For my science projects, NumPy and Matplotlib are essential for data analysis and visualization. It's the perfect language for a student who wants to quickly turn ideas into reality.</p>`
                },
                {
                    id: 7,
                    title: "The Physics of Everyday Objects",
                    meta: "May 20, 2025 | Science",
                    image: "https://placehold.co/600x400/22223b/fde68a?text=Physics",
                    excerpt: "How a deeper understanding of physics can change the way you see the world around you...",
                    fullContent: `<p>Studying physics has been like getting a new pair of eyes. Suddenly, a simple act like throwing a ball becomes a beautiful interplay of gravity, momentum, and air resistance. A microwave oven is a fascinating application of electromagnetic waves. This perspective makes the world a much more interesting place and constantly sparks new ideas for projects and experiments.</p>`
                },
                {
                    id: 8,
                    title: "What's Next? My Goals for Grade 10",
                    meta: "May 1, 2025 | Future",
                    image: "https://placehold.co/600x400/fde68a/22223b?text=Goals",
                    excerpt: "Looking ahead, I'm setting my sights on new challenges and deeper learning in the coming year...",
                    fullContent: `<p>As I look towards Grade 10, my goals are to dive deeper into advanced mathematics and physics. I also want to take on a leadership role in my school's robotics club, helping to mentor younger students. On the competition front, I'm aiming for a podium finish at the WRO and want to develop a science expo project that tackles a real-world environmental problem.</p>`
                },
                {
                    id: 9,
                    title: "The Power of a Team",
                    meta: "April 18, 2025 | Teamwork",
                    image: "https://placehold.co/600x400/0052cc/ffffff?text=Teamwork",
                    excerpt: "No major achievement is a solo effort. A reflection on the importance of collaboration...",
                    fullContent: `<p>Every medal I've won has been the result of a team effort. Whether it's my robotics teammates, my teachers, or my family, their support and collaboration have been essential. Learning to communicate effectively, resolve disagreements, and leverage each person's unique strengths is one of the most important skills I've developed through my STEM journey.</p>`
                },
                {
                    id: 10,
                    title: "Inspiration in Science Fiction",
                    meta: "April 2, 2025 | Inspiration",
                    image: "https://placehold.co/600x400/0d8fff/ffffff?text=Sci-Fi",
                    excerpt: "How the imaginative worlds of science fiction have fueled my passion for real-world science...",
                    fullContent: `<p>From Isaac Asimov's robot stories to the futuristic technology in movies, science fiction has always been a huge source of inspiration for me. It pushes the boundaries of what we think is possible and encourages us to ask 'What if?'. While it's fiction, it often lays the conceptual groundwork for future scientific breakthroughs. It's a reminder that the first step to creating the future is imagining it.</p>`
                }
            ];
            
            const quotes = [
                { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
                { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
                { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
                { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
                { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
                { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
                { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
                { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
                { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" }
            ];

            // --- PRELOADER ---
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            });

            // --- INITIALIZE ANIMATE ON SCROLL ---
            AOS.init({ once: true, duration: 900, offset: 50 });

            // --- ADVANCED NAVIGATION LOGIC ---
            const sections = document.querySelectorAll('section[id]');
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
            const lightboxModal = document.getElementById('lightbox-modal');
            const lightboxContent = lightboxModal.querySelector('.lightbox-content');
            const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

            if (filterBtns.length > 0) {
                filterBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        filterBtns.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        const filter = btn.dataset.filter;
                        galleryItems.forEach(item => {
                            item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
                        });
                    });
                });

                galleryItems.forEach(item => {
                    item.addEventListener('click', () => {
                        lightboxModal.style.display = 'flex';
                        lightboxContent.src = item.querySelector('img').src;
                    });
                });

                const closeLightbox = () => lightboxModal.style.display = 'none';
                lightboxModal.addEventListener('click', (e) => {
                    if (e.target === lightboxModal) closeLightbox();
                });
                lightboxCloseBtn.addEventListener('click', closeLightbox);
            }

            // --- BLOG MODAL LOGIC ---
            const blogGrid = document.querySelector('.blog-grid');
            const blogModal = document.getElementById('blog-modal');
            const blogModalTitle = document.getElementById('blog-modal-title');
            const blogModalMeta = document.getElementById('blog-modal-meta');
            const blogModalBody = document.getElementById('blog-modal-body');
            const blogCloseBtn = document.getElementById('blog-close-btn');

            // Dynamically create blog cards
            blogPosts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'blog-card';
                card.setAttribute('data-aos', 'fade-up');
                card.innerHTML = `
                    <img src="${post.image}" alt="Blog Post Image">
                    <div class="blog-card-content">
                        <div class="blog-meta">${post.meta}</div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <a class="read-more-btn" data-post-id="${post.id}">Read More &rarr;</a>
                    </div>
                `;
                blogGrid.appendChild(card);
            });

            // Add event listeners for "Read More"
            document.querySelectorAll('.read-more-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const postId = parseInt(e.target.dataset.postId);
                    const post = blogPosts.find(p => p.id === postId);
                    if (post) {
                        blogModalTitle.textContent = post.title;
                        blogModalMeta.textContent = post.meta;
                        blogModalBody.innerHTML = post.fullContent;
                        blogModal.style.display = 'flex';
                    }
                });
            });
            
            const closeBlogModal = () => blogModal.style.display = 'none';
            blogModal.addEventListener('click', (e) => {
                if(e.target === blogModal) closeBlogModal();
            });
            blogCloseBtn.addEventListener('click', closeBlogModal);


            // --- BACK TO TOP BUTTON ---
            const backToTopBtn = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                backToTopBtn.classList.toggle('show', window.scrollY > 300);
            });

            // --- TYPING EFFECT ---
            const typeWriter = () => {
                const el = document.getElementById('typing-effect');
                if (!el) return;
                const phrases = [
                    "Curious. Ambitious. Always improving.",
                    "Science. Robotics. Teamwork.",
                    "Chasing greater.",
                    "Let's build something amazing together!"
                ];
                let phraseIndex = 0;
                let charIndex = 0;
                function type() {
                    if (charIndex < phrases[phraseIndex].length) {
                        el.innerHTML += phrases[phraseIndex].charAt(charIndex);
                        charIndex++;
                        setTimeout(type, 80);
                    } else {
                        setTimeout(() => {
                            el.innerHTML = "";
                            charIndex = 0;
                            phraseIndex = (phraseIndex + 1) % phrases.length;
                            type();
                        }, 1800);
                    }
                }
                type();
            };
            typeWriter();

            // --- ANIMATED COUNTERS ---
            const animateCounters = () => {
                const counters = document.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-count');
                        const count = +counter.innerText.replace('%','');
                        const increment = target / 200; // Speed of animation
                        
                        if (count < target) {
                            let newCount = count + increment;
                            if (target % 1 !== 0) { // Check if target is a float
                                counter.innerText = newCount.toFixed(2);
                            } else {
                                counter.innerText = Math.ceil(newCount);
                            }
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };
                     const observer = new IntersectionObserver((entries) => {
                        if (entries[0].isIntersecting) {
                            counter.innerText = '0';
                            updateCount();
                            observer.unobserve(counter);
                        }
                    }, { threshold: 0.8 });
                    observer.observe(counter);
                });
            };
            animateCounters();
            
            // --- QUOTE GENERATOR ---
            const quoteBtn = document.getElementById('generate-quote-btn');
            const quoteEl = document.getElementById('quote-container');
            const authorEl = document.getElementById('quote-author');
            if(quoteBtn) {
                quoteBtn.addEventListener('click', () => {
                    const randomIndex = Math.floor(Math.random() * quotes.length);
                    const newQuote = quotes[randomIndex];
                    quoteEl.textContent = `"${newQuote.quote}"`;
                    authorEl.textContent = `- ${newQuote.author}`;
                });
            }
        });
        
        // --- THREE.JS SCENE ---
        window.addEventListener('load', () => {
            const canvas = document.getElementById('three-canvas');
            if (!canvas) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 50;

            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setClearAlpha(0);

            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 500;
            const posArray = new Float32Array(particlesCount * 3);
            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 100;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({ size: 0.15, color: 0xfde68a });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            const clock = new THREE.Clock();
            const animate = function () {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();
                particlesMesh.rotation.y = elapsedTime * 0.1;
                particlesMesh.rotation.x = elapsedTime * 0.05;
                renderer.render(scene, camera);
            };
            animate();

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
            window.addEventListener('resize', onWindowResize, false);
        });
    </script>
</body>
</html>
