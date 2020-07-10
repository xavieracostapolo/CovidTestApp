import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import bugsnagClient from './bugsnag';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(
    private logger: NGXLogger
  ) { }

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    return `Client Message - ${error.message ? error.message : error.toString()}`;
  }

  getClientStack(error: Error): string {
    return `Client Stack - ${error.stack}`;
  }

  getServerMessage(error: HttpErrorResponse): string {
    return `Server Message - ${error.message}`;
  }

  getServerStack(): string {
    // handle stack trace
    return 'Server Stack';
  }

  trace(error: any, ...additional: any[]): void {
    this.logger.trace(error, additional);
  }

  debug(error: any, ...additional: any[]): void {
    this.logger.debug(error, additional);
  }

  info(error: any, ...additional: any[]): void {
    this.logger.info(error, additional);
  }

  log(error: any, ...additional: any[]): void {
    this.logger.log(error, additional);
  }

  warn(error: any, ...additional: any[]): void {
    this.logger.warn(error, additional);
    bugsnagClient.notify(error);
  }

  error(error: any, ...additional: any[]): void {
    this.logger.error(error.message, additional);
    bugsnagClient.notify(error);
  }

  fatal(error: any, ...additional: any[]): void {
    this.logger.fatal(error.message, additional);
    bugsnagClient.notify(error);
  }
}
