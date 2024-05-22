document.addEventListener("DOMContentLoaded", function() {
    var colors = ['red', 'blue', 'green', 'orange']; // Renklerin listesi
    var currentIndex = 0;
    var geziRehberi = document.getElementById("gezi-rehberi");

    setInterval(function() {
        // Mevcut renk
        var currentColor = colors[currentIndex];
        
        // Bir sonraki renk
        currentIndex = (currentIndex + 1) % colors.length;
        var nextColor = colors[currentIndex];
        
        // Renk değişimi
        geziRehberi.style.color = nextColor;
    }, 2000); // Her 2 saniyede bir renk değiştir
});