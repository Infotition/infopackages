div id="top" />

<br />
<div align="center">
  <a href="http://infotition.de">
    <img src="https://raw.githubusercontent.com/Infotition/infopackages/main/.github/assets/logo.png" width="80" alt="infotition logo" />
  </a>

  <h3 align="center">Infopackages</h3>

  <p align="center">
    A collection of infotition node modules consisting of components and utilities
    <br />
    <a href="https://infotition.github.io/infopackages/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Infotition/infopackages/issues/new?template=feature_request.md">Report Bug</a>
    ·
    <a href="https://github.com/Infotition/infopackages/issues/new?template=bug_report.md">Request Feature</a>
  </p>

  <p align="center">
    <a href="https://github.com/Infotition/infopackages/actions/workflows/ci.yaml" title="workflow">
			<img src="https://img.shields.io/github/workflow/status/Infotition/infopackages/CI?style=for-the-badge" alt="workflow" />
		</a>
  	<a href="https://github.com/Infotition/infopackages/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/infopackages?style=for-the-badge" alt="license" />
		</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#module-overview">Module Overview</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#issue-reporting">Issue Reporting</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

# Getting started

Infopackages is a collection of infotition node modules consisting of components and utilities. If you want to learn more about the packages you can look up the docs. Here you only find a list of all modules.

For development on the web we focus on the following Tech Stack:
- React / Next.js for frontend
- Express.js for backend
- Typescript

This monorepo builds on top of these technologies to provide a useful set of small, efficient and reusable modules.

<p align="right">(<a href="#top">back to top</a>)</p>

## Module Overview

### Packages

- [classnames](https://infotition.github.io/infopackages/category/classnames) - Utility function for conditionally joining class names together.
- [express-error-handler](https://infotition.github.io/infopackages/category/express-error-handler) - An utility package for easy express error handling.

### Components

- [react-contenteditable](https://infotition.github.io/infopackages/category/react-contenteditable) - A small and simple react component representing an element with editable contents.

<p align="right">(<a href="#top">back to top</a>)</p>

## Development

Infopackages is a mono repository based on [turborepo](https://turborepo.org/). To develop on one single package, you have to clone the whole repository.

We prefer [yarn](https://yarnpkg.com/) for developing. That's why turborepo uses yarn workspaces. To ensure a trouble free development experience we advice to also use it instead of npm.

```bash
$ git clone https://github.com/Infotition/infopackages.git
```

Now install all the (development) dependencies. We prefer [yarn](https://yarnpkg.com/) as package manger, but you can also use np

```bash
yarn install
```

At this point everything ist installed. Now change your directory your desired package/component:

```bash
cd infopackages/{components|packages}/{name}
```

The following scripts are defined in the `package.json` and can be used for developing with `yarn`:
- `dev`           - Rebuilds the package after every change (development).
- `build`         - Builds the package via rollup (production).
- `clean`         - Deletes build files from folder.
- `lint`          - Checks the source code for style convention.
- `test`          - Runs the jest test suits.
- `deploy`        - Deploys the production package to the npm registry.
- `docs:dev`      - Starts the development server for the docs.

This project uses [tsi](https://github.com/Infotition/tsi) as its zero config package development manager. If you want to read more about these scripts you can look them up there.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contribution

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. Don't forget to give the project a star! Thanks again! But before you get started, please see the following first:
- [Infotition Code of Conduct guidelines](../../.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](../../.github/CONTRIBUTING.md)

<p align="right">(<a href="#top">back to top</a>)</p>

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License, see the [LICENSE](../../LICENSE) file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Tobias Kärst - [@infotition](https://twitter.com/infotition) - infotition@gmail.com

Project Link: [https://github.com/Infotition](https://github.com/Infotition)

<p align="right">(<a href="#top">back to top</a>)</p>
