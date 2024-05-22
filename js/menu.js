document.addEventListener("DOMContentLoaded", function() {
    // Menü öğelerini seçin
    const menuItems = document.querySelectorAll("#menu li");

    // Her bir menü öğesi için mouseover ve mouseout olaylarını ekle
    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function(event) {
            item.classList.add("highlight"); // Öne çıkma sınıfını ekle
        });

        item.addEventListener("mouseout", function(event) {
            item.classList.remove("highlight"); // Öne çıkma sınıfını kaldır
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Menü öğelerini seçin
    const menuItems = document.querySelectorAll("#menu li");

    // Her bir menü öğesi için mouseover ve mouseout olaylarını ekle
    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function(event) {
            item.classList.add("highlight"); // Öne çıkma sınıfını ekle
        });

        item.addEventListener("mouseout", function(event) {
            item.classList.remove("highlight"); // Öne çıkma sınıfını kaldır
        });
    });
});
