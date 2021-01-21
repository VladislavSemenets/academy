import { ExceptionFilter, Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const error = exception.message;

    let changedResponse: any = { error: error?.error, message: error?.message }

    if (exception instanceof BadRequestException) {
      changedResponse = this._processBadRequestException(error)
    }

    response
      .status(status)
      .json(changedResponse);
  }

  private _processBadRequestException({ error, message }) {
    return {
      error,
      message: Array.isArray(message) && message.some(item => Object.values(item.constraints).length)
        ? message.reduce((arr, item) => arr.concat(Object.values(item.constraints)), [])
        : message
    };
  }
}
