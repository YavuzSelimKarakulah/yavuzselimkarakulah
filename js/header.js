document.addEventListener("DOMContentLoaded", function() {
    const h1Elements = document.querySelectorAll('.scroll-container h1');
    
    // Her bir h1 etiketini seç ve animasyonu başlat
    h1Elements.forEach(function(element) {
        element.style.animationPlayState = 'running';
    });
});