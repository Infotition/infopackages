import { jest } from '@jest/globals';
import httpStatus from 'http-status';
import { createResponse } from 'node-mocks-http';

import { errorConverter, errorHandler, ApiError } from '../../src';

const logger = {
  error: (msg: string) => console.log(msg),
};

describe('Error middlewares', () => {
  describe('Error converter', () => {
    test('should return the same ApiError object it was called with', () => {
      const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error');
      const next = jest.fn();
      errorConverter(error, next);
      expect(next).toHaveBeenCalledWith(error);
    });

    test('should convert an Error to ApiError and preserve its status and message', () => {
      const error = new Error('Any error') as ApiError;
      error.statusCode = httpStatus.BAD_REQUEST;
      const next = jest.fn();

      errorConverter(error, next);

      expect(next).toHaveBeenCalledWith(expect.any(ApiError));
      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: error.statusCode,
          message: error.message,
          isOperational: false,
        }),
      );
    });

    test('should convert an Error without status to ApiError with status 500', () => {
      const error = new Error('Any error');
      const next = jest.fn();

      errorConverter(error, next);

      expect(next).toHaveBeenCalledWith(expect.any(ApiError));
      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
          isOperational: false,
        }),
      );
    });

    test('should convert an Error without message to ApiError with default message of that http status', () => {
      const error = new Error() as ApiError;
      error.statusCode = httpStatus.BAD_REQUEST;
      const next = jest.fn();

      errorConverter(error, next);

      expect(next).toHaveBeenCalledWith(expect.any(ApiError));
      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: error.statusCode,
          message: httpStatus[error.statusCode],
          isOperational: false,
        }),
      );
    });

    test('should convert any other object to ApiError with status 500 and its message', () => {
      const error = {};
      const next = jest.fn();

      errorConverter(error, next);

      expect(next).toHaveBeenCalledWith(expect.any(ApiError));
      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
          isOperational: false,
        }),
      );
    });
  });

  describe('Error handler', () => {
    beforeEach(() => {
      jest.spyOn(logger, 'error').mockImplementation(() => logger);
    });

    test('should send proper error response and put the error message in res.locals', () => {
      const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error');
      const res = createResponse();
      const sendSpy = jest.spyOn(res, 'send');

      errorHandler(error, logger, res);

      expect(sendSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          code: error.statusCode,
          message: error.message,
        }),
      );
      expect(res.locals.errorMessage).toBe(error.message);
    });

    test('should put the error stack in the response if in development mode', () => {
      process.env.NODE_ENV = 'development';
      const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error');
      const res = createResponse();
      const sendSpy = jest.spyOn(res, 'send');

      errorHandler(error, logger, res);

      expect(sendSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          code: error.statusCode,
          message: error.message,
          stack: error.stack,
        }),
      );
    });

    test('should send internal server error status and message if in production mode and error is not operational', () => {
      process.env.NODE_ENV = 'production';
      const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error', false);
      const res = createResponse();
      const sendSpy = jest.spyOn(res, 'send');

      errorHandler(error, logger, res);

      expect(sendSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          code: httpStatus.INTERNAL_SERVER_ERROR,
          message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
        }),
      );
      expect(res.locals.errorMessage).toBe(error.message);
    });

    test('should preserve original error status and message if in production mode and error is operational', () => {
      process.env.NODE_ENV = 'production';
      const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error');
      const res = createResponse();
      const sendSpy = jest.spyOn(res, 'send');

      errorHandler(error, logger, res);

      expect(sendSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          code: error.statusCode,
          message: error.message,
        }),
      );
    });
  });
});
