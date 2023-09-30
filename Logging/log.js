const winston = require('winston');

// Define the log levels and corresponding colors
const logLevels = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  verbose: 'blue',
  debug: 'gray',
};

// Create a Winston logger with a file transport
const logger = winston.createLogger({
  levels: logLevels,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] [${level}] ${message}`;            // format in  which it is going to get printed in log file
    })
  ),
  transports: [
    // new winston.transports.File({ filename: 'app.log', level: 'info' }), // Log info and above to app.log file (alternately we can print it on console as well instead of creating log file)
    new winston.transports.Console(), // alternately we can print it on console as well instead of creating log file
  ],
});

// Add a console transport for logging to the console
logger.add(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  ),
}));

// Log messages of different levels
logger.error('This is an error message');
logger.warn('This is a warning message');
logger.info('This is an info message');
logger.verbose('This is a verbose message');
logger.debug('This is a debug message');














































// Demonstrate asynchronous behavior (logging won't be in order due to asynchronous file writing)
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     logger.info(`Async log message ${i}`);
//   }, i * 1000);
// }
