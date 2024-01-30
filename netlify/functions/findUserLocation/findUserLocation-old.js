const axios = require('axios');

// https://developer.mapquest.com/documentation/tools/latitude-longitude-finder/

const base = `http://api.ipstack.com/`;

const locations = [
  {
    city: 'Austin',
    state: 'Texas',
    lon: '-97.743057',
    lat: '30.267153',
  },
  {
    city: 'Dallas',
    state: 'Texas',
    lon: '-96.796215',
    lat: '32.777977',
  },
  {
    city: 'San Antonio',
    state: 'Texas',
    lon: '-98.494599',
    lat: '29.425173',
  },
  {
    city: 'Houston',
    state: 'Texas',
    lon: '-95.369506',
    lat: '29.760803',
  },
  {
    city: 'Minneapolis',
    state: 'Minnesota',
    lon: '-93.264346',
    lat: '44.977479',
  },
  {
    city: 'Chicago',
    state: 'Illinois',
    lon: '-87.632398',
    lat: '41.883229',
  },
  {
    city: 'San Francisco',
    state: 'California',
    lon: '-122.420168',
    lat: '37.78008',
  },
  {
    city: 'Seattle',
    state: 'Washington',
    lon: '-122.33028',
    lat: '47.603229',
  },
];

// Find distance in Kilometers between two locations
function distance(lat1, lon1, lat2, lon2) {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;
  return dist;
}

// Given a longitude and latitude, finds the closest city from the locations array
function findClosestLocation(lon, lat) {
  const closest = locations
    // Map locations onto new objects with a distance property added
    .map(l => {
      return {
        ...l,
        distance: distance(lat, lon, l.lat, l.lon),
      };
    })
    // Get the closest location by distance
    .reduce((acc, loc) => {
      return acc.distance < loc.distance ? acc : loc;
    });

  return closest;
}

exports.handler = async function(event, context) {
  const userIp = event.headers['x-nf-client-connection-ip'];
  console.log(event.headers);
  console.log('userIp', userIp);
  const query = `${base}${userIp}?access_key=${process.env.IPSTACK_API_TOKEN}`;

  try {
    const { data } = await axios.get(query);

    // IP was invalid
    if (data.success && data.success === false) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: data.error.info,
        }),
      };
    }

    // Ip was valid, find closest location and return it
    const closestLocation = findClosestLocation(data.longitude, data.latitude);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: closestLocation,
      }),
    };
  } catch (e) {
    if (e.response) {
      console.log('Request made and server responded', e.response);
    } else if (e.request) {
      console.log(
        'The request was made but no response was received',
        e.request
      );
    } else {
      console.log(
        'Something happened in setting up the request that triggered an error',
        e.message
      );
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'There was an error communicating with IPstack',
      }),
    };
  }
};
