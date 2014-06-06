$( document ).ready( function(){
    $('.postcard-holder').hide();
})

/**
 * Initiate map object and set its center point
 */
var map = L.map('map').setView([44.948041,-93.100913], 13);

/**
 * Add Open Street Map tiles from TileMill
 */
L.tileLayer('http://{s}.tiles.mapbox.com/v3/bkennedy.i9o0b4hb/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

function onEachFeature(feature, layer) {
    layer.on({
        click: changeLegend
    });
};

function changeLegend(e) {
    activateMarker(e.target);
    var layer = e.target;
    var props = layer.feature.properties;
    $('img.headshot').remove();
    $('.postcard-holder').show();
    $('.heading').html(props.heading);
    $('.postcard').attr('src', props.img);
    $('.body-copy').html(layer.feature.properties.bodyCopy);
};

function activateMarker(target) {
    console.log("fker" + target);
    target.setIcon(redMarker);
}

geojson = L.geoJson(mapPoints, {
    //style: style,
    onEachFeature: onEachFeature
}).addTo(map);

/**
 * Add GeoJson object to the map
 */
var geojson;
geojson = L.geoJson(mapPoints, {
    onEachFeature: onEachFeature
}).addTo(map);
