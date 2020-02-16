const request = require('request');

request('https://www.google.com', function(err, res, body) {
  if (err) { 
    console.log("ERROR: Not able to request from api")
    console.log(err);
} else {
    if (res.statusCode == 200) {
        console.log("It worked");  
        console.log(body);
        console.log(body.explanation);
    }
}

});