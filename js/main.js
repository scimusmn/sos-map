var map = L.map('map').setView([44.9425857,-93.0986076], 15);
var marker = L.marker([44.9425857,-93.0986076]).addTo(map);
marker.bindPopup("<b>Science Museum of Minnesota</b><br>The conference will take place here.").openPopup();
L.tileLayer('http://{s}.tiles.mapbox.com/v3/bkennedy.i9o0b4hb/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
