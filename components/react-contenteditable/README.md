<div align="center">
	<br />
	<p>
		<a href="http://infotition.de">
			<img src="https://raw.githubusercontent.com/Infotition/react-contenteditable/main/.github/assets/infotition_logo.png" width=600px alt="infotition logo" />
		</a>
	</p>
	<h1>React contenteditable component</h1>
	<p>A small and simple react component representing an element with editable contents.</p>
  	<p>
    <a href="https://github.com/Infotition/react-contenteditable/actions/workflows/main.yml" title="build state">
			<img alt="build state" src="https://github.com/Infotition/react-contenteditable/actions/workflows/main.yml/badge.svg">
		</a>
		<a href="https://www.npmjs.com/package/@infotition/react-contenteditable" title="min zipped size">
			<img alt="package size" src="https://badgen.net/bundlephobia/minzip/@infotition/react-contenteditable">
		</a>
		<a href="https://github.com/Infotition/react-contenteditable/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/react-contenteditable" alt="license" />
		</a>
	</p>
</div>

# Installation

With npm:

```bash
npm install @infotition/react-contenteditable
```

or with yarn:

```bash
yarn add @infotition/react-contenteditable
```

# Getting started

```jsx
import { ContentEditable } from '@infotition/react-contenteditable';
import { useState, FunctionComponent } from 'react';

const Editor: FunctionComponent = () => {
  const initialContent = `<h1>Hello World Example</h1>`;
  const [content, setContent] = useState(initialContent);

  return <ContentEditable html={content} onChange={setContent} />;
}

export default Editor;
```

## Features

The following features define this implementation:
- 100 % type safe, well tested and documented component via Typescript.
- Full ECMAScript module support.
- Implemented to use in functional component with react hook api.
- Less than 600B bundle size with zero dependencies.
- Various props to interact with the component.
- Simple default styling of the editable div.

## Available props

|  prop       | description                                                                       | type                     |
|-------------|-----------------------------------------------------------------------------------|--------------------------| 
| html        | Inner html of the editable element.                                               | String? = 'Edit me!'     |
| Tag         | The tag name of the editable element.                                             | JSXElement? = 'div'      |
| readonly    | Whether the editing should be disabled or not.                                    | Boolean? = false         |
| className   | Additional element css class names.                                               | String?                  |
| lang        | The language, the browser should check spelling in.                               | String? = 'en'           |
| headless    | Whether default styling should get applied or not.                                | Boolean? = false         |
| spellcheck  | Whether the browser should check spelling or not.                                 | Boolean? = false         |
| style       | A collection of css properties which should get applied inline to the element.    | CSSProperties?           | 
| onChange    | Callback whenever the content changes.                                            | (value: string) => void  |
| onBlur      | Callback whenever the element is [blurred][blurred].                              | (value: string) => void  |
| onFocus     | Callback whenever the element has received [focus][focus].                        | (value: string) => void  |

## Examples

you can try infotition's implementation of an **react-contenteditable** component right from your browser to see if it fits your project's needs:
- [Hello World example](https://codesandbox.io/s/infotition-react-contenteditable-hello-world-sr4z9g): A basic demonstration of the component.

## Development

If you want to develop this repository, clone it and change the directory of your terminal to the downloaded repository.

```bash
$ git clone https://github.com/Infotition/react-contenteditable.git
$ cd react-contenteditable
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

The examples doesn't have a copy of the package installed. Instead you have to link them to the base package directory. You also need to link the react dependency of the example project to the one of the package, else webpack sees two local copies of react and throws an error.

In the example directory:
```bash
npm link ..\..\ ..\..\node_modules\react\ ..\..\node_modules\react-dom\
```

After hitting `yarn start`, the development server for the example should start.

## Contribution

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Infotition Code of Conduct guidelines](./.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](./.github/CONTRIBUTING.md)

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

## License

This repo is covered under the MIT License, see the [LICENSE](./LICENSE) file for more information.


[blurred]: https://developer.mozilla.org/en-US/docs/web/api/element/blur_event
[focus]:   https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
