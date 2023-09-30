// logging is just logging the info about diff event occured when program is run 

// console.log("This is easiest logging")
// console.debug("This is easiest logging")
// console.warn("This is easiest logging")
// console.info("This is easiest logging")


const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'LOG.log' }),
  ],
});

// Log an error
logger.error('This is an error message.');
logger.warn('This is an warn message.');



