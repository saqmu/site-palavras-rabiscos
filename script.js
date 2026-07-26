const btn = document.getElementById('likeBtn');
const countLabel = document.getElementById('likeCount');
let likes = 0;

btn.addEventListener('click', () => {
    likes++;
    countLabel.innerText = likes;
    
    // Criar um efeito de mini-coração subindo (opcional, mas legal!)
    const spark = document.createElement('span');
    spark.innerText = '🌸';
    spark.style.position = 'absolute';
    btn.appendChild(spark);
    
    setTimeout(() => spark.remove(), 1000);
});
