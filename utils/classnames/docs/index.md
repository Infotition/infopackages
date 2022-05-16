# Getting started

Utility function for conditionally joining class names together.

## Quick start

To see this package in action as quick as possible, you can look up the following code. 

The `classNames` function takes any number of argument which can be strings or booleans. Any given boolean gets ignored while the strings are combined with an empty space as separator. This allows conditional shortcuts like `isAdmin && 'admin'` without cluttering the class names with false string values if the expression evaluates to false.


```javascript
import { classNames } from '@infotition/classnames';

classNames('foo', 'bar', 'infotition'); // => 'foo bar infotition'
classNames(6 > 5 && 'foo', 'bar', 5 > 6 && 'infotition'); // => 'foo bar'
```

## Installation

```bash
npm install @infotition/classnames
```

Or:

```bash
yarn add @infotition/classnames
```
