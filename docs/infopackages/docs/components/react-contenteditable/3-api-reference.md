---
id: contenteditable-api-reference
title: API Reference
description: 'Detailed overview of the provided components.'
sidebar_position: 3
---

# API Reference

## Components

### 🧩 ContentEditable

---

`ContentEditable: FunctionComponent<ContentEditableProps>`

---

React component representing an element with editable contents.

```tsx
  <ContentEditable html={"Edit me!"}  />
```
## Types

### 📋 ContentEditableProps

|  prop        | description                                                                       | type                     |
|--------------|-----------------------------------------------------------------------------------|--------------------------| 
| html?        | Inner html of the editable element.                                               | String = 'Edit me!'      |
| Tag?         | The tag name of the editable element.                                             | JSXElement = 'div'       |
| readonly?    | Whether the editing should be disabled or not.                                    | Boolean = false          |
| className?   | Additional element css class names.                                               | String                   |
| lang?        | The language, the browser should check spelling in.                               | String = 'en'            |
| headless?    | Whether default styling should get applied or not.                                | Boolean = false          |
| spellcheck?  | Whether the browser should check spelling or not.                                 | Boolean = false          |
| style?       | A collection of css properties which should get applied inline to the element.    | CSSProperties            | 
| onChange?    | Callback whenever the content changes.                                            | ChangeCallback           |
| onBlur?      | Callback whenever the element is blurred.                                         | ChangeCallback           |
| onFocus?     | Callback whenever the element has received focus                                  | ChangeCallback           |
| onKey?       | Callback whenever the element has received an key event.                          | KeyboardCallback         |

### 📋 ChangeCallback

---

`ChangeCallback = (value: string) => void`

---

Represents the type of the function which gets invoked after an `onChange`, `onBlur` or `onFocus` event. The value parameter
represents the content of the editable element.

### 📋 KeyboardCallback

---

`KeyboardCallback = (type: 'up' | 'down', event: KeyboardEvent) => void`

---

Represents the type of the function which gets invoked after an `onKey` event. The type represents whether it was a key up
or key down event.
