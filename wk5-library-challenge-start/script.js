(function(){
    'use strict';

    // add your script here

    //initialize map and set is view to chosen geographical coordinates & zoom level
    var map = L.map('map').setView([33.495866, -117.138977], 13);

    //tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([33.479294, -117.139015]).addTo(map);


    var circle = L.circle([33.52493, -117.154169], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [33.501868, -117.120137],
        [33.503826, -117.113142],
        [33.49819, -117.115878]

    ]).addTo(map);

    //popups
    marker.bindPopup("<b>My 1st job.</b><br>I hated it!.");
    circle.bindPopup("<b>Promenade Mall</b><br>Often, it was the only thing to do");
    polygon.bindPopup("<b>Temecula Valley Highschool</b><br>No one liked me");

    //using popups as layers
    var popup = L.popup()
        .setLatLng([33.49, -117.14])
        .setContent("<b>Temecula, CA</b><br>I grew up here!")
        .openOn(map);
        //openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one, good for usabilitity

    //Dealing with events
    //add a function to an object, react to user interaction
    // function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    // }
    // map.on('click', onMapClick);

    //(e) is an object that has Latlng property which is a location at which the click ocurred

    //funciton to make a popup instead of alert from above
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
}());