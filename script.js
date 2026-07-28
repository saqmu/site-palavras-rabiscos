document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('targetBubble');

    // Interação suave com a bolha
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;
        
        requestAnimationFrame(() => {
            bubble.style.transform = `translate(${x}px, ${y}px) rotateX(${y}deg) rotateY(${x}deg)`;
        });
    });
});

function firework() {
    confetti({
        particleCount: 150,
        spread: 70,
        colors: ['#A2D2FF', '#BDB2FF', '#FFC6FF', '#FFD59E']
    });
    setTimeout(() => {
        window.open("https://palavraserabiscos.my.canva.site/artedigital", "_blank");
    }, 600);
}
