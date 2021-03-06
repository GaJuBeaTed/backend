var express = require('express');
var router = express.Router();

const labelRoutes = (app, fs) => {

    // variables
    const dataPath = './data/images.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // [START vision_label_detection]
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    router.get('/materials', function(req, res, next) {

        // Creates a client
        const client = new vision.ImageAnnotatorClient({
            keyFilename: 'hack-the-valley-iv-8c82146dadac.json'
        });

        /**
         * TODO(developer): Uncomment the following line before running the sample.
         */
        list = ['canada-dry-can.jpg', 'canada-dry-bottle.jpg', 'water-bottle.png', 'water-bottle2.jpg'];
        const fileName = './data/' + list[0];

        // Performs label detection on the local file
        client.labelDetection(fileName).then(results=>{
            const labels = results[0].labelAnnotations;
            list = [];
            max_score = 0;
            choosen_item;
            material = 0;
            
            for (i=0; i++; i < labels.length) {
                if (labels[i].score > max_score){
                    choosen_item = JSON.stringify(label.description).toLowerCase;
                }
            }

            // labels.forEach(label => list.push(JSON.stringify(label.description).toLowerCase));
            // list.push(JSON.stringify(label.description).toLowerCase)
            switch (choosen_item) {
                case choosen_item.include('paper'):
                case choosen_item.include('mail'):
                case choosen_item.include('envelope'):
                case choosen_item.include('flyer'):
                case choosen_item.include('directories'):
                case choosen_item.include('magazine'):
                case choosen_item.include('catalogue'):
                case choosen_item.include('tissue'):
                case choosen_item.include('book'):
                    material = 1;
                    break;
                case choosen_item.include('plastic'):
                    material = 2;
                    break;
                case choosen_item.include('metal'):
                case choosen_item.include('aluminium'):
                case choosen_item.include('steel'):
                case choosen_item.include('pans'):
                case choosen_item.include('tins'):
                    material = 3;
                    break;
                case choosen_item.include('cardboard'):
                case choosen_item.include('boxboard'):
                case choosen_item.include('rolls'):
                case choosen_item.include('carton'):
                    material = 4;
                    break;
                case choosen_item.include('glass'):
                    material = 5;
                    break;
                default:
                    material = 6;
            }

            final = {
                "name" : choosen_item.description,
                "material" : material
            };

            let data = JSON.stringify(final);
            fs.writeFileSync(choosen_item.description + '.json', data);
            return data;
        })

    })
}
module.exports = labelRoutes;
        // // READ
        // app.get('/labels', (req, res) => {
        //     datapath = req.dataPath; 
        //     fs.readFile(dataPath, 'utf8', (err, data) => {
        //         if (err) {
        //             throw err;
        //         }
        //         res.send(JSON.parse(data));
        //     });
        // });

        // // CREATE
        // app.post('/labels', (req, res) => {

        //     readFile(data => {
        //         const newImageId = Object.keys(data).length + 1;

        //         data[newImageId.toString()] = req.body;

        //         writeFile(JSON.stringify(data), () => {
        //             res.status(200).send('new image added');
        //         });
        //     },
        //         true);

        // });


// [END vision_label_detection]

// Imports the Google Cloud AutoML library
// const {PredictionServiceClient} = require(`@google-cloud/automl`).v1;

// /**
//  * TODO(developer): Uncomment these variables before running the sample.
//  */
// const projectId = 'hack-the-valley-iv';
// const location = 'us-central1';
// const modelId = 'ICN4596253273219923968';
// const filePath = 'water-bottle.png';

// // Instantiates a client
// const client2 = new PredictionServiceClient({
//     keyFilename: 'hack-the-valley-iv-8c82146dadac.json'
// });

// // Read the file content for translation.
// const content = fs.readFileSync(filePath);
// console.log("Hello");
// async function predict() {
//   // Construct request
//   // params is additional domain-specific parameters.
//   // score_threshold is used to filter the result
  
//   const request = {
//     name: client2.modelPath(projectId, location, modelId),
//     payload: {
//       image: {
//         imageBytes: content,
//       },
//     },
//   };

//   console.log("Bye");
//   client2.predict(request, console.log);
  
// //   for (const annotationPayload of response.payload) {
// //     console.log(`Predicted class name: ${annotationPayload.displayName}`);
// //     console.log(
// //       `Predicted class score: ${annotationPayload.classification.score}`
// //     );
// //   }

// }

// predict()