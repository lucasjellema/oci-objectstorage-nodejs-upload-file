
var fs = require('fs');
var objectStore = require('./services/objectStore.js');
var logger = require('./logger');
const configs = require('./configuration');
const configuration = configs.configs;

var auth = {
    tenancyId: configuration.tenancyId,
    userId: configuration.userId,
    keyFingerprint: configuration.keyFingerprint,
    RESTversion: configuration.RESTversion,
    region: configuration.region
};
auth.privateKey = fs.readFileSync(configuration.privateKeyFile, 'ascii');
auth.passphrase = configuration.passphrase
// set up parameters object
//
var parameters = {
    compartmentId: configuration.compartmentId
};
var callback = function (data) {
    logger.log('debug', JSON.stringify(data))
    console.log(JSON.stringify(data))
};

async function runShippingExtractionJob(objectName, input) {
    logger.log('info', `runShippingExtractionJob for ${JSON.stringify(input)} for file ${objectName}`)
    auth.RESTversion = '/20160918';
    //
    // Upload file to objectStore
    //

    // set up the parameter object
    parameters = {
        objectName: objectName,
        namespaceName: configuration.namespaceName,
        bucketName: configuration.bucketName
    };
    //parameters.body = JSON.stringify({ key: "special", koe: "hello", input: input });
    parameters.body = JSON.stringify({ input });
    objectStore.obj.put(auth, parameters, callback);
    return;

}// runShippingExtractionJob

module.exports = {
    runShippingExtractionJob: runShippingExtractionJob
}

// test call
runShippingExtractionJob("BrandNewFile.json", { content: "My very very special Content", moreContent: "Something completely different", value: 34 })
