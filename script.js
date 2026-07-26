function curtir(btn) {
    let countSpan = btn.querySelector('.count');
    let atual = parseInt(countSpan.innerText);
    countSpan.innerText = atual + 1;
    
    // Pequena animação
    btn.style.backgroundColor = "#ff6b81";
    setTimeout(() => { btn.style.backgroundColor = "#ff4757"; }, 200);
}
