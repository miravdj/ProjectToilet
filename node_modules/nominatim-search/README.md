# Nominatim-JS

Unofficial JS SDK for the Nominatim Open Street Map service that allows geocoding and reverse geocoding

## How to use?

First, install the SDK
``` 
$ npm install --save nominatim-search
```

### Example with promises

```js
const { NominatimJS } = require('nominatim-js');

NominatimJS.search({
  q: 'bakery in new york'
}).then(results => {
  // do something with results
}).catch(error => {
  // error ocurred
});

```

### Example with async / await

```js
const { NominatimJS } = require('nominatim-js');

async function search(){
  let results = await NominatimJS.search({
    q: 'bakery in new york'
  });
}
```
NOTE: To await the response, the call to the API must be written inside an async function

### Example Reverse Geocoding with promises

```js
const { NominatimJS } = require('nominatim-js');

NominatimJS.reverse({
  lat: 50,
  lon: 50,
}).then(results => {
  // do something with results
}).catch(error => {
  // error ocurred
});

```

## License

MIT
