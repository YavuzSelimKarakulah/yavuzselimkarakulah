// Saat kodu 1 (Rabat saati)
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '62c6a700-16f7-11ef-af59-f337e6b09f24'; // WorldTimeAPI API anahtarı
    const city = 'Africa/Rabat'; // Rabat'ın saat dilimi

    const timeElement = document.getElementById('time');

    function getTime() {
        const timeApiURL = `https://worldtimeapi.org/api/timezone/${city}`;

        fetch(timeApiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Saat bilgisi alınamadı');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Hata ayıklama için veriyi konsola yazdır
                const { datetime } = data;

                const localTime = new Date(datetime);
                const hours = localTime.getHours();
                const minutes = localTime.getMinutes();
                const seconds = localTime.getSeconds();

                timeElement.textContent = `Rabat saati: ${hours}:${minutes}:${seconds}`;
            })
            .catch(error => {
                console.error(error);
                timeElement.textContent = 'Saat bilgisi alınamadı.';
            });
    }

    getTime();
});

// Saat kodu 2 (Yerel saati)
document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // Saati animasyonlu olarak güncelle
        $('#time').fadeOut(500, function() {
            $(this).text(`Yerel saati: ${hours}:${minutes}:${seconds}`).fadeIn(500);
        });
    }

    updateTime(); // Sayfa yüklendiğinde zamanı hemen güncelle

    // Her saniyede bir zamanı güncelle
    setInterval(updateTime, 1000);
});