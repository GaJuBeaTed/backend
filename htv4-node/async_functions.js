async function detectLabels() {
    // [START vision_label_detection]
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
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
  }
  detectLabels().catch(console.error);

  async function detectLabelsGCS(bucketName, fileName) {
    // [START vision_label_detection_gcs]
    // Imports the Google Cloud client libraries
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Bucket where the file resides, e.g. my-bucket';
    // const fileName = 'Path to file within bucket, e.g. path/to/image.png';
  
    // Performs label detection on the gcs file
    const [result] = await client.labelDetection(
      `gs://${bucketName}/${fileName}`
    );
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
    // [END vision_label_detection_gcs]
  }