// SIMULAÇÃO DO LAGO FLUÍDO (CANVAS)
const canvas = document.getElementById('liquidCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null };
const colors = ['#A2D2FF', '#BDB2FF', '#FFC6FF', '#FFD59E'];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 200 + 100;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Efeito de repulsão/rastro de luz ao passar o mouse
        if (mouse.x && mouse.y) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 300) {
                this.x -= dx * 0.01;
                this.y -= dy * 0.01;
            }
        }

        if (this.x < -200 || this.x > canvas.width + 200) this.reset();
        if (this.y < -200 || this.y > canvas.height + 200) this.reset();
    }
}

function init() {
    resize();
    particles = [];
    for (let i = 0; i < 8; i++) particles.push(new Particle());
}

function animate() {
    // No modo claro, rastro escuro. No modo escuro, rastro claro.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

// EVENTOS
window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x; mouse.y = e.y;
});

// BOLHA ONDULANTE (REVOLUCIONADO)
const bubble = document.getElementById('realisticBubble');
bubble.addEventListener('click', (e) => {
    bubble.style.transition = '0.3s';
    bubble.style.transform = 'scale(0.9)';
    setTimeout(() => {
        bubble.style.transform = 'scale(1.05)';
        confetti({ particleCount: 50, spread: 60, colors: colors });
    }, 150);
});

// REVELAR SEÇÕES NO SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('appear');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// TEMA
function toggleTheme() {
    document.body.classList.toggle('dark');
}

function openPortfolio() {
    confetti({ particleCount: 150, origin: { y: 0.6 } });
    setTimeout(() => {
        window.open("https://palavraserabiscos.my.canva.site/artedigital", "_blank");
    }, 500);
}

init();
animate();
