const mekanlarTitle = document.getElementById('mekanlar-title');

mekanlarTitle.addEventListener("mouseenter", function() {
    // Mouse h2 başlığının üzerine gelince yapılacak işlemler
    mekanlarTitle.style.transform = "translateY(-10px)"; // Yukarı doğru animasyon eklemek için CSS sınıfını ekleyin
    mekanlarTitle.style.color = "#ff0000"; // Rengin değişmesi
});

mekanlarTitle.addEventListener("mouseleave", function() {
    // Mouse h2 başlığının üzerinden ayrılınca yapılacak işlemler
    mekanlarTitle.style.transform = "translateY(0)"; // Transformu sıfırla
    mekanlarTitle.style.color = "#000"; // Rengi varsayılan hale getir
});
