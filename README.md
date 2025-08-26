<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clyde Snyders - Portfolio</title>
    <!-- Modern, Light, Vibrant Style (No NASA Theme) -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
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
            background: var(--light-bg);
            color: var(--text-main);
        }
        nav {
            background: white;
            box-shadow: 0 2px 16px rgba(13,143,255,0.1);
            border-bottom: 1px solid #e5e7eb;
            position: sticky;
            top: 0;
            z-index: 30;
        }
        .nav-link {
            color: var(--text-main);
            font-weight: 500;
            padding: 0.5em 1.2em;
            transition: color 0.2s;
        }
        .nav-link:hover {
            color: var(--secondary);
        }
        .hero {
            background: linear-gradient(120deg, #0d8fff 0%, #0052cc 100%);
            color: white;
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .hero-bg {
            position: absolute;
            inset: 0;
            opacity: 0.09;
            background-image: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1400&q=80');
            background-size: cover;
            background-position: center;
        }
        .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }
        .hero-title {
            font-family: var(--header-font);
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 0.7em;
            background: linear-gradient(90deg, #fde68a, #fff, #0d8fff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
            font-size: 1.3rem;
            font-weight: 500;
            color: #fff;
            margin-bottom: 2rem;
            opacity: 0.85;
        }
        .hero-buttons a {
            margin: 0 1em;
            padding: 0.8em 2em;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1.1em;
            text-decoration: none;
            transition: background 0.2s, color 0.2s;
        }
        .hero-buttons .primary {
            background: #fde68a;
            color: var(--primary);
            box-shadow: 0 2px 8px rgba(253,230,138,0.15);
        }
        .hero-buttons .primary:hover {
            background: #fff;
            color: var(--secondary);
        }
        .hero-buttons .secondary {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
        }
        .hero-buttons .secondary:hover {
            background: #fff;
            color: var(--primary);
        }
        .section {
            padding: 4rem 1.5rem;
            max-width: 1100px;
            margin: 0 auto;
        }
        .section-title {
            font-size: 2.8rem;
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
            margin-bottom: 2rem;
        }
        .card {
            background: white;
            border-radius: 1.2em;
            padding: 2em;
            box-shadow: 0 2px 20px rgba(0,82,204,0.06);
            margin-bottom: 1.5em;
            transition: box-shadow 0.3s;
        }
        .card:hover {
            box-shadow: 0 4px 40px rgba(13,143,255,0.10);
        }
        .avatar {
            width: 190px;
            height: 190px;
            border-radius: 50%;
            border: 4px solid #fde68a;
            box-shadow: 0 0 20px rgba(13,143,255,0.11);
            margin-bottom: 1.2em;
        }
        .stats-row {
            display: flex;
            flex-wrap: wrap;
            gap: 2em;
            justify-content: center;
            margin-bottom: 2em;
        }
        .stat-card {
            background: #f1f5f9;
            padding: 1.5em 2em;
            border-radius: 0.9em;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0,82,204,0.06);
            min-width: 120px;
        }
        .stat-title {
            font-size: 2.5em;
            font-weight: 700;
            color: var(--primary);
        }
        .stat-label {
            font-size: 1em;
            color: var(--text-light);
        }
        /* Skills */
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
            box-shadow: 0 2px 8px rgba(13,143,255,0.07);
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
        /* Timeline */
        .timeline-list {
            border-left: 4px solid var(--primary);
            padding-left: 2em;
            margin-top: 2em;
        }
        .timeline-list li {
            position: relative;
            margin-bottom: 1.6em;
            font-size: 1.1em;
        }
        .timeline-list li::before {
            content: '';
            position: absolute;
            left: -2.1em;
            top: 0.25em;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: var(--accent);
            border: 2px solid var(--primary);
        }
        /* Contact */
        .contact-form input, .contact-form textarea {
            background: #f1f5f9;
            border: 1px solid #e0e7ef;
            border-radius: 0.6em;
            padding: 0.9em 1em;
            width: 100%;
            margin-bottom: 1em;
            font-size: 1em;
        }
        .contact-form input:focus, .contact-form textarea:focus {
            outline: none;
            border-color: var(--primary);
            background: #e0e7ef;
        }
        .contact-form button {
            background: var(--secondary);
            color: white;
            font-weight: 700;
            padding: 0.9em 2em;
            border-radius: 0.7em;
            border: none;
            transition: background 0.2s;
        }
        .contact-form button:hover {
            background: var(--primary);
        }
        .contact-success {
            color: #10b981;
            font-weight: 600;
            margin-top: 1em;
            display: none;
        }
        /* Footer */
        .footer {
            background: var(--primary);
            color: #fff;
            padding: 2.5em 1em;
            text-align: center;
            margin-top: 4em;
        }
        .footer a {
            color: var(--accent);
            text-decoration: underline;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 2em;
            margin-top: 1em;
        }
        .social-link {
            color: var(--secondary);
            font-size: 1.6em;
            transition: color 0.2s;
        }
        .social-link:hover {
            color: var(--accent);
        }
    </style>
</head>
<body>
    <nav class="flex items-center justify-between px-8 py-4">
        <div class="font-bold text-2xl" style="font-family: var(--header-font);">Clyde Snyders</div>
        <div class="space-x-4 hidden md:inline-block">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#academics" class="nav-link">Academics</a>
            <a href="#achievements" class="nav-link">Achievements</a>
            <a href="#timeline" class="nav-link">Trajectory</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
    </nav>

<section id="home" class="hero" data-aos="fade-in">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <img src="http://googleusercontent.com/file_content/1" alt="Clyde Snyders" class="avatar mx-auto shadow-lg" />
            <h1 class="hero-title">Clyde Snyders</h1>
            <div class="hero-subtitle">
                Grade 9 Student | Paterson High School | Eastern Cape
            </div>
            <div class="hero-buttons">
                <a href="#contact" class="primary">Contact Me</a>
                <a href="#" class="secondary" download>Download CV</a>
            </div>
            <div style="margin-top:2em;">
                <span id="typing-effect" style="font-family:monospace; font-size:1.2em;"></span>
            </div>
        </div>
    </section>

<section id="about" class="section" data-aos="fade-up">
        <div class="section-title">About Me</div>
        <div class="section-subtitle">A driven and curious student, passionate about science, technology, and growth.</div>
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/3 text-center">
                <img src="http://googleusercontent.com/file_content/1" alt="Clyde Snyders" class="avatar mx-auto mb-6" />
            </div>
            <div class="md:w-2/3">
                <p class="mb-6" style="font-size:1.13em;">
                    Hi, my name is Clyde Snyders and I am a grade 9 student at Paterson High School in the vibrant Eastern Cape. My journey is rooted in a love for learning, a curiosity for how things work, and a drive to make a difference. Whether it’s building robots, exploring physics, or collaborating on team projects, I believe every challenge is an opportunity for growth.
                </p>
                <div class="stats-row">
                    <div class="stat-card">
                        <div class="stat-title counter" data-count="81.1">0</div>
                        <div class="stat-label">Avg. Mark</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-title counter" data-count="2">0</div>
                        <div class="stat-label">Robotics Teams</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-title counter" data-count="2">0</div>
                        <div class="stat-label">Science Expos</div>
                    </div>
                </div>
                <h3 class="text-2xl font-bold mb-4" style="font-family:var(--header-font);">Core Skills</h3>
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
                <div class="achievement-title">Bronze Medal: Int'l Science Fair</div>
                <div class="achievement-year">2024</div>
                <p>Secured a bronze in the 'Engineering' category at ISF, competing with top students globally. Demonstrated creativity and resilience under pressure.</p>
            </div>
        </div>
        <div class="achievements-grid">
            <div class="card" data-aos="zoom-in" data-aos-delay="300">
                <div class="achievement-title">Bronze Medal: World Robot Olympiad</div>
                <div class="achievement-year">2024</div>
                <p>Achieved a bronze at WRO, representing the Eastern Cape internationally and collaborating with diverse teams.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="400">
                <div class="achievement-title">Best Category Award: Physics</div>
                <div class="achievement-year">2025</div>
                <p>Recognized for excellence in Physics, reflecting a deep understanding of fundamental concepts and problem-solving skills.</p>
            </div>
        </div>
    </section>

   <section id="timeline" class="section" data-aos="fade-up">
        <div class="section-title">My Trajectory</div>
        <div class="section-subtitle">Key milestones shaping my high school journey.</div>
        <ul class="timeline-list">
            <li><strong>Aug 2025:</strong> Repeat Gold at Regional Science Fair — Won a second gold and Best Category award in Physics.</li>
            <li><strong>Jun 2025:</strong> 6th Place at National Springbots — Secured a sixth-place finish nationally.</li>
            <li><strong>May 2025:</strong> Gold at Regional Springbots — Won the gold medal at regional robotics.</li>
            <li><strong>Dec 2024:</strong> Bronze at World Robot Olympiad (WRO) — Achieved a bronze medal in robotics.</li>
            <li><strong>Oct 2024:</strong> Bronze at International Science Fair (ISF) — Won a bronze medal in engineering.</li>
            <li><strong>Aug 2024:</strong> Gold at Regional Science Fair — In my first year participating, I secured a gold medal.</li>
            <li><strong>Jan 2024:</strong> Joined Paterson High — Began my high school journey with a focus on academic excellence.</li>
        </ul>
    </section>

<section id="contact" class="section" data-aos="fade-up">
        <div class="section-title">Get In Touch</div>
        <div class="section-subtitle">I'm always open to new challenges and opportunities. Let's connect!</div>
        <div class="max-w-xl mx-auto card">
            <form id="contact-form" class="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            <div id="contact-success" class="contact-success">Thank you! Your message has been sent.</div>
            <div class="social-links">
                <a href="mailto:clydesnyders723@gmail.com" class="social-link" title="Email"><i class="fa fa-envelope"></i></a>
                <a href="tel:+27795779681" class="social-link" title="Phone"><i class="fa fa-phone"></i></a>
                <a href="https://www.instagram.com/c.snyders.05" class="social-link" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a>
            </div>
        </div>
    </section>

  <footer class="footer">
        <div>Paterson High — Port Elizabeth, Eastern Cape</div>
        <div class="mt-2">Email: <a href="mailto:clydesnyders723@gmail.com">clydesnyders723@gmail.com</a></div>
        <div class="mt-2">Phone: <a href="tel:+27795779681">+27 79 577 9681</a></div>
        <div class="mt-2">Instagram: <a href="https://www.instagram.com/c.snyders.05" target="_blank">c.snyders.05</a></div>
        <div class="my-4 border-t border-gray-200"></div>
        <div>© 2025 — All rights reserved. Crafted for the future.</div>
    </footer>

   <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Animate On Scroll Init
            AOS.init({ once: true, duration: 900 });

            // Animated Counters
            const animateCounters = () => {
                const counters = document.querySelectorAll('.counter');
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const el = entry.target;
                            let count = 0;
                            let target = parseFloat(el.dataset.count);
                            let decimals = target % 1 !== 0 ? 2 : 0;
                            let increment = target / 60;
                            const update = () => {
                                count += increment;
                                if (count < target) {
                                    el.textContent = decimals ? count.toFixed(decimals) : Math.round(count);
                                    requestAnimationFrame(update);
                                } else {
                                    el.textContent = target;
                                }
                            }
                            update();
                            observer.unobserve(el);
                        }
                    });
                }, { threshold: 0.6 });
                counters.forEach(counter => observer.observe(counter));
            };
            animateCounters();

            // Hero Typing Effect
            const typeWriter = () => {
                const el = document.getElementById('typing-effect');
                const phrases = [
                    "Curious. Ambitious. Always improving.",
                    "Science. Robotics. Teamwork.",
                    "Chasing greater.",
                    "Let's build something amazing together!"
                ];
                let phraseIndex = 0;
                let charIndex = 0;
                let typing = true;
                function type() {
                    if (charIndex < phrases[phraseIndex].length && typing) {
                        el.innerHTML += phrases[phraseIndex][charIndex];
                        charIndex++;
                        setTimeout(type, 80);
                    } else {
                        typing = false;
                        setTimeout(() => {
                            el.innerHTML = "";
                            charIndex = 0;
                            phraseIndex = (phraseIndex + 1) % phrases.length;
                            typing = true;
                            type();
                        }, 1800);
                    }
                }
                type();
            };
            typeWriter();

            // Contact Form Submission
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e){
                    e.preventDefault();
                    const successMessage = document.getElementById('contact-success');
                    successMessage.style.display = 'block';
                    setTimeout(() => { successMessage.style.display = 'none'; }, 4000);
                    this.reset();
                });
            }
        });
    </script> 
    <!-- Font Awesome for Icons -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</body>
</html>
