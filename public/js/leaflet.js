var map = L.map('map').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

const toiletimg = L.icon({
  iconUrl: '/img/markertoilet.png',
  iconSize: [35, 50],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});
const toiletplaats = L.icon({
  iconUrl: '/img/marker.png',
  iconSize: [50, 50],
  iconAnchor: [20, 20],
  popupAnchor: [0,0]
});


/*$.getJSON("/ap.json", function(json) {
  const toiletten = json.toiletten;
  for (var i=0; i<toiletten.length; i++) {
    new L.marker(toiletten[i].X_COORD, toiletten[i].Y_COORD, {
        icon: toiletimg
      }).bindPopup(`
        <img src="${toiletten[i].marker}" alt="Toilet marker" class="popup-marker">
        <h1>Campus ${toiletten[i].OMSCHRIJVING}</h1>
        <h2>${toiletten[i].BETALEND}</h2>
        <p>
        ${toiletten[i].STRAAT} ${toiletten[i].number} <br>
        ${toiletten[i].POSTCODE} ${toiletten[i].city} <br>
        ${toiletten[i].DISTRICT} <br>
        </p>
        `)
      .addTo(campusMap);
   }
}
})*/
