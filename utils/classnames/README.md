<div align="center">
	<br />
	<p>
		<a href="http://infotition.de">
			<img src="https://raw.githubusercontent.com/Infotition/infopackages/main/.github/assets/infotition_logo.png" width=600px alt="infotition logo" />
		</a>
	</p>
	<h1>Infotition's class names utilities</h1>
	<p>Utility function for conditionally joining class names together.</p>
  	<p>
    <a href="https://github.com/Infotition/infopackages/actions/workflows/ci.yaml" title="build state">
			<img alt="build state" src="https://github.com/Infotition/infopackages/actions/workflows/ci.yaml/badge.svg">
		</a>
		<a href="https://www.npmjs.com/package/@infotition/classnames" title="min zipped size">
			<img alt="package size" src="https://badgen.net/bundlephobia/minzip/@infotition/classnames">
		</a>
		<a href="https://github.com/Infotition/infopackages/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/infopackages" alt="license" />
		</a>
	</p>
</div>

# Installation

With npm:

```bash
npm install @infotition/classnames
```

or with yarn:

```bash
yarn add @infotition/classnames
```

# Getting started

```jsx
import { classNames } from '@infotition/classnames';

classNames('foo', 'bar', 'infotition'); // => 'foo bar infotition'
classNames(6 > 5 && 'foo', 'infotition', 5 > 6 && 'bar'); // => 'foo bar'
```

## Development

If you want to develop this repository, clone it and change the directory of your terminal to the downloaded repository.

```bash
$ git clone https://github.com/Infotition/classnames.git
$ cd classnames
```

Now you can install all development and production dependencies.

```bash
yarn install --or-- npm install
```

The following scripts are defined in the `package.json`:
- `dev`           - Rebuilds the package after every change.
- `build`         - Builds the package via rollup.
- `clean`         - Deletes build files from folder.
- `clean:full`    - Deletes build files and node modules from folder.
- `test`          - Runs the jest integration tests.
- `test:coverage` - Runs the jest tests with coverage report.

## Contribution

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Infotition Code of Conduct guidelines](./.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](./.github/CONTRIBUTING.md)

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

## License

This repo is covered under the MIT License, see the [LICENSE](./LICENSE) file for more information.
