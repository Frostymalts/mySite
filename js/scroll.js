

$(document).ready(function() {

    var navHeight = $('nav').outerHeight();

    $('nav a').click(function() {
        var targetElement = $(this.hash);
        var targetTop = targetElement.offset().top;

        $('html, body').animate({
            scrollTop: targetTop - navHeight - 10
        }, 700);
    });

});