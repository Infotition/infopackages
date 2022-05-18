---
id: classnames-api-reference
title: API Reference
description: 'Detailed overview of the provided functions.'
sidebar_position: 2
---

# API Reference

## classNames

---

🏃‍♂️ `classNames(classes: (string | boolean)[]): string`

---

Gets any number of strings as input and returns the strings as a combined one. If a boolean was provided, it will just be skipped. This is useful for the conditionally && shortcut without cluttering the class name string with "false" values.

```javascript
import { classNames } from '@infotition/classnames';
classNames(6 > 5 && 'foo', 'bar', 5 > 6 && 'infotition'); // => 'foo bar'
```

**Parameters**
- classes: `(string | boolean)[]`
  A list of classes which should get combined. If a boolean is also provided, it will just be ignored.

**Returns** `string`
The provided classes combined to one string separated by empty spaces.
