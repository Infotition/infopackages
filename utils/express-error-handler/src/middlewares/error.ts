import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { ApiError } from '../models/ApiError';

interface IError {
  message?: string;
  statusCode?: number;
  stack?: string;
}

/**
 * If the error is not an instance of ApiError, then convert it to an ApiError with
 * all the details from the given Error.
 *
 * @param err   The error object that was thrown.
 * @param next  The next middleware to call in the pipe.
 */
export const errorConverter = (err: IError, next: NextFunction) => {
  if (!(err instanceof ApiError)) {
    const { statusCode, message, stack } = err;
    const fallbackStatus = statusCode || httpStatus.INTERNAL_SERVER_ERROR;

    next(
      new ApiError(
        fallbackStatus,
        message || httpStatus[fallbackStatus].toString(),
        false,
        stack,
      ),
    );
  }

  next(err);
};

/**
 * Handles the error by creating a json object and sending it to the caller.
 *
 * @param err     The error object that was thrown.
 * @param logger  The logger object to log the error to.
 * @param res     The response object from the express middleware
 */
export const errorHandler = (err: ApiError, logger: any, res: Response) => {
  const isProd = process.env.NODE_ENV === 'production';
  let { statusCode, message } = err;

  if (isProd && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR as 500];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(!isProd && { stack: err.stack }),
  };

  if (!isProd) {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};
