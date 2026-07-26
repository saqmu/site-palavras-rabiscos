const blob = document.getElementById('blob');

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    
    // Suavizando o movimento da bolha de luz
    blob.animate({
        left: `${clientX - 150}px`,
        top: `${clientY - 150}px`
    }, { duration: 1500, fill: "forwards" });
}

// Logica simples de rolagem suave (scroll)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
