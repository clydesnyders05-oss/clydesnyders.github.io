<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The professional portfolio for Clyde Snyders, a Grade 9 student from Paterson High School specializing in STEM, robotics, and science." />
    <title>Clyde Snyders - Student & Innovator Portfolio</title>
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
        .hero-subtitle-text {
            margin-top: 2em;
            font-family: monospace;
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
            cursor: pointer;
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

        /* Contact Form Button Styling */
        .contact-form button {
            background: var(--secondary);
            color: white;
            font-weight: 700;
            padding: 0.8em 1.5em;
            border-radius: 999px;
            transition: background 0.2s, transform 0.2s;
            border: none;
        }
        .contact-form button:hover {
            background: var(--primary);
            transform: scale(1.05);
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
    <div id="preloader">
        <div class="loader"></div>
    </div>

 <nav class="flex items-center justify-between px-6 py-4">
        <a href="#home" class="font-bold text-2xl" style="font-family: var(--header-font);">Clyde Snyders</a>
        <div id="desktop-nav" class="space-x-2">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#academics" class="nav-link">Academics</a>
            <a href="#achievements" class="nav-link">Achievements</a>
            <a href="#gallery" class="nav-link">Gallery</a>
            <a href="#blog" class="nav-link">Blog</a>
            <a href="#impact" class="nav-link">Impact</a>
            <a href="#timeline" class="nav-link">Trajectory</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-btn" class="md:hidden text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </nav>
    <div id="mobile-nav" class="flex flex-col items-center space-y-6">
        <a href="#home" class="nav-link text-xl">Home</a>
        <a href="#about" class="nav-link text-xl">About</a>
        <a href="#academics" class="nav-link text-xl">Academics</a>
        <a href="#achievements" class="nav-link text-xl">Achievements</a>
        <a href="#gallery" class="nav-link text-xl">Gallery</a>
        <a href="#blog" class="nav-link text-xl">Blog</a>
        <a href="#impact" class="nav-link text-xl">Impact</a>
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
            <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0021.jpg?raw=true" alt="Portrait of Clyde Snyders" class="mx-auto rounded-lg shadow-md mt-4 w-52 h-63">
            <div class="hero-subtitle-text">
                <span id="typing-effect" class="text-xl md:text-2xl"></span>
            </div>
        </div>
   </section>

  <section id="about" class="section" data-aos="fade-up">
        <div class="section-title">About Me</div>
        <div class="section-subtitle">A driven and curious student, passionate about science, technology, and growth.</div>
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/3 text-center">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0008.jpg?raw=true" alt="Clyde Snyders at a school event" class="mx-auto w-70 h-70 rounded-full object-cover shadow-lg">
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
                        <div class="flex justify-between items-center mb-1"><span>Robotics</span><span>99%</span></div>
                        <div class="skill-bar-bg"><div class="skill-bar" style="width:88%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Critical Thinking </span><span>99%</span></div>
                        <div class="skill-bar-bg"><div class="skill-bar" style="width:85%"></div></div>
                    </div>
                </div>
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

 <section id="gallery" class="section" data-aos="fade-up">
        <div class="section-title">Gallery</div>
        <div class="section-subtitle">A visual journey through my projects, competitions, and awards.</div>
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="robotics">Robotics</button>
            <button class="filter-btn" data-filter="expo">Science Expo</button>
            <button class="filter-btn" data-filter="awards">Awards</button>
            <button class="filter-btn" data-filter="community">Community</button>
        </div>
        <div class="gallery-grid">
            <div class="gallery-item" data-category="robotics" data-aos="zoom-in">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0002.jpg?raw=true" alt="Receiving a bronze medal at ISF">
                <div class="overlay">Bronze Medal Winner at ISF</div>
            </div>
            <div class="gallery-item" data-category="expo" data-aos="zoom-in" data-aos-delay="100">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0003.jpg?raw=true" alt="Displaying academic awards">
                <div class="overlay">Academic Awards</div>
            </div>
            <div class="gallery-item" data-category="awards" data-aos="zoom-in" data-aos-delay="200">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0024.jpg?raw=true" alt="Clyde Snyders from Paterson High">
                <div class="overlay">Lad from Paterson High</div>
            </div>
            <div class="gallery-item" data-category="robotics" data-aos="zoom-in" data-aos-delay="300">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0034.jpg?raw=true" alt="Robotics team at Springbots competition">
                <div class="overlay">Springbots National Competition</div>
            </div>
            <div class="gallery-item" data-category="expo" data-aos="zoom-in" data-aos-delay="100">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0022.jpg?raw=true" alt="Attending National Science Week at NMU">
                <div class="overlay">National Science Week at NMU</div>
            </div>
             <div class="gallery-item" data-category="robotics" data-aos="zoom-in">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0023.jpg?raw=true" alt="WRO 2025 Robotics Team">
                <div class="overlay">WRO 2025 Team</div>
            </div>
            <div class="gallery-item" data-category="community" data-aos="zoom-in" data-aos-delay="200">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0024.jpg?raw=true" alt="Speaking at a Rotary Club meeting">
                <div class="overlay">Speaking at Rotary Club</div>
            </div>
             <div class="gallery-item" data-category="awards" data-aos="zoom-in" data-aos-delay="300">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0007.jpg?raw=true" alt="Team holding gold medal for regional Springbots">
                <div class="overlay">Regional Springbots Gold Medal</div>
            </div>
            <div class="gallery-item" data-category="community" data-aos="zoom-in" data-aos-delay="400">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0006.jpg?raw=true" alt="Clyde Snyders during a radio interview">
                <div class="overlay">Radio Interview</div>
            </div>
             <div class="gallery-item" data-category="expo" data-aos="zoom-in" data-aos-delay="500">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0018.jpg?raw=true" alt="Connecting with a peer at the International Science Fair">
                <div class="overlay">Connecting at ISF</div>
            </div>
        </div>
    </section>

  <section id="blog" class="section" data-aos="fade-up">
        <div class="section-title">My Blog</div>
        <div class="section-subtitle">Sharing my thoughts on technology, learning experiences, and project deep dives.</div>
        <div class="blog-grid">
            </div>
    </section>

 <section id="impact" class="section bg-white" data-aos="fade-up">
        <div class="section-title">Impact & Community</div>
        <div class="section-subtitle">Using my skills in STEM to uplift, educate, and innovate for a better community.</div>
        <div class="flex flex-col md:flex-row-reverse gap-8 items-center mb-12">
            <div class="md:w-1/2" data-aos="fade-left">
                <img src="https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0023.jpg?raw=true" alt="Mentoring robotics team" class="rounded-lg shadow-lg w-full">
            </div>
            <div class="md:w-1/2" data-aos="fade-right">
                <h3 class="text-3xl font-bold mb-4" style="font-family:var(--header-font); color: var(--primary);">Peer Mentorship & Knowledge Sharing</h3>
                <p class="mb-4">I lead the "STEM Spark Initiative" at my school, a peer-to-peer mentorship program where senior robotics members guide newcomers. We host weekly workshops on everything from basic block coding to sensor integration. My goal is to demystify complex topics and create a collaborative environment where every student feels empowered to build and innovate.</p>
                <div class="flex items-center text-secondary font-bold">
                     <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span>15+ junior students mentored in 2025.</span>
                </div>
            </div>
        </div>

   <div class="card my-16 bg-gray-50" data-aos="zoom-in-up">
            <div class="text-center mb-6">
                <h3 class="text-3xl font-bold" style="font-family:var(--header-font); color: var(--primary);">Future Forward: AI for Social Good</h3>
                <p class="text-lg text-gray-600 mt-2">Conceptualizing solutions for local challenges with cutting-edge technology.</p>
            </div>
            <div class="flex flex-col md:flex-row gap-8 items-center">
                <div class="md:w-1/3 text-center">
                    <img src="https://placehold.co/400x400/0052cc/FFFFFF?text=AI" alt="AI Project Icon" class="rounded-full w-48 h-48 mx-auto shadow-md border-4 border-white">
                </div>
                <div class="md:w-2/3">
                    <h4 class="achievement-title">Project Impilo: An AI-Powered Health & Science Guide</h4>
                    <p class="my-3">I am developing a concept for "Project Impilo," a web-based application designed to bridge the information gap for students in the Eastern Cape. Leveraging the power of Large Language Models via the Gemini API, this tool aims to provide instant, reliable, and curriculum-aligned answers to science and health questions.</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><strong>Multi-lingual Support:</strong> Offering explanations in English, isiXhosa, and Afrikaans to ensure accessibility for all learners.</li>
                        <li><strong>Curriculum-Aligned Q&A:</strong> Trained on local school curriculum to help students with homework and exam preparation.</li>
                        <li><strong>STEM Career Guidance:</strong> Providing information on local bursaries, university requirements, and potential careers in STEM fields.</li>
                    </ul>
                     <p class="text-sm text-gray-500 mt-4 font-semibold">Technology Focus: Gemini API Integration</p>
                </div>
            </div>
        </div>
        
 <div class="mt-12" data-aos="fade-up">
             <h3 class="text-3xl font-bold mb-6 text-center" style="font-family:var(--header-font); color: var(--primary);">Impact Stories</h3>
             <div class="grid md:grid-cols-2 gap-8">
                 <div class="card p-6 border-l-4 border-secondary">
                     <p class="italic text-gray-600 mb-4">"I was completely stuck on how to code the distance sensor for my project. Clyde didn't just give me the answer; he sat with me and drew diagrams to explain how it works. That 'aha!' moment was because of his patience."</p>
                     <p class="font-bold text-right">- Grade 8 Robotics Club Member</p>
                 </div>
                 <div class="card p-6 border-l-4 border-accent">
                     <p class="italic text-gray-600 mb-4">"Hearing Clyde speak at the Rotary Club meeting was inspiring. It's not often you see a young person with such clarity and passion. He is a fantastic ambassador for the youth in our community and a testament to his school."</p>
                      <p class="font-bold text-right">- Algoa Bay Rotary Club Member</p>
                 </div>
             </div>
        </div>
        
  <div class="max-w-3xl mx-auto text-center mt-16" data-aos="zoom-in">
            <div class="text-2xl italic mb-4 text-gray-700">
                "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead."
            </div>
            <div class="font-bold text-gray-600 text-lg">
                - Nelson Mandela
            </div>
        </div>
    </section>

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

 <section id="contact" class="section" data-aos="fade-up">
        <div class="section-title">Get In Touch</div>
        <div class="section-subtitle">I'm always open to new challenges and opportunities. Let's connect!</div>
        <div class="max-w-xl mx-auto card p-8 md:p-10">
           <form action="https://formspree.io/f/xgvlvvnn" method="POST" class="contact-form"> 
              <div class="mb-5">
                <label for="email" class="block mb-2 text-gray-700">Your Email:</label> 
                <input type="email" name="email" id="email" class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="you@example.com" required> 
              </div>
              <div class="mb-6">
                <label for="message" class="block mb-2 text-gray-700">Your Message:</label> 
                <textarea name="message" id="message" rows="4" class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="Let's build something amazing together!" required></textarea> 
              </div>
              <button type="submit" class="w-full">Send Message</button> 
            </form>
        </div>
        
  <div class="max-w-4xl mx-auto mt-16" data-aos="fade-up">
            <div class="card p-8 md:p-10 text-center">
                <h2 class="text-3xl font-bold mb-3" style="font-family: var(--header-font); color: var(--primary);">
                    Let's Connect & Collaborate
                </h2>
                <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    This is a space to ask questions, share ideas, and build together. Every voice adds value.
                </p>

   <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="h-8 w-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.685-2.685L11.25 18l1.938-.648a3.375 3.375 0 002.685-2.685L16.25 13.5l.648 1.938a3.375 3.375 0 002.685 2.685L21 18.75l-1.938.648a3.375 3.375 0 00-2.685 2.685z" /></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-slate-800">Inquiry</h3>
                            <p class="mt-1 text-slate-600">Champion bold questions and drive discovery.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                           <svg class="h-8 w-8 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-slate-800">Synergy</h3>
                            <p class="mt-1 text-slate-600">Fuse diverse talents to engineer solutions.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="h-8 w-8 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-slate-800">Integrity</h3>
                            <p class="mt-1 text-slate-600">Foster a culture of respectful discourse.</p>
                        </div>
                    </div>
                </div>

  <div class="text-center py-12 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
                    <p class="text-slate-500 font-medium">[Giscus Forum Component Mounts Here]</p>
                </div>
            </div>
        </div>
    </section>

  <footer class="footer text-center py-10">
        <div>© 2025 Clyde Snyders — All rights reserved.</div>
    </footer>

  <div id="lightbox-modal" class="modal-overlay">
        <div class="modal-content-wrapper">
            <span class="modal-close-btn" id="lightbox-close-btn">&times;</span>
            <img class="lightbox-content" src="" alt="Enlarged gallery image">
        </div>
    </div>
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

<a href="#home" id="back-to-top" title="Back to Top">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
    </a>

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
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0022.jpg?raw=true",
                    excerpt: "NATIONAL SCIENCE WEEK at NMU as a future scientist and engineer. I got to engaged with different science stations and interacted with peers from other schools....",
                    fullContent: `<p>🌟Hands-on activities in robotics, environmental science, and more sparked my curiosity and enthusiasm for science and engineering, inspiring me to continue exploring and contributing to scientific advancements. The experience not only deepened my understanding of scientific concepts but also fueled my passion for innovation and discovery. I'm excited to see where my interest in science and engineering takes me!.</p><p> The importance thing is not to stop questioning. Curiosity has its own reason for existance ~ Albert Einstein..</p>`
                },
                {
                    id: 3,
                    title: "Inspiring Talks",
                    meta: "August 19, 2025 | Motivating",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0024.jpg?raw=true",
                    excerpt: "I had the privilege of speaking at the Rotary Club for Algoa Bay Lunch, where I shared my insights and experiences with the members. The event was a great opportunity to connect with people and sharing my story....",
                    fullContent: `<p>As a token of appreciation for my visit, the Rotary Club gifted me with a travel bag and other goodies in preparation for my upcoming trip to Panama. Their thoughtfulness and generosity are truly appreciated!.</p>`
                },
                {
            
                    id: 4,
                    title: "Science Olympiad",
                    meta: "August 4, 2025 | Locked In: My Science Olympiad Experience 🔬",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250804-WA0030.jpg?raw=true",
                    excerpt: "I sat down to write the Natural Science Olympiad test for a full hour, I felt a rush of focus. The questions were challenging, but I was determined to do my best.....",
                    fullContent: `<p> Time was a factor but I worked through the test, my mind fully engaged with the scientific concepts and problems. I was "locked in" – fully focused and concentrated on the task at hand.</p>`
                },
                {
                    id: 5,
                    title: "The Importance of Sharing your Mark",
                    meta: "June 20, 2025 | Radio Interview",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0027.jpg?raw=true",
                    excerpt: "I had the opportunity to share insights on my journey and how it is to be a STEM learner. I discussed the importance of creating solutions for everyday problems , providing guidance on robotics and science, and fostering a growth mindset. I also shared my journey from being a curious grade 8 learner to a grade 9 Patersonain....",
                    fullContent: `<p>In both robotics and my science fair projects, I've learned that you can't perfect a design on paper. It reveals flaws in your thinking that you'd never see otherwise. Each iteration, each broken part, is a lesson that leads to a better final product, That was my story.</p>`
                },
                {
                    id: 6,
                    title: "I am Just a Boytjie from Couldridge Road",
                    meta: "June 19, 2025 | Spotlight on ME",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0024.jpg?raw=true",
                    excerpt: "I'm still pinching myself, but I'm thrilled to share that I've been killing it in multiple areas ! 🎖️🎖️🎖️....",
                    fullContent: `<p> As a Grade 9 learner, I'm proud to say I'm in the TOP 5 in my grade, and Maths is definitely one of my strong suits. But what really got me excited was coding and robotics - I'm loving every minute of it! 🤖💻 The highlight of my journey so far has been winning a bronze medal at the INTERNATIONAL SCIENCE EXPO - it's an incredible feeling knowing all my hard work paid off! 🏆 I'm grateful for the support of my family, friends, and mentors who've encouraged me every step of the way. I'm excited to see what the future holds, and I'll keep pushing myself to achieve more.  - WATCH THIS SPACE 🤩, 
click the link to see the post https://www.facebook.com/100063838813751/posts/1266088535529095/?mibextid=rS40aB7S9Ucbxw6v.....",</p>`

                  },
                  {
                        
                    id: 7,
                    title: "Team Cyber Shadow X",
                    meta: "June 16, 2025 | SpringBots National Competition",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0034.jpg?raw=true",
                    excerpt: "Team Cyber Shadow X Shines on June 16th! 🌟 On June 16th, the Springbots National Competition took place, bringing together talented teams from across the South Africa to showcase their skills and innovative spirit. Among the participating teams was Team Cyber Shadow X (I was part of the team).....",
                    fullContent: `<p>The Springbots National Competition is an annual event that challenges students to design, build, and program robots to solve complex problems. Team Cyber Shadow X 🤖 comprising students from various schools and backgrounds, demonstrated exceptional skill and dedication throughout the competition and managed to end up sixthth place..</p>`
                
                },
                {
                    id: 8,
                    title: "Gold Flames",
                    meta: "May 25, 2025 | Regional SpringBots Robotics Competition",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0007.jpg?raw=true",
                    excerpt: "I'm beyond excited to share that my teammates and I have just won a gold medal at the Regional Springbots Robotics Competition! It was an incredible experience, and we're all thrilled that our teamwork, creativity, and perseverance paid off. Huge thanks to my amazing teammates for their support and collaboration.💻...",
                    fullContent: `<p>With this gold medal win, my team and i have qualified for the *National SpringBots Robotics Competition* , where we will face off against the best teams from across the country.</p>`
                },
                {
                    id: 9,
                    title: "Radio Talks",
                    meta: "April 13, 2025 | Radio Interview",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250828-WA0006.jpg?raw=true",
                    excerpt: "Recently, I had the opportunity to share my story on the radio. The interviewer asked me to introduce myself, talk about what I do as a high school student, and what I aspire to be.. This radio interview was a great opportunity for me to reflect on my journey so far. As a high school student, I'm constantly learning and growing. I'm excited to see what the future holds and how I can make a positive impact in the world...",
                    fullContent: `<p>"The best way to predict your future is to create it." - Abraham Lincoln.</p>`
                },
                {
                    id: 10,
                    title: "Frienships through Science",
                    meta: "April 2, 2025 | Connecting",
                    image: "https://github.com/clydesnyders05-oss/clydesnyders.github.io/blob/main/IMG-20250830-WA0018.jpg?raw=true",
                    excerpt: "I'm buzzing from a fascinating encounter I had at the International Science Fair - a chance meeting with a brilliant student from India! It's amazing how science can bridge gaps and connect minds from around the world. We exchanged ideas, shared our projects, and learned from each other's experiences. I also gave him a t- shirt....",
                    fullContent: `<p>I hope our story inspires others to reach out, collaborate, and learn from each other. Who knows what amazing discoveries and innovations can come from these global connections?.</p>`
                }
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

            if (blogGrid) {
                blogPosts.forEach(post => {
                    const card = document.createElement('div');
                    card.className = 'blog-card';
                    card.setAttribute('data-aos', 'fade-up');
                    card.innerHTML = `
                        <img src="${post.image}" alt="${post.title}" class="blog-image">
                        <div class="blog-card-content">
                            <div class="blog-meta">${post.meta}</div>
                            <h3 class="blog-title">${post.title}</h3>
                            <p class="blog-excerpt">${post.excerpt}</p>
                            <a class="read-more-btn" data-post-id="${post.id}">Read More &rarr;</a>
                        </div>
                    `;
                    blogGrid.appendChild(card);
                });
                
                blogGrid.addEventListener('click', (e) => {
                    if (e.target.classList.contains('blog-image')) {
                        lightboxModal.style.display = 'flex';
                        lightboxContent.src = e.target.src;
                    }
                    if (e.target.classList.contains('read-more-btn')) {
                        const postId = parseInt(e.target.dataset.postId);
                        const post = blogPosts.find(p => p.id === postId);
                        if (post) {
                            blogModalTitle.textContent = post.title;
                            blogModalMeta.textContent = post.meta;
                            blogModalBody.innerHTML = post.fullContent;
                            blogModal.style.display = 'flex';
                        }
                    }
                });
            }
            
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
                     const observer = new IntersectionObserver((entries) => {
                        if (entries[0].isIntersecting) {
                            counter.innerText = '0';
                            const updateCount = () => {
                                const target = +counter.getAttribute('data-count');
                                const count = +counter.innerText;
                                const increment = target / 200;
                                
                                if (count < target) {
                                    let newCount = count + increment;
                                    counter.innerText = target % 1 !== 0 ? newCount.toFixed(2) : Math.ceil(newCount);
                                    setTimeout(updateCount, 1);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCount();
                            observer.unobserve(counter);
                        }
                    }, { threshold: 0.8 });
                    observer.observe(counter);
                });
            };
            animateCounters();
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
