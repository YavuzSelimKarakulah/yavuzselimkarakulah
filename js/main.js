$(document).ready(function(){
    $("li").on("click", function(event) {
        event.preventDefault(); 
        var target = $(this).find('a').attr('href'); 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); 
    });
});


function openWebsite(url) {
    document.getElementById("myIframe").src = url;
}
$(document).ready(function(){
    $('#contactForm').submit(function(event){
        event.preventDefault(); 
        var formData = $(this).serialize();
        console.log('Form Verileri:', formData);
        alert('Mesajınız başarıyla gönderildi. Teşekkür ederiz!');
        $(this)[0].reset();
    });
});



$(document).ready(function() {
    $('.social-style-one a').on('click', function(e) {
        e.preventDefault(); 
        alert('İkon tıklandı: ' + $(this).find('i').attr('class'));
    });

    $('.social-style-one a').hover(
        function() {
            $(this).css({
                'background-color': '#007bff',
                'color': '#fff',
                'transform': 'scale(1.1)'
            });
        },
        function() {
            $(this).css({
                'background-color': '',
                'color': '#333',
                'transform': 'scale(1)'
            });
        }
    );
});







  

  








