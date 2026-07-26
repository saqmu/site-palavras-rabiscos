// Função simples de curtidas
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

let count = 0;

likeBtn.addEventListener('click', () => {
    count++;
    likeCount.innerText = count;
    
    // Pequeno efeito visual de "pulsar"
    likeBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
        likeBtn.style.transform = "scale(1)";
    }, 100);
});
