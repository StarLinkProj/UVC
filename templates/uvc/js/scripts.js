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


});