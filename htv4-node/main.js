var express = require('express');
const app = express();

    // [START vision_label_detection]
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFilename: 'hack-the-valley-iv-8c82146dadac.json'
    });
  
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = 'water-bottle.png';
  
    // Performs label detection on the local file
    const [result] = await client.labelDetection(fileName);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    let data = await Response.json()
    labels.forEach(label => console.log(label.description));
    // [END vision_label_detection]


app.listen('5000', '127.0.0.1', ()=>console.log('Server is running'));
