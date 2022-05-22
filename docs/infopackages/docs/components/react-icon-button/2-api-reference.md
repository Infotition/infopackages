---
id: iconbutton-api-reference
title: API Reference
description: 'Detailed overview of the provided components.'
sidebar_position: 3
---

# API Reference

## Components

### 🧩 ContentEditable

---

`IconButton: FunctionComponent<IconButtonProps>`

---

React component representing an custom element with editable contents.

```tsx
  <IconButton icon={EyeIcon}  />
```
## Types

### 📋 ContentEditableProps

|  prop        | description                                                     | type                                   |
|--------------|-----------------------------------------------------------------|----------------------------------------| 
| icon         | The icon which gets rendered inside the button.                 | ReactElement                           |
| disabled?    | Whether the button is disabled or not.                          | Boolean = false                        |
| className?   | Additional class names to add to the component.                 | String = ''                            |
| size?        | The size of the button.                                         | 'small' | 'medium' | 'large' = 'medium |
| onClick?     | The function which gets called after an button click event.     | VoidFunction                           |
| ariaLabel?   | he aria label of the icon button.                               | String = 'icon button'                 |
