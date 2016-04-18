function initialize() {
    var settings = {
        zoom: 15,
        center: new google.maps.LatLng(50.26100, 31.16371),
        mapTypeControl: false,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), settings);

    var companyPos = new google.maps.LatLng(50.25931, 31.17972);
    var marker = new google.maps.Marker({
        position: companyPos,
        map: map,
        title:"Company Title",
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" style="color: #115DD2; font-size: 14px;">Українська овочева компанія</h1>'+
        '<div id="bodyContent">'+
        '<p style="font-size: 11px; font-weight: 500;">08360, Київська обл.,<br />' +
        'Бориспільский р-н,<br /> '+
        'с. Любарці,<br />'+
        'вул. Матросова, 29А <br />'+
        'тел: (044) 586-52-56, <br />'+
        'тел: (050) 381-40-49</p>'+
        '<p style="font-size: 11px; font-weight: 500;"><a style="color: #115DD2;" target="_blank" href="https://www.google.ru/maps/dir//%D0%B2%D1%83%D0%BB.+%D0%9C%D0%B0%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2%D0%B0,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/@50.2590304,31.1734478,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x40d4f72db1d1a877:0x9f964828b4fb3416!2m2!1d31.182224!2d50.259017">Маршрут</a>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.google.com.ua/maps/" style="color: #115DD2;" target="_blank">Пошук</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        '<a href="#" style="color: #115DD2;" target="_blank"></a>' +
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}