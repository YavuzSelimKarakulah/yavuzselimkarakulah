$(document).ready(function() {
    $("#Yemekler h2").hover(
        function() {
            // Mouse h2 başlığının üzerine gelince yapılacak işlemler
            $(this).css({
                "transform": "translateY(-10px)", // Yukarı doğru animasyon
                "color": "#ff0000" // Rengin değişmesi
            });
        },
        function() {
            // Mouse h2 başlığının üzerinden ayrılınca yapılacak işlemler
            $(this).css({
                "transform": "translateY(0)", // Transformu sıfırla
                "color": "#000" // Rengi varsayılan hale getir
            });
        }
    );
});
