<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clyde Snyders - Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet">
    <!-- Animate On Scroll (AOS) CSS -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <style>
        body { background: #15181f; color: #f0f4fa; font-family: 'Inter', sans-serif; transition: background .4s, color .4s;}
        .starfield { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index:-1; pointer-events:none;}
        .avatar { width: 200px; height: 200px; border-radius: 50%; border: 4px solid #15181f;}
        .gradient-border { border: 4px solid #2ec3fa; border-radius: 50%;}
        .section { padding: 3rem 1rem; max-width: 1200px; margin: 0 auto;}
        .badge { background: #2ec3fa22; color: #2ec3fa; border-radius: 999px; padding: 0.3em 1em; font-size: 0.95em; font-weight: 600; display: inline-block;}
        .card { background: #23283e; border-radius: 1em; padding: 1.5em; margin-bottom: 1.5em; box-shadow: 0 4px 30px rgba(46,195,250,0.05);}
        .stat { text-align: center; margin: 1em 0;}
        .progress { height: 8px; background: #2ec3fa44; border-radius: 999px; overflow: hidden;}
        .progress-bar { height: 8px; background: #2ec3fa;}
        .footer { background: #23283e; color: #aaa; padding: 2em 1em; text-align: center; border-top: 1px solid #222;}
        .theme-toggle { position: fixed; top: 1rem; right: 1rem; z-index: 20;}
        .modal { display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.8); align-items:center; justify-content:center; z-index:50;}
        .modal.active { display:flex; }
        .modal-content { background:#23283e; border-radius:1em; padding:2em; max-width:90vw; max-height:90vh; overflow:auto; }
        @media (prefers-color-scheme: dark) { body { background: #15181f; color: #f0f4fa;} }
        @media (prefers-color-scheme: light) { body { background: #f0f4fa; color: #15181f;} }
    </style>
</head>
<body>
    <!-- Theme Toggle Button -->
    <button class="theme-toggle bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg" onclick="toggleTheme()" aria-label="Toggle theme">
        🌙/☀️
    </button>
    <!-- Animated Starfield -->
    <canvas id="starfield" class="starfield"></canvas>
    <!-- Navigation -->
    <nav class="w-full bg-[#1a1d25] border-b border-[#222] py-3 px-4 flex justify-between items-center sticky top-0 z-10 shadow-lg">
        <span class="font-bold text-xl text-cyan-400">Clyde Snyders</span>
        <div class="space-x-6 hidden md:inline-block">
            <a href="#home" class="hover:text-cyan-400 transition">Home</a>
            <a href="#about" class="hover:text-cyan-400 transition">About</a>
            <a href="#academics" class="hover:text-cyan-400 transition">Academics</a>
            <a href="#achievements" class="hover:text-cyan-400 transition">Achievements</a>
            <a href="#timeline" class="hover:text-cyan-400 transition">Trajectory</a>
            <a href="#gallery" class="hover:text-cyan-400 transition">Gallery</a>
            <a href="#testimonials" class="hover:text-cyan-400 transition">Testimonials</a>
            <a href="#blog" class="hover:text-cyan-400 transition">Mission Logs</a>
            <a href="#contact" class="hover:text-cyan-400 transition">Contact</a>
        </div>
    </nav>
<!-- HERO -->
    <section id="home" class="section bg-cover bg-center relative text-center" style="background-image:url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop');" data-aos="fade-up">
        <div style="background:rgba(0,0,0,0.6);position:absolute;inset:0;z-index:0;"></div>
        <div style="position:relative;z-index:1;">
            <span class="badge mb-4">Grade 9 Student | Paterson High</span>
            <h1 class="text-4xl md:text-6xl font-bold mb-2 animate-bounce">Clyde Snyders</h1>
            <p class="text-lg text-gray-300 mb-8">chasing greater</p>
            <div class="flex justify-center gap-4 mb-8">
                <a href="#contact" class="bg-cyan-500 text-white rounded-lg px-8 py-3 font-semibold hover:bg-cyan-400 transition">Contact Me</a>
                <a href="#" class="border border-white text-white rounded-lg px-8 py-3 font-semibold hover:bg-white hover:text-black transition" download>Download CV</a>
            </div>
            <div class="flex justify-center gap-6 mt-4">
                <a href="https://www.instagram.com/c.snyders.05" target="_blank" class="text-gray-300 hover:text-white transition">Instagram</a>
                <a href="mailto:clydesnyders723@gmail.com" class="text-gray-300 hover:text-white transition">Email</a>
            </div>
        </div>
    </section>
<!-- ABOUT -->
    <section id="about" class="section bg-[#22263a]" data-aos="fade-up">
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/3 text-center">
                <img src="http://googleusercontent.com/file_content/1" alt="Clyde Snyders" class="avatar gradient-border mx-auto mb-6 shadow-lg" />
            </div>
            <div class="md:w-2/3">
                <h2 class="text-3xl font-bold mb-4">About Me</h2>
                <p class="text-gray-300 mb-6">
                    Hi, my name is Clyde Snyders and I am a grade 9 student from Paterson High School in the Eastern Cape. I am passionate about learning, growing, and making a positive impact in everything I do. I love robotics, science fairs, and getting top marks!
                </p>
                <div class="flex gap-8 mb-8">
                    <div class="stat">
                        <div class="text-3xl font-bold counter" data-count="81.1">0</div>
                        <div class="text-sm text-gray-400">Avg. Mark</div>
                    </div>
                    <div class="stat">
                        <div class="text-3xl font-bold counter" data-count="2">0</div>
                        <div class="text-sm text-gray-400">Robotics</div>
                    </div>
                    <div class="stat">
                        <div class="text-3xl font-bold counter" data-count="2">0</div>
                        <div class="text-sm text-gray-400">Science Expo</div>
                    </div>
                </div>
                <h3 class="text-2xl font-bold mb-4">Core Skills</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Mathematics</span><span>92%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:92%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Natural Science</span><span>81.5%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:81.5%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Robotics</span><span>88%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:88%"></div></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-1"><span>Engineering Design</span><span>85%</span></div>
                        <div class="progress"><div class="progress-bar" style="width:85%"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <!-- ACADEMICS -->
    <section id="academics" class="section" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">Academic Performance</h2>
            <p class="text-gray-300 mt-2">My Grade 9 academic results, showcasing a strong performance across all subjects.</p>
        </div>
        <div class="card overflow-x-auto">
            <table class="w-full text-left">
                <thead>
                    <tr class="border-b border-gray-700">
                        <th class="py-2">Subject</th>
                        <th class="py-2">Score (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Maths</td><td><span class="counter" data-count="92">0</span></td></tr>
                    <tr><td>English</td><td><span class="counter" data-count="74">0</span></td></tr>
                    <tr><td>Afrikaans</td><td><span class="counter" data-count="72">0</span></td></tr>
                    <tr><td>Natural Sci</td><td><span class="counter" data-count="81.5">0</span></td></tr>
                    <tr><td>Technology</td><td><span class="counter" data-count="87.5">0</span></td></tr>
                    <tr><td>Creative Arts</td><td><span class="counter" data-count="82.22">0</span></td></tr>
                    <tr><td>Social Sci</td><td><span class="counter" data-count="95.5">0</span></td></tr>
                    <tr><td>EMS</td><td><span class="counter" data-count="83.79">0</span></td></tr>
                </tbody>
            </table>
        </div>
    </section>
 <!-- ACHIEVEMENTS -->
    <section id="achievements" class="section bg-[#22263a]" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">Key Achievements</h2>
            <p class="text-gray-300 mt-2">Highlights from my participation in national and international competitions.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="card" data-aos="zoom-in">
                <div class="font-semibold text-lg">Gold Medal: Regional Science Expo</div>
                <div class="text-gray-400 mb-2">2025</div>
                <p>Awarded a gold medal for the second consecutive year and won Best Category in Physics.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="100">
                <div class="font-semibold text-lg">Gold Medal: Springbots Robotics</div>
                <div class="text-gray-400 mb-2">2025</div>
                <p>Won gold at the regional Springbots robotics competition, later placing 6th nationally.</p>
            </div>
            <div class="card" data-aos="zoom-in" data-aos-delay="200">
                <div class="font-semibold text-lg">Bronze Medal: International Science Fair</div>
                <div class="text-gray-400 mb-2">2024</div>
                <p>Secured a bronze medal in the 'Engineering' category at the ISF against 69+ students.</p>
            </div>
        </div>
    </section>
 <!-- TIMELINE -->
    <section id="timeline" class="section" data-aos="fade-up">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold">My Trajectory</h2>
            <p class="text-gray-300 mt-2">Key milestones that have shaped my high school career.</p>
        </div>
        <div class="card">
            <ul class="space-y-4 timeline-list">
                <li><strong>Jan 2024:</strong> Joined Paterson High — Began my high school journey with a focus on academic excellence.</li>
                <li><strong>Aug 2024:</strong> Gold at Regional Science Fair — In my first year participating, I secured a gold medal.</li>
                <li><strong>Oct 2024:</strong> Bronze at International Science Fair (ISF) — Won a bronze medal in engineering among 69+ students.</li>
                <li><strong>Dec 2024:</strong> Bronze at World Robot Olympiad (WRO) — Achieved a bronze medal in robotics.</li>
                <li><strong>May 2025:</strong> Gold at Regional Springbots — Won the gold medal at regional robotics.</li>
                <li><strong>Jun 2025:</strong> 6th Place at National Springbots — Secured a sixth-place finish nationally.</li>
                <li><strong>Aug 2025:</strong> Repeat Gold at Regional Science Fair — Won a second gold and Best Category award in Physics.</li>
            </ul>
        </div>
    </section>
  <!-- GALLERY -->
    <section id="gallery" class="section bg-[#22263a]" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">Gallery</h2>
            <p class="text-gray-300 mt-2">A glimpse into my life at school and beyond.</p>
            <div class="flex justify-center gap-2 mt-4">
                <button onclick="filterGallery('all')" class="badge">All</button>
                <button onclick="filterGallery('awards')" class="badge">Awards</button>
                <button onclick="filterGallery('robotics')" class="badge">Robotics</button>
                <button onclick="filterGallery('science')" class="badge">Science</button>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="gallery-grid">
            <div class="card gallery-item awards">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" alt="Awards evening — Paterson High" class="rounded-lg mb-2 cursor-pointer" onclick="openModal('Awards evening — Paterson High', this.src)"/>
                <p>Awards evening — Paterson High</p>
            </div>
            <div class="card gallery-item robotics">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" alt="Robotics team collaboration" class="rounded-lg mb-2 cursor-pointer" onclick="openModal('Robotics team collaboration', this.src)"/>
                <p>Robotics team collaboration</p>
            </div>
            <div class="card gallery-item science">
                <img src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=800&auto=format&fit=crop" alt="Science Expo project presentation" class="rounded-lg mb-2 cursor-pointer" onclick="openModal('Science Expo project presentation', this.src)"/>
                <p>Science Expo project presentation</p>
            </div>
            <div class="card gallery-item awards">
                <img src="https://images.unsplash.com/photo-1531482615713-2c65788b6cc6?q=80&w=800&auto=format&fit=crop" alt="Study group — Preparing for exams" class="rounded-lg mb-2 cursor-pointer" onclick="openModal('Study group — Preparing for exams', this.src)"/>
                <p>Study group — Preparing for exams</p>
            </div>
        </div>
        <!-- Modal for gallery images -->
        <div id="modal" class="modal" tabindex="-1" role="dialog" onclick="closeModal(event)">
            <div class="modal-content">
                <img id="modal-img" src="" alt="" class="rounded-lg mb-4 max-w-full max-h-[70vh]"/>
                <h2 id="modal-title" class="text-xl font-bold mb-2"></h2>
                <button onclick="closeModal()" class="bg-cyan-500 text-white px-6 py-2 rounded-lg mt-2">Close</button>
            </div>
        </div>
    </section>
  <!-- TESTIMONIALS -->
    <section id="testimonials" class="section" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">What Others Say</h2>
            <p class="text-gray-300 mt-2">Words of encouragement from teachers, mentors, and peers.</p>
        </div>
        <div class="card max-w-4xl mx-auto">
            <div id="testimonial-carousel" class="relative">
                <div class="testimonial-slide">
                    <p class="italic mb-4">"Clyde’s analytical ability and leadership in group projects stand out. He has the potential for top-tier university success."</p>
                    <strong>Mr. Jackman</strong><br/><span class="text-gray-400">Science Teacher</span>
                </div>
                <div class="testimonial-slide hidden">
                    <p class="italic mb-4">"Disciplined, hardworking, and driven — Clyde consistently pushes his limits."</p>
                    <strong>Coach Mkhize</strong><br/><span class="text-gray-400">Athletics Coach</span>
                </div>
                <div class="testimonial-slide hidden">
                    <p class="italic mb-4">"He inspires confidence in our team. Always supportive, always prepared, and an excellent speaker."</p>
                    <strong>Thandiwe M.</strong><br/><span class="text-gray-400">Peer & Team Member</span>
                </div>
                <button onclick="prevTestimonial()" class="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white px-2 py-1 rounded-full">‹</button>
                <button onclick="nextTestimonial()" class="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white px-2 py-1 rounded-full">›</button>
            </div>
        </div>
    </section>
  <!-- BLOG -->
    <section id="blog" class="section bg-[#22263a]" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">Mission Logs</h2>
            <p class="text-gray-300 mt-2">My thoughts and experiences on my academic and extracurricular journey.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="card">
                <div class="font-semibold text-lg">My Journey in Competitive Robotics</div>
                <div class="text-gray-400 mb-2">June 2025</div>
                <p>From regional wins to national challenges, here's what I've learned building robots.</p>
                <a href="#" onclick="openBlogModal('My Journey in Competitive Robotics', 'From regional wins to national challenges, here\'s what I\'ve learned building robots.')" class="text-cyan-400 underline">Read More</a>
            </div>
            <div class="card">
                <div class="font-semibold text-lg">The Science Expo: More Than Just a Project</div>
                <div class="text-gray-400 mb-2">May 2025</div>
                <p>Behind the scenes of my project on energy-efficient study lamps.</p>
                <a href="#" onclick="openBlogModal('The Science Expo: More Than Just a Project', 'Behind the scenes of my project on energy-efficient study lamps.')" class="text-cyan-400 underline">Read More</a>
            </div>
            <div class="card">
                <div class="font-semibold text-lg">Balancing STEM Passions with School</div>
                <div class="text-gray-400 mb-2">March 2025</div>
                <p>How I manage my time between robotics, science fairs, and maintaining top grades.</p>
                <a href="#" onclick="openBlogModal('Balancing STEM Passions with School', 'How I manage my time between robotics, science fairs, and maintaining top grades.')" class="text-cyan-400 underline">Read More</a>
            </div>
        </div>
        <!-- Modal for Mission Log/Blog -->
        <div id="blog-modal" class="modal" tabindex="-1" role="dialog" onclick="closeBlogModal(event)">
            <div class="modal-content">
                <h2 id="blog-modal-title" class="text-xl font-bold mb-2"></h2>
                <p id="blog-modal-content"></p>
                <button onclick="closeBlogModal()" class="bg-cyan-500 text-white px-6 py-2 rounded-lg mt-2">Close</button>
            </div>
        </div>
    </section>
   <!-- CONTACT -->
    <section id="contact" class="section" data-aos="fade-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold">Get In Touch</h2>
            <p class="text-gray-300 mt-2">I am always looking for new challenges and opportunities.</p>
        </div>
        <div class="max-w-xl mx-auto card">
            <form id="contact-form">
                <div class="flex flex-col md:flex-row gap-4 mb-4">
                    <input type="text" name="name" placeholder="Your Name" class="bg-[#15181f] border border-[#2ec3fa] rounded-md px-3 py-2 w-full" required />
                    <input type="email" name="email" placeholder="Your Email" class="bg-[#15181f] border border-[#2ec3fa] rounded-md px-3 py-2 w-full" required />
                </div>
                <textarea name="message" placeholder="Your Message" rows="5" class="bg-[#15181f] border border-[#2ec3fa] rounded-md px-3 py-2 w-full mb-4" required></textarea>
                <button type="submit" class="bg-cyan-500 text-white rounded-lg px-8 py-3 font-semibold hover:bg-cyan-400 w-full transition">Send Message</button>
            </form>
            <div id="contact-success" class="text-green-500 mt-4 hidden">Thank you! Your message has been sent.</div>
        </div>
    </section>
     <!-- FOOTER -->
    <footer class="footer">
        <div>Paterson High — Port Elizabeth, Eastern Cape</div>
        <div class="mt-2">Email: <a href="mailto:clydesnyders723@gmail.com" class="text-cyan-400 hover:underline">clydesnyders723@gmail.com</a></div>
        <div class="mt-2">Phone: +27 79 577 9681</div>
        <div class="mt-2">Instagram: <a href="https://www.instagram.com/c.snyders.05" class="text-cyan-400 hover:underline" target="_blank">c.snyders.05</a></div>
        <div class="my-4 border-t border-[#2ec3fa44]"></div>
        <div>© 2025 — All rights reserved. Built with Tailwind CSS.</div>
    </footer>
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script>
        // Animate On Scroll Init
        AOS.init();
        // Animated Starfield
        const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');
        let stars = [];
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        function createStars() {
            stars = [];
            for (let i = 0; i < 150; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random()*1.4+0.6,
                    speed: Math.random()*0.3+0.1
                });
            }
        }
        function drawStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.globalAlpha = 0.7;
            for (const star of stars) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fillStyle = '#2ec3fa';
                ctx.fill();
                star.x += star.speed;
                if (star.x > canvas.width) star.x = 0;
            }
            ctx.restore();
        }
        function animateStars() {
            drawStars();
            requestAnimationFrame(animateStars);
        }
        resizeCanvas();
        createStars();
        animateStars();
        // Animated Counters
        function animateCounters() {
            document.querySelectorAll('.counter').forEach(el => {
                let count = 0;
                let target = parseFloat(el.dataset.count);
                let decimals = target % 1 !== 0 ? 2 : 0;
                let increment = target / 50;
                function update() {
                    count += increment;
                    if (count < target) {
                        el.textContent = decimals ? count.toFixed(decimals) : Math.round(count);
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target;
                    }
                }
                update();
            });
        }
        document.addEventListener('DOMContentLoaded', animateCounters);
 // Theme Toggle
        function toggleTheme() {
            if(document.body.style.background === 'rgb(240, 244, 250)') {
                document.body.style.background = '#15181f';
                document.body.style.color = '#f0f4fa';
            } else {
                document.body.style.background = '#f0f4fa';
                document.body.style.color = '#15181f';
            }
        }
        // Gallery Filter
        function filterGallery(cat) {
            document.querySelectorAll('.gallery-item').forEach(item => {
                if(cat === 'all' || item.classList.contains(cat)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        // Gallery Modal
        function openModal(title, src) {
            document.getElementById('modal-img').src = src;
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal').classList.add('active');
        }
        function closeModal(event) {
            if (!event || event.target.id === 'modal' || event.target.tagName === 'BUTTON') {
                document.getElementById('modal').classList.remove('active');
            }
        }
        // Testimonials Carousel
        let testimonialIndex = 0;
        function showTestimonial(idx) {
            const slides = document.querySelectorAll('.testimonial-slide');
            slides.forEach((slide,i) => {
                slide.classList.toggle('hidden', i !== idx);
            });
        }
        function nextTestimonial() {
            const slides = document.querySelectorAll('.testimonial-slide');
            testimonialIndex = (testimonialIndex + 1) % slides.length;
            showTestimonial(testimonialIndex);
        }
        function prevTestimonial() {
            const slides = document.querySelectorAll('.testimonial-slide');
            testimonialIndex = (testimonialIndex - 1 + slides.length) % slides.length;
            showTestimonial(testimonialIndex);
        }
        showTestimonial(testimonialIndex);
  // Blog Modal
        function openBlogModal(title, content) {
            document.getElementById('blog-modal-title').textContent = title;
            document.getElementById('blog-modal-content').textContent = content;
            document.getElementById('blog-modal').classList.add('active');
        }
        function closeBlogModal(event) {
            if (!event || event.target.id === 'blog-modal' || event.target.tagName === 'BUTTON') {
                document.getElementById('blog-modal').classList.remove('active');
            }
        }
    // Contact Form (Demo: shows success)
        document.getElementById('contact-form').addEventListener('submit', function(e){
            e.preventDefault();
            document.getElementById('contact-success').classList.remove('hidden');
            setTimeout(()=>{document.getElementById('contact-success').classList.add('hidden');}, 4000);
            this.reset();
        });
    </script>
</body>
</html>
