var map = L.map('map').fitWorld();

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
});

const toiletimg = L.icon({
  iconUrl: '/img/markertoilet.png',
  iconSize: [35, 50],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});
/*
const toiletplaats = L.icon({
  iconUrl: '/img/locatieicoon.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [,0]
});
*/

//icon locatieicoon
const locatieicoon = L.icon({
    iconUrl: 'img/locatieicoon.png',
    iconSize: [58, 70],
    iconAnchor: [22, 34],
    popupAnchor: [-3, -76],
});
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng,{icon:locatieicoon}).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}


map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
