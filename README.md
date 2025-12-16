<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The professional portfolio for Clyde Snyders, a Grade 9 student from Paterson High School (PHS) specializing in STEM, robotics, and science." />
    <title>Clyde Snyders - Student & Innovator Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- link to the new modern minimal stylesheet (replaces the big inline style block) -->
    <link rel="stylesheet" href="/assets/css/portfolio-modern.css">
    <script src="https://cdn.jsdelivr.net/gh/threejs/r128/build/three.min.js"></script>
    
    <script src="https://cdn.jsdelivr.net/gh/cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

</head>
<body>
    <div id="preloader">
        <div class="loader"></div>
    </div>

<nav class="flex items-center justify-between px-6 py-4 container">
    <a href="#home" class="font-bold text-2xl">Clyde Snyders</a>
    <div id="deskstop-nav" class="hidden md:flex items-center gap-4">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#academics" class="nav-link">Academics</a>
        <a href="#achievements" class="nav-link">Achievements</a>
        <a href="#gallery" class="nav-link">Gallery</a>
        <a href="#blog" class="nav-link">Blog</a>
        <a href="#contact" class="nav-link">Contact</a>
    </div>
    <button id="mobile-menu-btn" class="md:hidden btn">Menu</button>
</nav>

<div class="site-wrap">

<section id="home" class="hero">
    <div class="hero-content">
        <h1>Clyde Snyders</h1>
        <div class="hero-subtitle muted">Grade 9 Student | Patterson High School | Eastern Cape</div>
        <p class="mt-4 content">Hi, my name is Clyde Snyders and I am a Grade 9 student at Paterson High School in the vibrant Eastern Cape. My journey into the world of STEM wasn't a single moment but a gradual awakening. I started with a small fascination for how things work — taking apart old electronics and trying to put them back together. That 'aha!' moment was because of my patience.</p>
        <div class="mt-6">
            <a href="#about" class="btn">About Me</a>
            <a href="#gallery" class="btn" style="background:#fff;color:var(--accent);border:1px solid var(--border);">Gallery</a>
        </div>
    </div>
</section>

<section id="about" class="card">
    <h2>About Me</h2>
    <div class="section-content">
        <p>I am driven, curious, and passionate about science, technology, and growth. My journey into robotics began with a simple fascination for how things work. It grew into building and programming robots, exploring physics, and collaborating on team projects. Whether it's building robots, exploring physics, or collaborating on team projects, I believe every challenge is an opportunity to learn and contribute.</p>
    </div>
</section>

<section id="academics" class="">
    <h2>Academics & Performance</h2>
    <div class="cards-grid mt-6">
        <div class="card">
            <h3>Gold Medal: Regional Science Expo</h3>
            <p class="muted">2025 — Regional competition for student projects.</p>
            <p class="mt-3">Awarded a gold medal for a project that demonstrated creative application of science to a community problem.</p>
        </div>
        <div class="card">
            <h3>Bronze Medal: International Science Fair</h3>
            <p class="muted">2024 — Represented local school at international level.</p>
            <p class="mt-3">Practical participation and strong execution on project delivery.</p>
        </div>
    </div>
</section>

<section id="achievements" class="">
    <h2>Achievements & Awards</h2>
    <div class="cards-grid mt-6">
        <div class="card">
            <h3>SpirngBots Competition — World</h3>
            <p class="muted">Team-based robotics competition.</p>
            <p class="mt-3">Contributed to a team that designed and programmed an autonomous robot for a precise task.</p>
        </div>
        <div class="card">
            <h3>Community Projects</h3>
            <p class="muted">STEM outreach and mentorship.</p>
            <p class="mt-3">Guided younger students through small robotics workshops and coding clubs.</p>
        </div>
    </div>
</section>

<section id="gallery" class="gallery">
    <h2>Gallery</h2>
    <div class="gallery-grid mt-6">
        <img src="IMG-20250828-WA0025.jpg" alt="Robot build at competition" class="item">
        <img src="IMG-20250830-WA0019.jpg" alt="Team at award ceremony" class="item">
        <img src="IMG-20250828-WA0006.jpg" alt="Workshop hands-on" class="item">
    </div>
</section>

<section id="blog" class="">
    <h2>Blog & Reflections</h2>
    <div class="mt-6">
        <div class="post">
            <h3>Learning by Doing</h3>
            <p class="muted">Aug 2025</p>
            <p class="mt-3">Hands-on projects have taught me how problems can be approached from many angles. Each iteration leads to an improved solution.</p>
        </div>
    </div>
</section>

<section id="contact" class="card">
    <h2>Contact</h2>
    <form class="contact-form" action="https://formspree.io/f/xgvlvvnn" method="POST">
        <label for="email">Your Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write a short message"></textarea>
        <button type="submit" class="btn">Send Message</button>
    </form>
</section>

<footer>
    <p>© 2025 Clyde Snyders — All rights reserved.</p>
</footer>


<script>
// Minimal JS to handle mobile menu toggle and simple fade-up on scroll
(function(){
  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('deskstop-nav');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      nav.classList.toggle('hidden');
    });
  }

  // Simple intersection observer to add .in-view to .fade-up elements
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el=> io.observe(el));
})();
</script>

</body>
</html>
