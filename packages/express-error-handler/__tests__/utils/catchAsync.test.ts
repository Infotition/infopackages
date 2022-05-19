import { jest } from '@jest/globals';
import httpStatus from 'http-status';
import { createRequest, createResponse } from 'node-mocks-http';
import { z } from 'zod';

import { catchAsync, ApiError } from '../../src';

describe('Catch async utils', () => {
  test('should catch any error and call next on it', async () => {
    const error = new ApiError(httpStatus.BAD_REQUEST, 'Any error');
    const next = jest.fn();

    const controller = catchAsync(async () => {
      throw error;
    });

    await controller(createRequest(), createResponse(), next);
    expect(next).toHaveBeenCalledWith(error);
  });

  test('should catch zod parse errors and parse them to api error', async () => {
    const next = jest.fn();
    const validation = z.object({
      body: z.object({
        email: z.string().email(),
      }),
    });

    const controller = catchAsync(async (req) => {
      validation.parse(req);
    });

    await controller(createRequest(), createResponse(), next);

    expect(next).toHaveBeenCalledWith(expect.any(ApiError));
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: httpStatus.BAD_REQUEST,
        message: 'Required body,email',
      }),
    );
  });
});
