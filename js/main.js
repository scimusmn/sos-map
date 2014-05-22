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
candyLand.bindPopup(popUp, {minwidth: '600'});

/**
 * Landmark Center
 */
var landmarkCenter = L.marker([44.94562,-93.09713]).addTo(map);
heading = 'Landmark Center';
img = 'img/29999783_45a66e4636_z.jpg';
creditLink = 'https://flic.kr/p/3dktd';
creditName = 'Michael Hicks';
creditLicense = 'CC-BY-2.0';
bodyCopy = '<p>Walk around the exterior of this exquisite building, then stroll through its interior. The plan in the 1970s was to demolish this former federal courthouse and replace it with a surface parking lot. Pretty crazy stupid, right?</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
landmarkCenter.bindPopup(popUp, {minWidth: '600'});

/**
 * Restaraunt Row
 */
var restarauntRow = L.marker([44.94654,-93.09678]).addTo(map);
heading = 'Restaraunt Row';
img = 'img/7329203136_201d9cd733_z.jpg';
creditLink = 'https://flic.kr/p/caE5Kj';
creditName = 'jpellgen';
creditLicense = 'CC-BY-NC-ND-2.0';
bodyCopy = '<p>From one end of St. Peter Street to the other, you can enjoy Kurdish, Thai, French, Italian, Japanese and classic American cuisine. They’re all fun but my favorite is Meritage. It has it all – delicious food, wonderful service, great atmosphere and an intimate bar.</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
landmarkCenter.bindPopup(popUp, {minWidth: '600'});

/**
 * Fitzgerald Theater
 */
var fitzgeraldTheater = L.marker([44.9490803,-93.0972508]).addTo(map);
heading = 'Fitzgerald Theater';
img = 'img/3567082778_c8c39847fb_z.jpg';
creditLink = 'https://flic.kr/p/6rderd';
creditName = 'On Being';
creditLicense = 'CC-BY-NC-ND-2.0';
bodyCopy = '<p>Yep, this is where the magic of \'A Prairie Home Companion\' takes place. It also is home to \'Wits\' – an up and coming radio show.</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
fitzgeraldTheater.bindPopup(popUp, {minWidth: '600'});

/**
 * Nice Ride
 */
var niceRide = L.marker([44.94300,-93.09796]).addTo(map);
heading = 'Nice Ride';
img = 'img/7812483572_0ee2b3713f_b.jpg';
creditLink = 'https://flic.kr/p/cUn2bC';
creditName = 'm01229';
creditLicense = 'CC-BY-2.0';
bodyCopy = '<p>Simply take a bike when you need one and return it to any station in the system when you are done. There is a Nice Ride station on the Science Museum’s plaza and others scattered elsewhere in downtown Saint Paul. Use a bike to expand the range of your explorations to include Cathedral Hill, Summit Avenue and the Mississippi River.</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
niceRide.bindPopup(popUp, {minWidth: '600'});

/**
 * Custom House
 */
var customHouse = L.marker([44.94576,-93.08783]).addTo(map);
heading = 'Custom House';
img = 'img/14106289332_28558b390c_b.jpg';
creditLink = 'https://flic.kr/p/nuwqn3';
creditName = 'Michael Hicks';
creditLicense = 'CC-BY-2.0';
bodyCopy = '<p>The U.S. Postal Service freed up this building two years ago for redevelopment. As with many cities, downtown Saint Paul is seeing a resurgence in urban living. Work will begin shortly to convert this building into apartments, condos, a hotel and mixed retail. </p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
customHouse.bindPopup(popUp, {minWidth: '600'});

/**
 * St. Paul District Heating and Cooling
 */
var districtHeating = L.marker([44.94291,-93.09667]).addTo(map);
heading = 'St. Paul District Heating and Cooling';
img = 'img/5313163891_c5d0cd4734_b.jpg';
creditLink = 'https://flic.kr/p/96vmvZ';
creditName = 'brnpttmn';
creditLicense = 'CC-BY-NC-SA-2.0';
bodyCopy = '<p>One of the city’s best kept secrets, this plant generates 30 MW of electricity largely using waste wood collected mostly from the Twin Cities metropolitan area and then heats and cools 80% and 60% respectively of the downtown. It is the largest district system in the U.S. </p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
districtHeating.bindPopup(popUp, {minWidth: '600'});

/**
 * Central library
 */
var districtHeating = L.marker([44.94380,-93.09705]).addTo(map);
heading = 'James J. Hill Reference Library / Saint Paul Central Library';
img = 'img/2058870277_6e84c4e9c4_b.jpg';
creditLink = 'https://flic.kr/p/48Wfpp';
creditName = 'Jeremy Noble';
creditLicense = 'CC-BY-2.0';
bodyCopy = '<p>The reference library was recently named "the greatest historical treasure" among the nation’s library in a nationwide photo contest. Check it out and then go next door to explore the central library which went through a top-to-bottom restoration in 2002.</p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
districtHeating.bindPopup(popUp, {minWidth: '600'});

/**
 * Central library
 */
var districtHeating = L.marker([44.94425,-93.09386]).addTo(map);
heading = 'St. Paul City Hall / Ramsey Court House';
img = 'img/1546812401_53a51d8112_z.jpg';
creditLink = 'https://flic.kr/p/3mFPrk';
creditName = 'Holly Higgins';
creditLicense = 'CC-BY-2.0';
bodyCopy = '<p>OK, you have to put up with passing through a metal detector but you just have to check out the enormous sculpture in the atrium of this building. </p>';
popUp = '<h2>' + heading + '</h2>' +
    '<div class="image-container">' +
    '  <img class="marker-image" width="200" src="' + img + '" />' +
    '  <div class="credit">' +
    '<a href="' + creditLink + '">' + creditName + '</a> / ' +
    creditLicense + '</div>' +
    '</div>' + bodyCopy;
districtHeating.bindPopup(popUp, {minWidth: '600'});

L.tileLayer('http://{s}.tiles.mapbox.com/v3/bkennedy.i9o0b4hb/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
