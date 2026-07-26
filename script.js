// 1. Criando as bolhas de fundo
const bgBlobsContainer = document.getElementById('bgBlobs');
const colors = ['#A2D2FF', '#CDB4DB', '#FFC6FF', '#FFD59E'];

for(let i=0; i < 6; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bg-bubble';
    bubble.style.width = Math.random() * 300 + 100 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.top = Math.random() * 100 + '%';
    bgBlobsContainer.appendChild(bubble);
}

// 2. Ondulação na Bolha Principal ao passar o mouse
const soap = document.getElementById('soapBubble');

soap.onmousemove = (e) => {
    const rect = soap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    
    // Efeito de ondulação física suave
    soap.style.transform = `translate(${x*0.1}px, ${y*0.1}px) scale(1.1) rotateX(${y*0.2}deg) rotateY(${x*0.2}deg)`;
};

soap.onmouseleave = () => {
    soap.style.transform = `translate(0,0) scale(1) rotateX(0) rotateY(0)`;
};

// 3. Bolhas de fundo fogem do cursor
window.onmousemove = (e) => {
    document.querySelectorAll('.bg-bubble').forEach(b => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        b.style.transform = `translate(${x}px, ${y}px)`;
    });
};
