import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  logging: {
    serverLoggingUrl: 'http://localhost:3000/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.DEBUG
  }
};
