$('.navbar-toggler').on('click', function(){
    $(this).toggleClass('clicked');
    if ($(this).hasClass('clicked')) {
        $('.fas').removeClass('fa-bars').addClass('fa-times');
    } else {
        $('.fas').removeClass('fa-times').addClass('fa-bars');
    }
})