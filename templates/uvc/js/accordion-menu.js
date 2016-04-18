jQuery(document).ready(function() {

    jQuery('.left-menu ul.left_menu_ul li.active').addClass('activer');
    jQuery('.left-menu ul.left_menu_ul span').addClass('linker');
    jQuery('.left-menu ul.left_menu_ul li').children('.linker').click(function(){
        if ( jQuery(this).parent('li').hasClass('activer') ) {
            jQuery(this).parent('li').children('ul').stop().slideUp(300);
            jQuery(this).parent('li').parent('ul').children('li').removeClass('activer');
        } else {
            jQuery(this).parent('li').parent('ul').children('li.activer').children('ul').stop().slideUp(300);
            jQuery(this).parent('li').parent('ul').children('li').removeClass('activer');
            jQuery(this).parent('li').addClass('activer');
            jQuery(this).parent('li').children('ul').stop().css({'height':'auto'}).slideDown(300);
        }
    });

});