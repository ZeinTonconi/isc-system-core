import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
);

const logger = winston.createLogger({
  level: 'debug',
  format: logFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }),
    // new DailyRotateFile({
    //   filename: 'logs/application-%DATE%.log',
    //   datePattern: 'YYYY-MM-DD',
    //   maxSize: '20m',
    //   maxFiles: '14d',
    // }),
  ],
  // exceptionHandlers: [new winston.transports.File({ filename: 'logs/exceptions.log' })],
});

export default logger;
