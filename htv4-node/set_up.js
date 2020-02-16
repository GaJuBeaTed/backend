// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
const projectId = 'hack-the-valley-iv'
const keyFilename = '/Users/leongyokeyibeatrice/Desktop/htv4-node/hack-the-valley-iv-8c82146dadac.json'
const storage = new Storage({projectId, keyFilename});

// Makes an authenticated API request.
try {
  const [buckets] = storage.getBuckets();

  console.log('Buckets:');
  buckets.forEach(bucket => {
    console.log(bucket.name);
  });
} catch (err) {
  console.error('ERROR:', err);
}
