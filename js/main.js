$( document ).ready( function(){
    $('.postcard-holder').hide();
})

/**
 * Initiate map object and set its center point
 */
var map = L.map('map').setView([44.94423756911442,-93.11861515045165], 13);

/**
 * Add Open Street Map tiles from TileMill
 */
L.tileLayer('http://{s}.tiles.mapbox.com/v3/bkennedy.i9o0b4hb/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

function highlightMarker(e) {
    /**
     * Change info pane with point information
     */
    var layer = e.target;
    var props = layer.feature.properties;
    $('img.headshot').remove();
    $('.postcard-holder').show();
    $('.heading').html(props.heading);
    $('.postcard').attr('src', props.img);
    $('.body-copy').html(layer.feature.properties.bodyCopy);
    var credit =
        '<a href="' + layer.feature.properties.creditLink + '">' +
        layer.feature.properties.creditName + ' ' +
        layer.feature.properties.creditLicense + ' ' +
        '</a>'
    $('.credit').html(credit);

    /**
     * Pan the map so that a point is in the center when it is clicked.
     */
    map.panTo(e.latlng);
};

function onEachFeature(feature, layer) {
    /**
     * Add popups for all map points
     */
    layer.bindPopup(feature.properties.heading, {closeButton: false});

    /**
     * Change the content on the left sidebar on click
     */
    layer.on({
        click: highlightMarker
    });
};

/**
 * Add GeoJson object to the map
 */
var geojson;
geojson = L.geoJson(mapPoints, {
    onEachFeature: onEachFeature
}).addTo(map);
