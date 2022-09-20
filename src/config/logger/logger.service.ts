import { basename } from 'path';
import { Injectable, LoggerService as BaseLoggerService, Scope } from '@nestjs/common';
import { Request } from 'express';
import { Logger } from 'log4js';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements BaseLoggerService {
  constructor(private readonly logger: Logger) {}

  setRequestInfo(req: Request) {
    this.logger.addContext('ip', req.ip);
    this.logger.addContext('method', req.method);
    this.logger.addContext('uri', req.url);
  }

  log(message, context?: string) {
    this.setStack(this.log);
    this.logger.log(message, context || '');
  }

  error(message, trace?: string, context?: string) {
    this.setStack(this.error);
    this.logger.error(message, trace || '', context || '');
  }

  warn(message, context?: string) {
    this.setStack(this.warn);
    this.logger.warn(message, context || '');
  }

  debug?(message, context?: string) {
    this.setStack(this.debug);
    this.logger.debug(message, context || '');
  }

  private setStack(caller?: (message, context?: string | undefined) => void) {
    const stack = this.getTrace(caller);
    this.logger.addContext('file', stack.file);
    this.logger.addContext('line', stack.line);
    this.logger.addContext('column', stack.column);
    this.logger.addContext('function', stack.func);
  }

  private prepareStackTrace(error, structuredStackTrace) {
    const trace = structuredStackTrace[0];
    return {
      func: trace.getMethodName() || trace.getFunctionName() || '<anonymous>',
      file: basename(trace.getFileName()),
      line: trace.getLineNumber(),
      column: trace.getColumnNumber(),
    };
  }

  private getTrace(caller?: (message, context?: string | undefined) => void) {
    const original = Error.prepareStackTrace;
    const error = { stack: { func: '', file: '', line: 0, column: 0 } };
    Error.captureStackTrace(error, caller || this.getTrace);
    Error.prepareStackTrace = this.prepareStackTrace;
    const { stack } = error;
    Error.prepareStackTrace = original;
    return stack;
  }
}
