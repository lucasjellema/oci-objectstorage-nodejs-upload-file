const winston = require('winston');
require('winston-papertrail').Papertrail;
const configs = require('./configuration');
const configuration = configs.configs;


  var options = {
    file: {
      level: 'info',
      filename: './logs.txt',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
    papertrail:{
      host: configuration.papertrail.host,
      port: configuration.papertrail.port ,
      disableTls: true,
      colorize: false,
      handleExceptions: true
    }
  };

  var logger = new winston.Logger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console),
      new winston.transports.Papertrail(options.papertrail)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  module.exports = logger;

