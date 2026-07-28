// Em vez de 'follow cursor', use uma animação de distorção por hover
bubble.addEventListener('mousemove', (e) => {
    const rect = bubble.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Isso cria a ilusão de que você está "deformando" a bolha onde o mouse toca
    bubble.style.setProperty('--x', `${x}px`);
    bubble.style.setProperty('--y', `${y}px`);
    bubble.style.borderRadius = "40% 60% 70% 30% / 40% 50% 60% 50%"; // distorce no toque
});
