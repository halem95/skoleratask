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

    var spanHeight = $('.register-step-border').parents('.subject-register-steps').find('.register-step-number').outerHeight() / 2;
    var navHeight = $('.navbar-parent').outerHeight();
    var loadingBarHeight = $('.gradient').innerHeight();
    var navCollapseTop = navHeight + loadingBarHeight;
    var winHeight = $(window).height();

    $('.register-step-border').css('top', spanHeight);

    if( $(window).width() < 992 ) {
        $('.navbar-collapse').css('top', navCollapseTop);
    }


    $('.register-step-number').click(function() {
        $('.register-step-number').removeClass('active-register-step');
        $(this).addClass('active-register-step');
    });


    if($(window).width() > 991) {
        
        $('.navbar-parent').height(winHeight);
    } 
    else {
        $('.navbar-parent').css('height', 'auto')
    }


    $(window).on('resize', function(){

        if($(window).width() < 992) {
            $('.register-step-border').css('top', spanHeight );

        }

        $('.navbar-collapse').css('top', navCollapseTop);

        if ($(window).width() > 991) {  
 
            $('.navbar-parent').height(winHeight);
        }
        else {
            $('.navbar-parent').css('height', 'auto')
        }  
 
    });
 

    console.log($(window).width(), $(window).outerWidth(), $(window).innerWidth());
  
 
 
});