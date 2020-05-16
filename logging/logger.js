const winston = require('winston');
const dotenv = require('dotenv');
dotenv.config();


// Winston needs to be told about color coding, but it only takes effect on loggers where the format parameter has a colorize called
winston.addColors({
    error: 'bold red',
    warn: 'yellow',
    info: 'green',
    verbose: 'dim white',
    debug: 'gray',
    silly: 'magenta'
});

// The file path is from the root of the project since that's where this file is executed within app.js
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(info => `${info.timestamp} : ${info.message} ${info.meta}`)
    ),
    transports: [
        new winston.transports.File({
            level: 'error',
            filename: process.env.ERROR_LOG
        }),
        new winston.transports.File({
            filename: process.env.COMBINED_LOG
        }),
        new winston.transports.Console({}),
    ],
    exceptionHandlers: [
        new winston.transports.File({ 
            filename: process.env.EXCEPTION_LOG }),
    ]
});

module.exports = logger;