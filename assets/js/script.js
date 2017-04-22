$(document).ready(function () {
     $('.logo').addClass('animated zoomInDown');
    $('.al-delivery').addClass('animated bounceInLeft extra');
    $('.al-info-number').addClass('animated bounceInRight extra');

    $('html').click(function() {
        $('.answer').removeClass('active');
    });





    $(".order").click(function(e){
        $('.modal-info').fadeIn(500);
    });
    $(".modal-info").click(function(e){
        $(this).fadeOut(250);
    });
    $(".close").click(function(e){
        $(".modal-info").fadeOut(250);
    });
	
    $('.main').click(function(e){
        e.stopPropagation();
    });


$(".fofm").submit(function() {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "contact.php",
        data: str,
        success: function(msg) {
            if(msg == 'ok') {
				alert("Ваше сообщение отправленно");
            }
			else {
				alert("Error");
			}
        }
    });
    return false;
});


$(".forrm").submit(function() {
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "contact2.php",
        data: str,
        success: function(msg) {
            if(msg == 'ok') {
				alert("Ваше сообщение отправленно");
            }
			else {
				alert("Error");
			}
        }
    });
    return false;
});
	


    $(".q-1").click(function(event){
        event.stopPropagation();
        $(".answer").addClass("active").html("Рулонное резиновое покрытие черного цвета, из резиновой крошки фракцией до 5 мм.");
    });
    $(".q-2").click(function(event){
        event.stopPropagation();
        $(".answer").addClass("active").html("Покрытие имеет гладкую текстуру и высокую прочность на разрыв.");
    });
    $(".q-3").click(function(event){
        event.stopPropagation();
        $(".answer").addClass("active").html("Экологично и безопасно, подтверждено сертификатами класса КМ 2 и добровольной сертификацией.");
    });
});

