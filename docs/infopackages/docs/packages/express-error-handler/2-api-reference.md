---
id: express-error-handler-api-reference
title: API Reference
description: 'Detailed overview of the provided functions.'
sidebar_position: 2
---

# API Reference

## Functions

### 🏃‍♂️ catchAsync

---

`catchAsync(fn: Middleware): Promise<void>`

---

Takes a middleware function and returns a new function that catches any errors thrown by the original one 
and passes them to the next middleware function. If the error is a zod error (parsing went wrong), a APIError gets thrown with
a custom validation error message.

This function is used to catch any errors thrown within an controller.


```ts
const testController = catchAsync(async (_, res) => {
  res.status(200).send("works");
});
```

**Parameters**
- fn: `Middleware` The async function to catch errors in.

**Returns** `Promise<void>`

### 🏃‍♂️ errorConverter

---

`errorConverter = (err: IError, next: NextFunction): void`

---

If the error is not an instance of ApiError, then this function converts it to an ApiError 
with all the details from the given Error. This function is a middleware, so it calls the next
function with the converted error.

This middleware should get registered on the bottom of the express app, so that everything that got
this this point, must be an error. If needed, it gets converted so the error can get handled.

```ts
app.use((err: ApiError, _: Request, __: Response, next: NextFunction) =>
  errorConverter(err, next),
);
```

**Parameters**
- err: `IError` The error object that was thrown.
- next: `NextFunction` The function to call next with the error as parameter.

**Returns** `void`

### 🏃‍♂️ errorHandler

---

`errorHandler = (err: ApiError, res: Response, logger: any)`

---

If an Error was thrown and converted by the `errorConverter`, this middleware is used to handle it.
It parses the thrown error and builds a custom response, which is then send to the client.

```ts
app.use((err: ApiError, _: Request, res: Response, __: NextFunction) =>
  errorHandler(err, res),
);
```

**Parameters**
- err: `ApiError` The error object that was thrown.
- res: `Response` The response object from the express middleware
- logger: `any` The logger object to log the error to (must have .error function).

**Returns** `void`

## Types

### 📋 IError

---

`ApiError extends Error`

---

Simple interface to represent what fields an error should contain before converting it.
- `message: string` - The errors message.
- `statusCode: number` - The errors status code.
- `stack: string` - The stack trace of the error.

### 📋 ApiError

---

`ApiError extends Error`

---

Extends the base error class with an status code and an operational flag, which is set to true, if the error occurred 
because a user did a mistake. If no custom stack trace was provided, the error stack strace gets captured.
- `statusCode: number` - The errors status code.
- `isOperational: string`- Whether this error caused by user  or internal.
