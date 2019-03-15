var configs =
{
    namespaceName: 'yourNS'
    , bucketName: 'yourBucket'
    , tenancyId: 'ocid1.tenancy.oc1.',
    userId: 'ocid1.user.oc1..aaaaaaa',
    keyFingerprint: '2b:58:02:7d:cd:',
    RESTversion: '/20171215',
    region: 'us-phoenix-1',
    privateKeyFile: './your-privkey.pem',
    passphrase: 'passphrase',
    compartmentId: 'ocid1.tenancy.oc1',
    papertrail: {
        host: 'logs2.papertrailapp.com',
        port: 27700
    }
}

module.exports = {
    configs
};

