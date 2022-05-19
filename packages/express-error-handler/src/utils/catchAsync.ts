import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ZodError } from 'zod';
import { ApiError } from '../models/ApiError';

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

/**
 * It takes a middleware function and returns a new function that catches any errors thrown
 * by the original middleware function and passes them to the next middleware function.
 * If the error is a zod error (parsing went wrong), a message gets build from the zod
 * messages and creates a ApiError with it.
 *
 * @param fn  The async function to catch errors in.
 * @returns   Returns a async function which calls the provided one and catches any errors.
 */
export function catchAsync(fn: Middleware) {
  return async (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => {
      if (err instanceof ZodError) {
        const msg = err.issues
          .map(({ message, path }) => `${message} ${path.join(',')}`)
          .join(', ');
        next(new ApiError(httpStatus.BAD_REQUEST, msg));
      } else {
        next(err);
      }
    });
  };
}
