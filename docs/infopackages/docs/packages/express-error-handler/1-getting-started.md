---
id: express-error-handler-getting-started
title: Getting started
description: 'Quick introduction of how to use the package.'
sidebar_position: 1
---

# Getting started

An utility package for easy and intuitive express error handling.

## Quick start

This package provides an easy and intuitive way to handle errors in an express application. Instead of manually sending a response with error code and so on, you can now just throw an instance of an `APIError` which gets then caught by an middleware to send a nice response to the client.

If an error occurs, which is not an `APIError`, the middleware also tries to convert it. To use the package you first initialize it by registering both the error converter and handler middleware.

```ts
import { errorConverter, errorHandler, ApiError } from '@infotition/express-error-handler';
import express, { Request, Response,NextFunction } from 'express';

const app = express();

// convert error to ApiError if needed
app.use((err: ApiError, _: Request, __: Response, next: NextFunction) =>
  errorConverter(err, next),
);

// handle error and send it to client
app.use((err: ApiError, _: Request, res: Response, __: NextFunction) =>
  errorHandler(err, res),
);
```

This however does not work by it's own. For the middleware to handle the error, it needs it to be transferred via middleware parameter. That is the reason why every controller, which could possibly throw some errors, should get wrapped inside the `catchAsync` method. This method catches every error and passes them to the next middleware function.

```ts
import { Router } from 'express';
import { catchAsync } from '@infotition/express-error-handler';

export const router = Router();

const testController = catchAsync(async (_, res) => {
  res.status(200).send("works");
});

router.route('/test').get(testController);
```

## Installation

```bash
yarn add @infotition/express-error-handler
```
