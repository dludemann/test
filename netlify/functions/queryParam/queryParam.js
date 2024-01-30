const axios = require('axios');

exports.handler = async function(event, context) {
  const email = event.queryStringParameters.email;
  const source = event.queryStringParameters.source;

  try {
    axios({
      method: 'post',
      url: 'https://hooks.zapier.com/hooks/catch/1261564/bl5trfm/',
      headers: {},
      data: {
        email: email,
        source: source, // This is the body part
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: source,
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
