import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
const { combine, errors, simple, colorize, metadata, timestamp, printf } = format;

interface loggerParam {
    level: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';
    message: any;
}

@Injectable()
export class LoggerService {

    logFormatLogger = printf((info) => {
        const { level, message } = info;
        const { timestamp, stack, ...meta } = info.metadata;
        return `${timestamp} [${level}]:${message} ${JSON.stringify(meta)}`
            + ((stack) ? `\r ${stack}` : '');
    });

    logger;
    constructor() {
        this.logger = createLogger({
            format: combine(
                simple(),
                errors({ stack: true }),
                colorize({ all: true }),
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                metadata(),
                this.logFormatLogger
            ),
            transports: [
                new transports.Console(),
            ],
            exitOnError: false,
        });
    }

    public log(data: loggerParam): void {
        this.logger.log({ level: data.level, message: data.message });
    }

}
