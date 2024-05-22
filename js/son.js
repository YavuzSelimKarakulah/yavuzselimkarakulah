// Renk değiştirme kodu
document.addEventListener("DOMContentLoaded", function() {
    var h2Elements = document.querySelectorAll("#Iletisim h2");
    var colors = ['red', 'blue', 'green', 'orange']; // Renklerin listesi
    var currentIndex = 0;

    setInterval(function() {
        // Mevcut renk
        var currentColor = colors[currentIndex];
        
        // Bir sonraki renk
        currentIndex = (currentIndex + 1) % colors.length;
        var nextColor = colors[currentIndex];
        
        // Renk değişimi
        h2Elements.forEach(function(element) {
            element.style.color = nextColor;
        });
    }, 2000); // Her 2 saniyede bir renk değiştir
});