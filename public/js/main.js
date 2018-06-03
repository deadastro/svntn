$('.navbar-toggler').on('click', function () {
    $(this).toggleClass('clicked');
    if ($(this).hasClass('clicked')) {
        $('.fas').removeClass('fa-bars').addClass('fa-times');
    } else {
        $('.fas').removeClass('fa-times').addClass('fa-bars');
    }
});

setTimeout(function () {
    $(document).ready(function ($) {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
    $(window).load(function () {
        var Body = $('body');
        Body.addClass('preloader-site');
    });
}, 300)
