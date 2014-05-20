var map = L.map('map').setView([44.9425857,-93.0986076], 15);

var smm = L.marker([44.9425857,-93.0986076]).addTo(map);
smm.bindPopup("<b>Science Museum of Minnesota</b>" +
              "<br>The conference will take place here.").openPopup();

var irvinePark = L.marker([44.9409036,-93.1027865]).addTo(map);
irvineParkImg = 'img/3827710401_1e7e48f132_z.jpg';
irvinePark.bindPopup('<h2>Irvine Park</h2>' +
                     '<div class="image-container">' +
                     '  <img class="marker-image" width="200" src="' + irvineParkImg + '" />' +
                     '  <div class="credit"><a href="https://flic.kr/p/6Qf1WV">Sharyn Morrow</a> / CC-BY-NC-ND-2.0</div>' +
                     '</div>' +
                     'Sciurus wisi ad tincidunt duis luptatum eros ad volutpat dolor, praesent esse veniam wisi nonummy ut. Iusto tation, nostrud blandit nibh luptatum lobortis ea nostrud consequatvel blandit enim in hendrerit dolore sit. Sciurus at amet exerci feugiat et laoreet nulla consequat, ut nulla euismod feugait esse qui. Autem, facilisi enim nulla ut illum autem eros volutpat autem ea aliquip facilisis feugiat odio accumsan lobortis facilisi?',
                    {minWidth: '600'});

L.tileLayer('http://{s}.tiles.mapbox.com/v3/bkennedy.i9o0b4hb/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
