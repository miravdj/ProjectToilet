const express = require ('express');
const path = require('path');
const request = require('request');
const app = express();
const port = 3000;

var data;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index', {
    toiletten: data
  });
});

app.listen(port);


request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/8/query?where=1%3D1&outFields=OBJECTID,OBDD,CATEGORIE,PUBLICEREN,OMSCHRIJVING,EXTRA_INFO_PUBLIEK,VRIJSTAAND,TYPE,STADSEIGENDOM,BETALEND,STRAAT,HUISNUMMER,POSTCODE,DISTRICT,BEHEERDER,CONTACTPERSOON,CONTACTGEGEVENS,INTEGRAAL_TOEGANKELIJK,LUIERTAFEL,Y_COORD,ID,X_COORD,OPENINGSUREN_OPM&outSR=4326&f=json',
  function(error, response, body){
    data = JSON.parse(body);
    data = data.features;

    for(var i=0; i < data.length; i++) {
        /*console.log("naam: " + data.features[i].attributes.naam);
        console.log("coord: " + data.features[i].geometry.x + ", " + data.features[i].geometry.y);
        console.log("");*/
        console.log(data[i].attributes);
        console.log(data[i].geometry);
    }

  }
);
