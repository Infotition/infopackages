/**
 * Extends the base error class with an status code and an operational flag, which
 * is set to true, if the error occurred because a user did a mistake. If no custom
 * stack trace was provided, the error stack strace gets captured.
 */
export class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
