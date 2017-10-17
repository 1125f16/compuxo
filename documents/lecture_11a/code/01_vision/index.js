var request = require("request");

var options = {
  url : "https://eastus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en",
  headers : {
    "Content-Type" : "application/json",
    "Ocp-Apim-Subscription-Key": "6de79c90c84749c1aafb928a141fce72"
  },
  body : "{\"url\":\"http://onexi.org/materials/img/02.jpg\"}"
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('success');    
    console.log(body);
  }
  else{
    console.log('fail');        
    console.log(error);
    console.log(body);    
  }
}

request.post(options, callback);

// key 01: 6de79c90c84749c1aafb928a141fce72
// key 02: e548dad0aa5c47eb997dfb542ec1772e
// https://eastus.api.cognitive.microsoft.com/vision/v1.0