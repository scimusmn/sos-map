var map = L.map('map').setView([44.9425857,-93.0986076], 15);

/**
 * SMM start
 */
var smm = L.marker([44.9425857,-93.0986076]).addTo(map);
smm.bindPopup(
    '<h3>Science Museum of Minnesota</h3>' +
    '<p>The conference will take place here.</p>').openPopup();

var heading, img, creditLink, creditName, creditLicense, bodyCopy, popUp;

/**
 * Irvine Park
 */
var irvinePark = L.marker([44.9409036,-93.1027865]).addTo(map),
heading = 'Irvine Park';
img = 'img/3827710401_1e7e48f132_z.jpg';
creditLink = 'https://flic.kr/p/6Qf1WV';
creditName = 'Sharyn Morrow';
creditLicense = 'CC-BY-NC-ND-2.0';
bodyCopy = '<p>This 19th century square with its fountain and mature oaks surrounded by Victorian houses is a Saint Paul treasure. It is all the more precious for avoiding the wrecking ball in the 1970s. Stand in middle of the park, do a 360, then imagine the scene if those who wanted an industrial park had gotten their wish.</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
irvinePark.bindPopup(popUp, {minWidth: '600'});

/**
 * Maears Park
 */
var mearsPark = L.marker([44.94935,-93.08779]).addTo(map);
heading = 'Mears Park';
img = 'img/2905454937_29fba63026_z.jpg';
creditLink = 'https://flic.kr/p/5qKdwD';
creditName = 'Teresa Boardman';
creditLicense = 'CC-BY-NC-ND-2.0';
bodyCopy = '<p>Sure, the stream is artificial but the tumbling waters shaded by an urban forest make for a very nice retreat in the heart of the city. The restaurants and bars lining the north side of the park make bar hopping fun and convenient.</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
mearsPark.bindPopup(popUp, {minWidth: '600'});

/**
 * Candy Land
 */
var candyLand = L.marker([44.94745,-93.09642]).addTo(map);
heading = 'Candy Land';
img = 'img/3725900249_a2a720f28b_z.jpg';
creditLink = 'https://flic.kr/p/6Ffdkt';
creditName = 'AJ Wms';
creditLicense = 'CC-BY-NC-2.0';
bodyCopy = '<p>This tiny shop is stuffed with fat, salt and sugar. How great is that? Whaaat, you’ve never had a squirrel turd? Well, here is your chance. Remember – either buy enough for everyone or surreptitiously enjoy your delicious treats. </p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
candyLand.bindPopup(popUp, {minWidth: '600'});


L.tileLayer('http://{s}.tiles.mapbox.com/v3/bkennedy.i9o0b4hb/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
