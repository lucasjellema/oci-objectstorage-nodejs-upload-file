const fdk=require('@fnproject/fdk');
const objectStore = require( './saveObject.js' );
var logger = require( './logger' );

fdk.handle(function(input){
  logger.log('info',`shippings-reporter-func for ${JSON.stringify(input)}`)
  let objectName = 'myData.json';
  if (!input.objectName) {
    input.objectName = objectName;
  }
  objectStore.runShippingReportingJob(input.objectName, input.payload?input.payload:{content:"Not Available"})
  return {'message': 'Hello ' + input.objectName}
})


// invoke with :
// echo -n '{"objectName":"dataNow.json","payload":{"you":"lovely person"}}' | fn invoke soaring shippings-reporter-func
// yes | cp -rf /vagrant/shippings-reporter-func/*  .