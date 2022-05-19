---
id: classnames-api-reference
title: API Reference
description: 'Detailed overview of the provided functions.'
sidebar_position: 2
---

# API Reference

## Functions

### 🏃‍♂️ classNames

---

`classNames(classes: ClassElement[]): string`

---

Gets any number of strings as input and returns the strings as a combined one. If a boolean was provided, it will just be skipped. This is useful for the conditionally && shortcut without cluttering the class name string with "false" values.

```javascript
import { classNames } from '@infotition/classnames';
classNames(6 > 5 && 'foo', 'bar', 5 > 6 && 'infotition'); // => 'foo bar'
```

**Parameters**
- classes: `ClassElement[]`
  A list of classes which should get combined. If a boolean is also provided, it will just be ignored.

**Returns** `string`
The provided classes combined to one string separated by empty spaces.

## Types

### 📋 ClassElement

---

`ClassElement = string | boolean | undefined | ClassObject`

---

Represents the type a class element can be. These types force different combining behavior:
- `string`: The value gets added to the resulting class list.
- `boolean` and `undefined`: The value just gets ignored.
- `ClassObject`: The names of the keys gets added to the class list, if the corresponding value is truly.

### 📋 ClassObject

---

`ClassObject = { [key: string]: boolean }`

---

A `ClassObject` is a map containing string keys with booleans as values. The keys represent the classnames which should
get added to the resulting class list, if the value is `true`.
