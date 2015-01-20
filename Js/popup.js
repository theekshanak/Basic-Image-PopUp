$(document).ready(function() {
    $('.img-thumbnail').click(function(e) {
        e.preventDefault();
        var a = $(this).attr('src');
        $('#popup').append('<img id="pop_img" src="' + a + '"/>');
        $("#popup").fadeIn();
    })
    $("#popup").click(function() {
        $("#popup").fadeOut(function() {
            $(this).find('*').remove();
        });
    });
});
