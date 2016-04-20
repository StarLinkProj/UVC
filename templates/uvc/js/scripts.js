jQuery(document).ready(function($) {
    // Underline text on hover menu
    jQuery(".menumain>li").hover(function() {
        var oldSrc = $(this).find('img').attr("src");
        if (!oldSrc.match(/\-white\.png/)) {
            var newSrc = oldSrc.replace(/\-main\.png/, "-white.png");
            $(this).find('img').attr("src", newSrc);
        }
    }, function() {
        var oldSrc = $(this).find('img').attr("src");
        if (!oldSrc.match(/\-main\.png/)) {
            var newSrc = oldSrc.replace(/\-white\.png/, "-main.png");
            $(this).find('img').attr("src", newSrc);
        }
    })

    // Show active submenu in LEFT menu
    var activeLi = jQuery(".left_menu_ul>li.active");
    activeLi.children(".nav-child").css('display', 'block');


	/* Подготавливаем иконку меню */
    jQuery('.mainmenu').prepend('<div id="menu-icon">Меню</div>');
	
	/* Переключаем навигацию */
    jQuery("#menu-icon").on("click", function(){
        jQuery(".menumain").slideToggle();
        jQuery(this).toggleClass("active");
	});

    jQuery('.menumain>li>a').each(function() {
        $(this).attr("href", "javascript:void(0);");
    });

    if ($( window ).width() < 767) {
        jQuery(".menumain>li").on("click", function (e) {
            if (jQuery(this).children("ul").hasClass("active")) {
                jQuery(this).children("ul").slideUp();
                jQuery(this).children("ul").removeClass("active");
                jQuery(this).removeClass("hover");
            } else {
                var activeLi = jQuery(".menumain>li.hover");
                activeLi.removeClass("hover");
                activeLi.children("ul").slideUp();
                activeLi.children("ul").removeClass("active");
                jQuery(this).children("ul").slideDown();
                jQuery(this).children("ul").addClass("active");
                jQuery(this).addClass("hover");
            }
        });
    }

});