const winston = require('winston');
const configs = require('./configuration');
const configuration = configs.configs;

require('winston-papertrail').Papertrail;
var logger = new winston.transports.Papertrail({
    host: configuration.papertrail.host,
    port: configuration.papertrail.port ,
    disableTls: true,
    colorize: false,
    handleExceptions: true
  });
module.exports = logger;

