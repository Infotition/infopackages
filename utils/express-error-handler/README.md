<div align="center">
	<br />
	<p>
		<a href="http://infotition.de">
			<img src="https://raw.githubusercontent.com/Infotition/infopackages/main/.github/assets/infotition_logo.png" width=600px alt="infotition logo" />
		</a>
	</p>
	<h1>Express error handler</h1>
	<p>An utility package for express error handling.</p>
  	<p>
    <a href="https://github.com/Infotition/infopackages/actions/workflows/ci.yml" title="build state">
			<img alt="build state" src="https://github.com/Infotition/infopackages/actions/workflows/ci.yml/badge.svg">
		</a>
		<a href="https://github.com/Infotition/infopackages/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/infopackages" alt="license" />
		</a>
	</p>
</div>

# Installation

With npm:

```bash
npm install @infotition/express-error-handler
```

or with yarn:

```bash
yarn add @infotition/express-error-handler
```

# Getting started

Convert and catch errors as express middleware:

```ts
import { errorConverter, errorHandler, ApiError } from '@infotition/express-error-handler';
import express, { Request, Response,NextFunction } from 'express';

const app = express();

// ... other middlewares

// convert error to ApiError, if needed
app.use((err: ApiError, _: Request, __: Response, next: NextFunction) =>
  errorConverter(err, next),
);

// handle error
app.use((err: ApiError, _: Request, res: Response, __: NextFunction) =>
  errorHandler(err, logger, res),
);
```

Catch the actual thrown api errors in the routes:

```ts
import { Router } from 'express';
import { catchAsync } from '@infotition/express-error-handler';

export const router = Router();

const testController = catchAsync(async (_, res) => {
  res.status(200).send("works");
});

router.route('/test').get(testController);
```

## Development

If you want to develop this repository, clone it and change the directory of your terminal to the downloaded repository.

```bash
$ git clone https://github.com/Infotition/express-error-handler.git
$ cd express-error-handler
```

Now you can install all development and production dependencies.

```bash
yarn install --or-- npm install
```

The following scripts are defined in the `package.json`:
- `dev`    - Rebuilds the package after every change.
- `build`  - Builds the package via rollup.
- `clean`  - Deletes build files from folder.
- `lint`   - Lints the source code.
- `deploy` - Creates a cleaned package and publishes it to npm.
- `test`   - Runs the jest integration tests.

## Contribution

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Infotition Code of Conduct guidelines](./.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](./.github/CONTRIBUTING.md)

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

## License

This repo is covered under the MIT License, see the [LICENSE](./LICENSE) file for more information.

