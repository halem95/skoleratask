$(document).ready(function() {

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('opendropdown');
        $(this).addClass('opendropdown');
    });

    $('.dropdown-item').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        
    });

    $('.tab-item').click(function () {
        $('.tab-item').removeClass('active-tab-item');
        $(this).addClass('active-tab-item');
    });

    var spanHeight = $('.register-step-border').parents('.subject-register-steps').find('.register-step-number').outerHeight();
    var navHeight = $('.navbar-parent').outerHeight();
    var loadingBarHeight = $('.gradient').innerHeight();

    $('.register-step-border').css('top', (spanHeight / 2));

    $('.navbar-collapse').css('top', (navHeight + loadingBarHeight ));

    $('.register-step-number').click(function() {
        $('.register-step-number').removeClass('active-register-step');
        $(this).addClass('active-register-step');
    });

    $('.navbar-parent').each(function () {
        if($(window).width() >= 992) {
            $('.navbar-parent').height($(window).height());
        } else {
            $('.navbar-parent').height('auto');
        }
    });



    $(window).resize(function(){

        if ($(window).width() >= 992) {  
 
            $('.navbar-parent').height($(window).height());
 
        } else {
            $('.navbar-parent').height('auto');
        }  
 
    });
 
  
 
 
});