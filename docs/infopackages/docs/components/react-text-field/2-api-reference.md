---
id: textfield-api-reference
title: API Reference
description: 'Detailed overview of the provided components.'
sidebar_position: 2
---

# API Reference

## Components

### 🧩 TextField

---

`TextField: FunctionComponent<TextFieldProps>`

---

Lightweight react text field based on material design 3.

```tsx
<TextField variant="outlined" label="Outlined" />
```

## Types

### 📋 TextFieldProps

|  prop             | description                                                 | type                                      |
|-------------------|-------------------------------------------------------------|-------------------------------------------| 
| label?            | The label of the text field.                                | string                                    |
| helper?           | The helper text which gets displayed below the text field.  | string                                    |
| variant?          | Styling variant of the text field.                          | 'filled' | 'outlined'                     |
| type?             | The type of the text field.                                 | 'email' | 'password' | 'text' | 'number'  |
| full?             | Whether the text field should be full with.                 | boolean                                   |
| required?         | Whether the input of the field is required.                 | boolean                                   |
| readonly?         | Whether the input should be read only or not.               | boolean                                   |
| disabled?         | Whether the input should be disabled or not.                | boolean                                   |
| error?            | Error message which should get displayed below field.       | string                                    |
| value?            | The current value of the text field.                        | string                                    |
| onChange?         | Callback whenever the content changes.                      | ChangeCallback                            |
| maxLength?        | The input limit of the text field. Must be positive.        | String = 'icon button'                    |
| rightAdornment?   | The adornment to the right of the input field.              | number                	                  |
| leftAdornment?    | The adornment to the left of the input field.               | ReactElement                              |
