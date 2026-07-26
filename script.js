const blob = document.getElementById("blob");

window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
        left: `${clientX - 200}px`,
        top: `${clientY - 200}px`
    }, { duration: 1500, fill: "forwards" });
}
