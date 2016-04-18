<?php defined( '_JEXEC' ) or die; 

include_once JPATH_THEMES.'/'.$this->template.'/logic.php';

?><!doctype html>

<html lang="<?php echo $this->language; ?>">

<head>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
    <jdoc:include type="head" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <script type="text/javascript" src="/templates/uvc/js/scripts.js"></script>
    <script type="text/javascript" src="/templates/uvc/js/accordion-menu.js"></script>
    <script type="text/javascript" src="/templates/uvc/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/templates/uvc/css/bootstrap.css">
    <?php if ($_SERVER['REQUEST_URI'] == '/') : ?>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?language=ua&signed_in=true&libraries=places"></script>
        <script type="text/javascript" src="/templates/uvc/js/map.js"></script>
    <?php endif; ?>
</head>
  
<body class="<?php echo (($menu->getActive() == $menu->getDefault()) ? ('front') : ('site')).' '.$active->alias.' '.$pageclass; ?>" <?php echo $_SERVER['REQUEST_URI'] == '/' ? 'onload="initialize()"' : '' ?>>

    <header>
        <div class="logo">
            <a href="/" title="Logo">
                <jdoc:include type="modules" name="logo" />
            </a>
        </div>

        <div class="phones">
            <jdoc:include type="modules" name="phones" />
        </div>

        <div class="search">
            <jdoc:include type="modules" name="search" />
        </div>
    </header>
    <div class="clear"></div>

    <nav>
        <div class="mainmenu">
            <jdoc:include type="modules" name="mainmenu" />
        </div>
        <div class="menu-services">
            <div class="menu-services-wrap">
                <jdoc:include type="modules" name="menu-services" />
            </div>
        </div>
    </nav>

    <div class="slider">
        <jdoc:include type="modules" name="slider" />
    </div>

    <div class="component-wrapper">

        <?php if ($_SERVER['REQUEST_URI'] == '/') : ?>
            <jdoc:include type="modules" name="services" />
            <div class="clear"></div>

            <div class="why-uvc-bl">
                <jdoc:include type="modules" name="why-uvc" style="xhtml" />
            </div>
            <div class="news-bl">
                <jdoc:include type="modules" name="news" style="xhtml" />
            </div>
            <div class="clear"></div>

            <div class="contact-info-bl">
                <jdoc:include type="modules" name="contact-info" style="xhtml" />
            </div>
            <div class="clear"></div>

            <div id="map" class="map">
                <jdoc:include type="modules" name="map" />
            </div>
        <?php endif; ?>

        <?php if ($this->countModules('left_menu') && $_SERVER['REQUEST_URI'] != '/') : ?>
            <div class="left-menu">
                <jdoc:include type="modules" name="left_menu" style="xhtml" />
            </div>
        <?php endif; ?>

        <div class="wrapper">

            <jdoc:include type="modules" name="breadcrumbs" />
            <div class="clear"></div>

            <jdoc:include type="component" />

        </div>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>

    <?php if (preg_match('/product\/view/', $_SERVER['REQUEST_URI'])) : ?>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel" style="font-size: 18px;">Отримати комерційну пропозицію</h4>
                    </div>
                    <div class="modal-body">
                        <jdoc:include type="modules" name="get-comercial-propose" />
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>

    <div class="pre-footer"></div>
    <footer>
        <div class="footer-wrap">
            <div class="footer-text">
                &copy; 1995-<?=date('Y')?> Українська Овочева Компанія
            </div>
            <div class="footer-soc">
                <jdoc:include type="modules" name="footer-soc" />
            </div>
        </div>
        <div class="clear"></div>
    </footer>

</body>

</html>
