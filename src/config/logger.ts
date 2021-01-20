import winston from "winston"

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

//
// Override default console
//
console.log   = (...args : any) => logger.info.call(logger, args);
console.info  = (...args : any) => logger.info.call(logger, args);
console.warn  = (...args : any) => logger.warn.call(logger, args);
console.error = (...args : any) => logger.error.call(logger, args);
console.debug = (...args : any) => logger.debug.call(logger, args);