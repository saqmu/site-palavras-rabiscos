document.addEventListener("DOMContentLoaded", function() {
    const bubble = document.getElementById("bubble");
    const blobsContainer = document.getElementById("bgBlobs");
    const colors = ['#A2D2FF', '#CDB4DB', '#FFC6FF', '#FFD59E'];

    // Criar as diversas bolhas coloridas no fundo
    for (let i = 0; i < 15; i++) {
        let b = document.createElement("div");
        b.className = "blob";
        let size = Math.random() * 300 + 100;
        b.style.width = size + "px";
        b.style.height = size + "px";
        b.style.background = colors[Math.floor(Math.random() * colors.length)];
        b.style.left = Math.random() * 100 + "vw";
        b.style.top = Math.random() * 100 + "vh";
        blobsContainer.appendChild(b);
    }

    // INTERATIVIDADE DAS BOLHAS DO FUNDO
    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        
        document.querySelectorAll(".blob").forEach((b, index) => {
            const ratio = (index + 1) * 0.02;
            const moveX = (clientX - window.innerWidth / 2) * ratio;
            const moveY = (clientY - window.innerHeight / 2) * ratio;
            b.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        // INTERATIVIDADE DA BOLHA DE SABÃO (Ondulação)
        if (bubble) {
            const rect = bubble.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = (clientX - centerX) / 20;
            const dy = (clientY - centerY) / 20;
            bubble.style.transform = `translate(${dx}px, ${dy}px) rotateX(${dy}deg) rotateY(${dx}deg) scale(1.05)`;
        }
    });

    document.addEventListener("mouseleave", () => {
        bubble.style.transform = "translate(0,0) scale(1)";
    });
});
