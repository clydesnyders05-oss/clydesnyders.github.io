<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clyde Snyders - Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* --- NASA-Inspired Theme & Advanced Styles --- */
        :root {
            --dark-space: #0b0c10;
            --deep-blue: #1f2833;
            --accent-orange: #ff6600;
            --bright-aqua: #66fcf1;
            --light-text: #c5c6c7;
            --header-font: 'Orbitron', sans-serif;
            --body-font: 'Roboto', sans-serif;
        }
  body { 
            background: var(--dark-space); 
            color: var(--light-text); 
            font-family: var(--body-font);
        }
        /* --- Advanced Feature: Animated Starfield with Parallax --- */
        .starfield { 
            position: fixed; 
            top: 0; 
            left: 0; 
            width: 100vw; 
            height: 100vh; 
            z-index: -1; 
            pointer-events: none;
        }
    /* --- Advanced Feature: Glassmorphism Navigation --- */
        nav {
            background: rgba(31, 40, 51, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px); /* For Safari */
            border-bottom: 1px solid rgba(102, 252, 241, 0.2);
        }
   .section { padding: 4rem 1.5rem; max-width: 1200px; margin: 0 auto; }
 .avatar { 
          width: 200px; 
            height: 200px; 
            border-radius: 50%; 
            border: 4px solid var(--accent-orange);
            box-shadow: 0 0 25px rgba(255, 102, 0, 0.4);
        }
          /* --- Advanced Feature: Gradient Text --- */
        .gradient-text {
            background: linear-gradient(90deg, var(--bright-aqua), white);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
   h1, h2, h3 { font-family: var(--header-font); }
        h1.gradient-text {
             background: linear-gradient(90deg, white, var(--accent-orange));
            -webkit-background-clip: text;
            background-clip: text;
        }
  .badge { 
            background: rgba(255, 102, 0, 0.15); 
            color: var(--accent-orange); 
            border: 1px solid var(--accent-orange);
            border-radius: 999px; 
            padding: 0.4em 1.2em; 
            font-size: 0.9em; 
            font-weight: 700; 
            display: inline-block;
            transition: all 0.3s ease;
        }
        .badge:hover {
             background: var(--accent-orange);
             color: var(--dark-space);
        }
    .card { 
            background: var(--deep-blue); 
            border-radius: 1em; 
            padding: 2em; 
            margin-bottom: 1.5em; 
            border: 1px solid rgba(102, 252, 241, 0.1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(102, 252, 241, 0.1);
        }
  .stat { text-align: center; margin: 1em 0; }
        .progress { height: 8px; background: rgba(102, 252, 241, 0.2); border-radius: 999px; overflow: hidden; }
        .progress-bar { height: 8px; background: var(--bright-aqua); box-shadow: 0 0 10px var(--bright-aqua); }
           .footer { 
            background: var(--deep-blue); 
            color: var(--light-text); 
            padding: 2.5em 1em; 
            text-align: center; 
            border-top: 1px solid rgba(102, 252, 241, 0.2);
        }
    /* --- Advanced Feature: Interactive Timeline --- */
        .timeline-list li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 1.5rem;
        }
        .timeline-list li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--deep-blue);
            border: 3px solid var(--bright-aqua);
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(102, 252, 241, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(102, 252, 241, 0); }
            100% { box-shadow: 0 0 0 0 rgba(102, 252, 241, 0); }
        }
          .modal { display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); backdrop-filter: blur(5px); align-items:center; justify-content:center; z-index:50; }
        .modal.active { display:flex; }
        .modal-content { background:var(--deep-blue); border-radius:1em; padding:2em; max-width:90vw; max-height:90vh; overflow:auto; border: 1px solid var(--accent-orange); }
  /* --- Primary Button Style --- */
        .btn-primary {
             background-color: var(--accent-orange);
             color: white;
             border-radius: 8px;
             padding: 0.75rem 2rem;
             font-weight: 700;
             transition: all 0.3s ease;
             box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
        }
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 7px 20px rgba(255, 102, 0, 0.5);
        }
        .btn-secondary {
            border: 2px solid var(--bright-aqua);
            color: var(--bright-aqua);
            border-radius: 8px;
            padding: 0.75rem 2rem;
            font-weight: 700;
            transition: all 0.3s ease;
        }
        .btn-secondary:hover {
            background-color: var(--bright-aqua);
            color: var(--dark-space);
        }
  </style>
</head>
<body>
    <canvas id="starfield" class="starfield"></canvas>
    
 <nav class="w-full py-4 px-6 flex justify-between items-center sticky top-0 z-40">
        <span class="font-bold text-2xl" style="font-family: var(--header-font);">Clyde Snyders</span>
        <div class="space-x-8 hidden md:inline-block">
            <a href="#home" class="hover:text-white transition">Home</a>
            <a href="#about" class="hover:text-white transition">About</a>
            <a href="#academics" class="hover:text-white transition">Academics</a>
            <a href="#achievements" class="hover:text-white transition">Achievements</a>
            <a href="#timeline" class="hover:text-white transition">Trajectory</a>
            <a href="#contact" class="hover:text-white transition">Contact</a>
        </div>
    </nav>
    
 <main>
        <section id="home" class="section text-center min-h-screen flex items-center justify-center relative" data-aos="fade-in">
             <div class="absolute inset-0 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop'); opacity: 0.1;"></div>
             <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30"></div>
            <div class="relative z-10">
                <span class="badge mb-4">Grade 9 Student | Paterson High School</span>
                <h1 class="text-5xl md:text-7xl font-bold mb-4 gradient-text">Clyde Snyders</h1>
                <p class="text-xl text-gray-300 mb-8 font-mono"><span id="typing-effect"></span><span class="inline-block animate-ping h-4 w-1 bg-accent-orange"></span></p>
                <div class="flex justify-center gap-4">
                    <a href="#contact" class="btn-primary">Contact Me</a>
                    <a href="#" class="btn-secondary" download>Download CV</a>
                </div>
            </div>
        </section>

 <section id="about" class="section" data-aos="fade-up">
            <div class="flex flex-col md:flex-row gap-12 items-center">
                <div class="md:w-1/3 text-center">
                    <img src="http://googleusercontent.com/file_content/1" alt="Clyde Snyders" class="avatar mx-auto mb-6" />
                </div>
                <div class="md:w-2/3">
                    <h2 class="text-4xl font-bold mb-4 gradient-text">About Me</h2>
                    <p class="mb-6">
                        Hi, my name is Clyde Snyders and I am a grade 9 student from Paterson High School in the Eastern Cape. I am passionate about learning, growing, and making a positive impact. My world revolves around robotics, science fairs, and achieving academic excellence.
                    </p>
                    <div class="flex gap-8 mb-8">
                        <div class="stat"><div class="text-4xl font-bold counter" data-count="81.1">0</div><div class="text-sm text-gray-400">Avg. Mark</div></div>
                        <div class="stat"><div class="text-4xl font-bold counter" data-count="2">0</div><div class="text-sm text-gray-400">Robotics Teams</div></div>
                        <div class="stat"><div class="text-4xl font-bold counter" data-count="2">0</div><div class="text-sm text-gray-400">Science Expos</div></div>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Core Skills</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div><div class="flex justify-between items-center mb-1"><span>Mathematics</span><span>92%</span></div><div class="progress"><div class="progress-bar" style="width:92%"></div></div></div>
                        <div><div class="flex justify-between items-center mb-1"><span>Natural Science</span><span>81.5%</span></div><div class="progress"><div class="progress-bar" style="width:81.5%"></div></div></div>
                        <div><div class="flex justify-between items-center mb-1"><span>Robotics</span><span>88%</span></div><div class="progress"><div class="progress-bar" style="width:88%"></div></div></div>
                        <div><div class="flex justify-between items-center mb-1"><span>Engineering Design</span><span>85%</span></div><div class="progress"><div class="progress-bar" style="width:85%"></div></div></div>
                    </div>
                </div>
            </div>
        </section>

<section id="academics" class="section bg-deep-blue" data-aos="fade-up">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold gradient-text">Academic Performance</h2>
                <p class="text-gray-300 mt-2">My Grade 9 academic results, showcasing a strong performance across all subjects.</p>
            </div>
            <div class="card overflow-x-auto max-w-2xl mx-auto">
                <table class="w-full text-left">
                    <thead><tr class="border-b border-gray-700"><th class="py-2 px-4">Subject</th><th class="py-2 px-4">Score (%)</th></tr></thead>
                    <tbody>
                        <tr><td class="py-2 px-4">Mathematics</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="92">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">Natural Science</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="81.5">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">Social Science</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="95.5">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">Technology</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="87.5">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">EMS</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="83.79">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">Creative Arts</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="82.22">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">English</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="74">0</span>%</td></tr>
                        <tr><td class="py-2 px-4">Afrikaans</td><td class="py-2 px-4 font-bold text-white"><span class="counter" data-count="72">0</span>%</td></tr>
                    </tbody>
                </table>
            </div>
        </section>

  <section id="achievements" class="section" data-aos="fade-up">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold gradient-text">Key Achievements</h2>
                <p class="text-gray-300 mt-2">Highlights from my participation in national and international competitions.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="card" data-aos="zoom-in">
                    <div class="font-semibold text-xl text-white">Gold Medal: Regional Science Expo</div><div class="text-accent-orange mb-2">2025</div>
                    <p>Awarded a gold medal for the second consecutive year and won Best Category in Physics.</p>
                </div>
                <div class="card" data-aos="zoom-in" data-aos-delay="100">
                    <div class="font-semibold text-xl text-white">Gold Medal: Springbots Robotics</div><div class="text-accent-orange mb-2">2025</div>
                    <p>Won gold at the regional Springbots robotics competition, later placing 6th nationally.</p>
                </div>
                <div class="card" data-aos="zoom-in" data-aos-delay="200">
                    <div class="font-semibold text-xl text-white">Bronze Medal: Int'l Science Fair</div><div class="text-accent-orange mb-2">2024</div>
                    <p>Secured a bronze medal in the 'Engineering' category at the ISF against 69+ students.</p>
                </div>
            </div>
        </section>

   <section id="timeline" class="section bg-deep-blue" data-aos="fade-up">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold gradient-text">My Trajectory</h2>
                <p class="text-gray-300 mt-2">Key milestones that have shaped my high school career.</p>
            </div>
            <div class="max-w-2xl mx-auto">
                <ul class="timeline-list">
                    <li><strong>Aug 2025:</strong> Repeat Gold at Regional Science Fair — Won a second gold and Best Category award in Physics.</li>
                    <li><strong>Jun 2025:</strong> 6th Place at National Springbots — Secured a sixth-place finish nationally.</li>
                    <li><strong>May 2025:</strong> Gold at Regional Springbots — Won the gold medal at regional robotics.</li>
                    <li><strong>Dec 2024:</strong> Bronze at World Robot Olympiad (WRO) — Achieved a bronze medal in robotics.</li>
                    <li><strong>Oct 2024:</strong> Bronze at International Science Fair (ISF) — Won a bronze medal in engineering.</li>
                    <li><strong>Aug 2024:</strong> Gold at Regional Science Fair — In my first year participating, I secured a gold medal.</li>
                    <li><strong>Jan 2024:</strong> Joined Paterson High — Began my high school journey with a focus on academic excellence.</li>
                </ul>
            </div>
        </section>

  <section id="contact" class="section" data-aos="fade-up">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold gradient-text">Get In Touch</h2>
                <p class="text-gray-300 mt-2">I am always looking for new challenges and opportunities.</p>
            </div>
            <div class="max-w-xl mx-auto card">
                <form id="contact-form">
                    <div class="flex flex-col md:flex-row gap-4 mb-4">
                        <input type="text" name="name" placeholder="Your Name" class="bg-dark-space border border-bright-aqua rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-orange" required />
                        <input type="email" name="email" placeholder="Your Email" class="bg-dark-space border border-bright-aqua rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-orange" required />
                    </div>
                    <textarea name="message" placeholder="Your Message" rows="5" class="bg-dark-space border border-bright-aqua rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-accent-orange" required></textarea>
                    <button type="submit" class="btn-primary w-full">Send Message</button>
                </form>
                <div id="contact-success" class="text-green-400 mt-4 hidden">Thank you! Your message has been sent.</div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div>Paterson High — Port Elizabeth, Eastern Cape</div>
        <div class="mt-2">Email: <a href="mailto:clydesnyders723@gmail.com" class="text-bright-aqua hover:underline">clydesnyders723@gmail.com</a></div>
        <div class="mt-2">Phone: +27 79 577 9681</div>
        <div class="mt-2">Instagram: <a href="https://www.instagram.com/c.snyders.05" class="text-bright-aqua hover:underline" target="_blank">c.snyders.05</a></div>
        <div class="my-4 border-t border-gray-700"></div>
        <div>© 2025 — All rights reserved. Designed with a passion for the cosmos.</div>
    </footer>

 <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
        document.addEventListener('DOMContentLoaded', () => {
            // --- Animate On Scroll Init ---
            AOS.init({ once: true, duration: 800 });

            // --- Advanced Feature: Animated Starfield with Parallax ---
            const canvas = document.getElementById('starfield');
            const ctx = canvas.getContext('2d');
            let stars = [];
            const createStars = (count, speed, radius) => {
                let layer = [];
                for (let i = 0; i < count; i++) {
                    layer.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        r: Math.random() * radius + 0.5,
                        speed: Math.random() * speed + 0.1
                    });
                }
                return layer;
            }
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                stars = [
                    ...createStars(150, 0.3, 1.2), // Slow, small stars (far)
                    ...createStars(50, 0.6, 1.6),  // Medium stars
                    ...createStars(20, 1, 2.0)     // Fast, large stars (close)
                ];
            }
            const drawStars = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.save();
                ctx.globalAlpha = 0.8;
                for (const star of stars) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                    ctx.fillStyle = '#66fcf1';
                    ctx.fill();
                    star.x += star.speed;
                    if (star.x > canvas.width) star.x = 0;
                }
                ctx.restore();
            }
            const animateStars = () => {
                drawStars();
                requestAnimationFrame(animateStars);
            }
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            animateStars();

            // --- Animated Counters ---
            const animateCounters = () => {
                const counters = document.querySelectorAll('.counter');
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const el = entry.target;
                            let count = 0;
                            let target = parseFloat(el.dataset.count);
                            let decimals = target % 1 !== 0 ? 2 : 0;
                            let increment = target / 100;
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
                            observer.unobserve(el); // Animate only once
                        }
                    });
                }, { threshold: 0.5 });
                counters.forEach(counter => observer.observe(counter));
            };
            animateCounters();
            
            // --- Advanced Feature: Hero Typing Effect ---
            const typeWriter = () => {
                const el = document.getElementById('typing-effect');
                const text = "chasing greater.";
                let i = 0;
                const type = () => {
                    if (i < text.length) {
                        el.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, 120);
                    }
                }
                type();
            };
            typeWriter();

            // --- Contact Form Submission ---
            const contactForm = document.getElementById('contact-form');
            if(contactForm) {
                contactForm.addEventListener('submit', function(e){
                    e.preventDefault();
                    const successMessage = document.getElementById('contact-success');
                    successMessage.classList.remove('hidden');
                    setTimeout(() => { successMessage.classList.add('hidden'); }, 4000);
                    this.reset();
                });
            }
        });
    </script>
</body>
</html>
