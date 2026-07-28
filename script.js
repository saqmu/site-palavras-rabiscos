// 1. Cursor Personalizado
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Bolha Interativa Realista (Fix)
const bubble = document.getElementById('mainBubble');
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    bubble.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

// 3. Dark Mode (Modo Noturno)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// 4. Animação de Scroll (Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => observer.observe(card));

// 5. Explosão de Rabiscos (Confetes Coloridos)
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A2D2FF', '#BDB2FF', '#FFC6FF', '#FFD59E']
    });
    setTimeout(() => {
        window.open("https://palavraserabiscos.my.canva.site/artedigital", "_blank");
    }, 500);
}

// Carregar preferência de tema
if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
