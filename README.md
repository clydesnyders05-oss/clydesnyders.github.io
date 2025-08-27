<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clyde Snyders - Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
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
        body {
            font-family: var(--body-font);
            background-color: var(--light-bg);
            color: var(--text-main);
        }
        nav {
            position: sticky;
            top: 0;
            z-index: 50;
            transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .nav-scrolled {
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(13,143,255,0.1);
        }
        .nav-link {
            position: relative;
            color: var(--text-main);
            font-weight: 500;
            padding: 0.5rem 1rem;
            transition: color 0.2s;
        }
        .nav-link:hover {
            color: var(--secondary);
        }
        .nav-link.active {
            color: var(--primary);
            font-weight: 700;
        }
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 40%;
            height: 3px;
            background-color: var(--primary);
            border-radius: 99px;
        }
        .hero {
            background: linear-gradient(120deg, #0d8fff 0%, #0052cc 100%);
            color: white;
            min-height: 90vh;
        }
        .hero-bg {
            position: absolute;
            inset: 0;
            opacity: 0.09;
            background-image: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1400&q=80');
            background-size: cover;
            background-position: center;
        }
        .hero-title {
            font-family: var(--header-font);
            font-size: clamp(2.5rem, 6vw, 3.5rem);
            background: linear-gradient(90deg, #fde68a, #fff, #0d8fff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .btn {
            padding: 0.8em 2em;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1.1em;
            text-decoration: none;
            transition: all 0.2s ease-in-out;
            display: inline-block;
        }
        .btn-primary {
            background: #fde68a;
            color: var(--primary);
            box-shadow: 0 2px 8px rgba(253,230,138,0.15);
        }
        .btn-primary:hover {
            background: #fff;
            color: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(253,230,138,0.25);
        }
        .btn-secondary {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
        }
        .btn-secondary:hover {
            background: #fff;
            color: var(--primary);
            transform: translateY(-2px);
        }
        .section {
            padding: 5rem 1.5rem;
            max-width: 1100px;
            margin: 0 auto;
        }
        .section-title {
            font-size: clamp(2rem, 5vw, 2.8rem);
            font-family: var(--header-font);
            color: var(--primary);
        }
        .card {
            background: white;
            border-radius: 1.2em;
            padding: 2em;
            box-shadow: 0 4px 25px rgba(0,82,204,0.07);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 40px rgba(13,143,255,0.12);
        }
        .avatar {
            width: 190px;
            height: 190px;
            border-radius: 50%;
            border: 4px solid #fde68a;
            box-shadow: 0 0 20px rgba(13,143,255,0.11);
        }
        .skill-bar {
            background: linear-gradient(90deg, #0d8fff, #0052cc);
        }
        .timeline-list li::before {
            content: '';
            position: absolute;
            left: -2.25em; /* Adjusted for alignment */
            top: 0.4em;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: var(--accent);
            border: 3px solid var(--primary);
        }
        .contact-form button {
            background: var(--secondary);
        }
        .contact-form button:hover {
            background: var(--primary);
        }
        .social-link {
            color: var(--text-light);
            font-size: 1.8em;
            transition: color 0.2s, transform 0.2s;
        }
        .social-link:hover {
            color: var(--primary);
            transform: scale(1.1);
        }
        .footer {
            background: var(--text-main);
        }
    </style>
</head>
<body class="antialiased">

<nav id="navbar" class="w-full flex items-center justify-between px-6 md:px-8 py-4">
        <a href="#home" class="font-bold text-2xl" style="font-family: var(--header-font);">Clyde Snyders</a>
        <div id="desktop-menu" class="hidden md:flex items-center space-x-2">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#academics" class="nav-link">Academics</a>
            <a href="#achievements" class="nav-link">Achievements</a>
            <a href="#future" class="nav-link">Future Focus</a>
            <a href="#timeline" class="nav-link">Trajectory</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-2xl">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>
    <div id="mobile-menu" class="hidden md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6 text-xl">
        <button id="mobile-close-button" class="absolute top-6 right-6 text-3xl">&times;</button>
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#academics" class="nav-link">Academics</a>
        <a href="#achievements" class="nav-link">Achievements</a>
        <a href="#future" class="nav-link">Future Focus</a>
        <a href="#timeline" class="nav-link">Trajectory</a>
        <a href="#contact" class="nav-link">Contact</a>
    </div>

  <section id="home" class="hero relative flex items-center justify-center text-center p-4" data-aos="fade-in">
        <div class="hero-bg"></div>
        <div class="relative z-10">
            <img src="http://googleusercontent.com/file_content/1" alt="Clyde Snyders" class="avatar mx-auto shadow-lg mb-6" />
            <h1 class="hero-title font-bold">Clyde Snyders</h1>
            <p class="hero-subtitle text-lg md:text-xl opacity-90 mb-8">
                Grade 9 Student | Paterson High School | Eastern Cape
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="btn btn-primary">Contact Me</a>
                <a href="#" class="btn btn-secondary" download>Download CV</a>
            </div>
            <div class="mt-8">
                <span id="typing-effect" class="font-mono text-lg md:text-xl h-8 block"></span>
            </div>
        </div>
    </section>

  <section id="about" class="section" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="section-title font-bold">About Me</h2>
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">A driven and curious student, passionate about science, technology, and growth.</p>
        </div>
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/3 text-center" data-aos="fade-right">
                <img src="http://googleusercontent.com/file_content/1" alt="Clyde Snyders" class="avatar mx-auto mb-6" />
            </div>
            <div class="md:w-2/3" data-aos="fade-left">
                <p class="mb-6 text-lg">
                    Hi, my name is Clyde Snyders and I am a grade 9 student at Paterson High School in the vibrant Eastern Cape. My journey is rooted in a love for learning, a curiosity for how things work, and a drive to make a difference. Whether it’s building robots, exploring physics, or collaborating on team projects, I believe every challenge is an opportunity for growth.
                </p>
                <div class="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                    <div class="stat-card text-center bg-slate-100 p-4 rounded-xl min-w-[120px]">
                        <div class="text-4xl font-bold text-[--primary] counter" data-count="81.1">0</div>
                        <div class="text-sm text-gray-500">Avg. Mark</div>
                    </div>
                    <div class="stat-card text-center bg-slate-100 p-4 rounded-xl min-w-[120px]">
                        <div class="text-4xl font-bold text-[--primary] counter" data-count="2">0</div>
                        <div class="text-sm text-gray-500">Robotics Teams</div>
                    </div>
                    <div class="stat-card text-center bg-slate-100 p-4 rounded-xl min-w-[120px]">
                        <div class="text-4xl font-bold text-[--primary] counter" data-count="2">0</div>
                        <div class="text-sm text-gray-500">Science Expos</div>
                    </div>
                </div>
                <h3 class="text-2xl font-bold mb-4" style="font-family:var(--header-font);">Core Skills</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Mathematics</span><span class="font-bold">92%</span></div>
                        <div class="bg-gray-200 rounded-full h-3"><div class="skill-bar rounded-full h-3" style="width:92%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Natural Science</span><span class="font-bold">81.5%</span></div>
                        <div class="bg-gray-200 rounded-full h-3"><div class="skill-bar rounded-full h-3" style="width:81.5%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Robotics</span><span class="font-bold">88%</span></div>
                        <div class="bg-gray-200 rounded-full h-3"><div class="skill-bar rounded-full h-3" style="width:88%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Engineering Design</span><span class="font-bold">85%</span></div>
                        <div class="bg-gray-200 rounded-full h-3"><div class="skill-bar rounded-full h-3" style="width:85%"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 <section id="academics" class="section bg-slate-50" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="section-title font-bold">Academic Performance</h2>
            <p class="text-lg text-gray-500">My Grade 9 results reflect a commitment to excellence across diverse subjects.</p>
        </div>
        <div class="card overflow-x-auto max-w-2xl mx-auto">
            <table class="w-full text-left">
                <thead><tr class="border-b border-gray-200"><th class="py-3 px-4">Subject</th><th class="py-3 px-4 text-right">Score (%)</th></tr></thead>
                <tbody>
                    <tr class="border-b"><td class="py-3 px-4">Mathematics</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="92">0</span>%</td></tr>
                    <tr class="border-b"><td class="py-3 px-4">Natural Science</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="81.5">0</span>%</td></tr>
                    <tr class="border-b"><td class="py-3 px-4">Social Science</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="95.5">0</span>%</td></tr>
                    <tr class="border-b"><td class="py-3 px-4">Technology</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="87.5">0</span>%</td></tr>
                    <tr class="border-b"><td class="py-3 px-4">EMS</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="83.79">0</span>%</td></tr>
                    <tr class="border-b"><td class="py-3 px-4">Creative Arts</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="82.22">0</span>%</td></tr>
                    <tr class="border-b"><td class="py-3 px-4">English</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="74">0</span>%</td></tr>
                    <tr><td class="py-3 px-4">Afrikaans</td><td class="py-3 px-4 font-bold text-right"><span class="counter" data-count="72">0</span>%</td></tr>
                </tbody>
            </table>
        </div>
    </section>

 <section id="achievements" class="section" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="section-title font-bold">Key Achievements</h2>
            <p class="text-lg text-gray-500">Milestones from national and international competitions.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="card" data-aos="zoom-in"><div class="flex items-start gap-4"><i class="fas fa-medal text-3xl text-[--accent]"></i><div><h3 class="text-xl font-bold text-[--secondary]">Gold Medal: Regional Science Expo</h3><div class="font-semibold text-[--primary] mb-2">2025</div><p>Awarded a gold medal for the second consecutive year and won Best Category in Physics. Showcased a passion for experimentation.</p></div></div></div>
            <div class="card" data-aos="zoom-in" data-aos-delay="100"><div class="flex items-start gap-4"><i class="fas fa-robot text-3xl text-[--accent]"></i><div><h3 class="text-xl font-bold text-[--secondary]">Gold Medal: Springbots Robotics</h3><div class="font-semibold text-[--primary] mb-2">2025</div><p>Won gold at the regional Springbots robotics competition, later placing 6th nationally. Led a team in designing innovative robots.</p></div></div></div>
            <div class="card" data-aos="zoom-in" data-aos-delay="200"><div class="flex items-start gap-4"><i class="fas fa-globe text-3xl text-[--accent]"></i><div><h3 class="text-xl font-bold text-[--secondary]">Bronze Medal: Int'l Science Fair</h3><div class="font-semibold text-[--primary] mb-2">2024</div><p>Secured a bronze in 'Engineering' at ISF, competing with top students globally. Demonstrated creativity and resilience under pressure.</p></div></div></div>
            <div class="card" data-aos="zoom-in" data-aos-delay="300"><div class="flex items-start gap-4"><i class="fas fa-trophy text-3xl text-[--accent]"></i><div><h3 class="text-xl font-bold text-[--secondary]">Bronze Medal: World Robot Olympiad</h3><div class="font-semibold text-[--primary] mb-2">2024</div><p>Achieved a bronze at WRO, representing the Eastern Cape internationally and collaborating with diverse teams.</p></div></div></div>
            <div class="card" data-aos="zoom-in" data-aos-delay="400"><div class="flex items-start gap-4"><i class="fas fa-atom text-3xl text-[--accent]"></i><div><h3 class="text-xl font-bold text-[--secondary]">Best Category Award: Physics</h3><div class="font-semibold text-[--primary] mb-2">2025</div><p>Recognized for excellence in Physics, reflecting a deep understanding of fundamental concepts and problem-solving skills.</p></div></div></div>
        </div>
    </section>

  <section id="future" class="section bg-slate-50" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="section-title font-bold">Future Focus & AI Insights</h2>
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">Connecting today's skills with tomorrow's possibilities.</p>
        </div>
        <div class="card max-w-4xl mx-auto p-8 bg-[--text-main] text-white">
            <div class="flex flex-col md:flex-row gap-8 items-center">
                <div class="text-center md:text-left">
                    <h3 class="text-2xl font-bold mb-4 text-[--accent]" style="font-family:var(--header-font);">My Ambition</h3>
                    <p class="mb-6 opacity-90">
                        I am driven to explore the intersection of robotics, software, and physics. My goal is to pursue a career in Mechatronics Engineering, where I can build intelligent systems that solve real-world problems. I am passionate about sustainable technology and believe in the power of automation to improve lives.
                    </p>
                </div>
                <div class="w-full md:w-2/3 md:border-l-2 border-[--secondary] md:pl-8">
                    <h4 class="font-bold text-lg mb-4 text-white"><i class="fas fa-lightbulb mr-2 text-[--accent]"></i>Gemini-Inspired Analysis:</h4>
                    <div class="bg-gray-700 p-4 rounded-lg">
                        <p class="font-mono text-sm text-gray-300">
                            <span class="text-green-400">> Analyzing skill profile...</span><br>
                            > High proficiency in <strong class="text-cyan-400">Mathematics (92%)</strong> and <strong class="text-cyan-400">Robotics (88%)</strong> indicates a strong aptitude for algorithmic problem-solving and systems thinking.
                            <br><br>
                            > <strong class="text-yellow-400">Projected Trajectory:</strong> Excellent candidate for specialized fields like <strong class="text-white">Mechatronics Engineering</strong>, <strong class="text-white">AI Development</strong>, and <strong class="text-white">Computational Physics</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

 <section id="timeline" class="section" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="section-title font-bold">My Trajectory</h2>
            <p class="text-lg text-gray-500">Key milestones shaping my high school journey.</p>
        </div>
        <div class="max-w-2xl mx-auto">
            <ul class="timeline-list border-l-4 border-[--primary] pl-8">
                <li class="mb-6"><strong class="text-lg">Aug 2025:</strong> Repeat Gold at Regional Science Fair — Won a second gold and Best Category award in Physics.</li>
                <li class="mb-6"><strong class="text-lg">Jun 2025:</strong> 6th Place at National Springbots — Secured a sixth-place finish nationally.</li>
                <li class="mb-6"><strong class="text-lg">May 2025:</strong> Gold at Regional Springbots — Won the gold medal at regional robotics.</li>
                <li class="mb-6"><strong class="text-lg">Dec 2024:</strong> Bronze at World Robot Olympiad (WRO) — Achieved a bronze medal in robotics.</li>
                <li class="mb-6"><strong class="text-lg">Oct 2024:</strong> Bronze at International Science Fair (ISF) — Won a bronze medal in engineering.</li>
                <li class="mb-6"><strong class="text-lg">Aug 2024:</strong> Gold at Regional Science Fair — In my first year participating, I secured a gold medal.</li>
                <li class="mb-6"><strong class="text-lg">Jan 2024:</strong> Joined Paterson High — Began my high school journey with a focus on academic excellence.</li>
            </ul>
        </div>
    </section>

  <section id="contact" class="section bg-slate-50" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="section-title font-bold">Get In Touch</h2>
            <p class="text-lg text-gray-500">I'm always open to new challenges and opportunities. Let's connect!</p>
        </div>
        <div class="max-w-xl mx-auto card p-8">
             <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
                <input class="w-full bg-slate-100 border border-gray-200 rounded-lg p-3 mb-4 focus:outline-none focus:border-[--primary]" type="text" name="name" placeholder="Your Name" required />
                <input class="w-full bg-slate-100 border border-gray-200 rounded-lg p-3 mb-4 focus:outline-none focus:border-[--primary]" type="email" name="email" placeholder="Your Email" required />
                <textarea class="w-full bg-slate-100 border border-gray-200 rounded-lg p-3 mb-4 focus:outline-none focus:border-[--primary]" name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" class="w-full btn btn-primary text-white bg-[--secondary] hover:bg-[--primary]">Send Message</button>
            </form>
            <div id="contact-success" class="text-green-600 font-semibold mt-4 text-center" style="display: none;">Thank you! Your message has been sent.</div>
            
   <div class="text-center mt-8">
                <p class="text-gray-500 mb-4">Or reach out directly:</p>
                <div class="flex justify-center items-center gap-8">
                    <a href="mailto:clydesnyders723@gmail.com" class="social-link" title="Email"><i class="fas fa-envelope"></i></a>
                    <a href="tel:+27795779681" class="social-link" title="Phone"><i class="fas fa-phone"></i></a>
                    <a href="https://www.instagram.com/c.snyders.05" class="social-link" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </section>

   <footer class="footer text-white text-center py-10 px-4">
        <div class="max-w-4xl mx-auto">
            <p class="font-bold text-lg">Paterson High — Port Elizabeth, Eastern Cape</p>
            <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
                <a href="mailto:clydesnyders723@gmail.com" class="hover:text-[--accent] transition-colors">clydesnyders723@gmail.com</a>
                <a href="tel:+27795779681" class="hover:text-[--accent] transition-colors">+27 79 577 9681</a>
                <a href="https://www.instagram.com/c.snyders.05" target="_blank" class="hover:text-[--accent] transition-colors">@c.snyders.05</a>
            </div>
            <div class="my-6 border-t border-gray-600"></div>
            <p>© 2025 — All rights reserved. Crafted for the future.</p>
        </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Animate On Scroll (AOS) Init
            AOS.init({ once: true, duration: 900, offset: 50 });

            // Advanced Navigation Logic
            const navbar = document.getElementById('navbar');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileCloseButton = document.getElementById('mobile-close-button');
            const desktopMenuLinks = document.querySelectorAll('#desktop-menu .nav-link, #mobile-menu .nav-link');
            const sections = document.querySelectorAll('section');

            // Nav background on scroll
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('nav-scrolled');
                } else {
                    navbar.classList.remove('nav-scrolled');
                }
            });

            // Mobile menu toggle
            const toggleMobileMenu = () => mobileMenu.classList.toggle('hidden');
            mobileMenuButton.addEventListener('click', toggleMobileMenu);
            mobileCloseButton.addEventListener('click', toggleMobileMenu);
            
            // Close mobile menu on link click
            desktopMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (!mobileMenu.classList.contains('hidden')) {
                        toggleMobileMenu();
                    }
                });
            });

            // Scrollspy for active nav link
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.4 };
            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);
            sections.forEach(section => sectionObserver.observe(section));


            // Animated Counters
            const counterObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseFloat(el.dataset.count);
                        const decimals = target % 1 !== 0 ? 2 : 0;
                        let count = 0;
                        const duration = 1500; // ms
                        const frameRate = 60; // fps
                        const totalFrames = Math.round((duration / 1000) * frameRate);
                        const increment = target / totalFrames;

                        const updateCount = () => {
                            count += increment;
                            if (count < target) {
                                el.textContent = decimals ? count.toFixed(decimals) : Math.round(count);
                                requestAnimationFrame(updateCount);
                            } else {
                                el.textContent = target.toFixed(decimals);
                            }
                        }
                        updateCount();
                        counterObserver.unobserve(el);
                    }
                });
            }, { threshold: 0.6 });
            document.querySelectorAll('.counter').forEach(counter => counterObserver.observe(counter));

            // Hero Typing Effect
            const typeWriter = () => {
                const el = document.getElementById('typing-effect');
                if (!el) return;
                const phrases = ["Curious. Ambitious. Always improving.", "Science. Robotics. Teamwork.", "Chasing greater.", "Let's build something amazing together!"];
                let phraseIndex = 0, charIndex = 0, isDeleting = false;

                function type() {
                    const currentPhrase = phrases[phraseIndex];
                    if (isDeleting) {
                        el.textContent = currentPhrase.substring(0, charIndex - 1);
                        charIndex--;
                    } else {
                        el.textContent = currentPhrase.substring(0, charIndex + 1);
                        charIndex++;
                    }

                    if (!isDeleting && charIndex === currentPhrase.length) {
                        setTimeout(() => isDeleting = true, 1800);
                    } else if (isDeleting && charIndex === 0) {
                        isDeleting = false;
                        phraseIndex = (phraseIndex + 1) % phrases.length;
                    }

                    const typingSpeed = isDeleting ? 40 : 80;
                    setTimeout(type, typingSpeed);
                }
                type();
            };
            typeWriter();

            // Contact Form Submission
            const contactForm = document.getElementById('contact-form');
            if(contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const form = e.target;
                    const data = new FormData(form);
                    const successMessage = document.getElementById('contact-success');

                    fetch(form.action, {
                        method: form.method,
                        body: data,
                        headers: { 'Accept': 'application/json' }
                    }).then(response => {
                        if (response.ok) {
                            successMessage.style.display = 'block';
                            form.reset();
                            setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
                        } else {
                            // Optional: Handle errors
                            alert("Oops! There was a problem submitting your form.");
                        }
                    }).catch(error => {
                        // Optional: Handle network errors
                        alert("Oops! There was a problem submitting your form.");
                    });
                });
            }
        });
    </script>
</body>
</html>
