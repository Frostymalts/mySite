//handles the smooth scroll-to-click section
//also does collapses the navbar

$(document).ready(function() {

    var navHeight = $('nav').outerHeight();

    $('nav a, #downBtn').click(function() {
        var targetElement = $(this.hash);
        var targetTop = targetElement.offset().top;

        $('html, body').animate({
            scrollTop: targetTop - navHeight - 10
        }, 700);
    });

    //collapse navbar for mobile
    $('.navbar-nav li a').click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });

});