document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '26c6b7036a055d86e9868e93808ae50f'; // Buraya kendi OpenWeatherMap API anahtarınızı ekleyin
    const city = 'Rabat'; // Hava durumu verisini almak istediğiniz şehir

    const weatherContainer = document.getElementById('weather');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    function getWeather() {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hava durumu verisi alınamadı');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Hata ayıklama için veriyi konsola yazdır
                const { name } = data;
                const { temp } = data.main;
                const { description } = data.weather[0];

                locationElement.textContent = `Şehir: ${name}`;
                temperatureElement.textContent = `Sıcaklık: ${temp}°C`;
                descriptionElement.textContent = `Hava Durumu: ${description}`;
            })
            .catch(error => {
                console.error(error);
                weatherContainer.innerHTML = '<p>Hava durumu verisi alınamadı. Lütfen daha sonra tekrar deneyin.</p>';
            });
    }

    getWeather();
});







$(document).ready(function() {
    function updateWeather() {
        const apiKey = '26c6b7036a055d86e9868e93808ae50f'; // OpenWeatherMap API anahtarı
        const city = 'Rabat'; // Hava durumu verisini almak istediğiniz şehir

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`,
            method: 'GET',
            success: function(data) {
                const { name } = data;
                const { temp } = data.main;
                const { description } = data.weather[0];

                // Hava durumu bilgisini animasyonlu olarak güncelle
                $('.weather').fadeOut(500, function() {
                    $('#location').text(`Şehir: ${name}`);
                    $('#description').text(`Hava Durumu: ${description}`);
                    $(this).fadeIn(500);
                });

                // Sıcaklık değerini animasyonlu olarak güncelle
                $('#temperature').animate({ num: temp }, {
                    duration: 500,
                    step: function () {
                        $(this).text('Sıcaklık: ' + Math.round(this.num) + '°C');
                    }
                });
            },
            error: function() {
                // Hata durumunda
                $('.weather').text('Hava durumu verisi alınamadı. Lütfen daha sonra tekrar deneyin.');
            }
        });
    }

    updateWeather(); // Sayfa yüklendiğinde hava durumu bilgisini hemen güncelle

    // Her 5 dakikada bir hava durumu bilgisini güncelle
    setInterval(updateWeather, 2 * 60 * 1000);
});
