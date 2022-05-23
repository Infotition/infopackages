---
id: react-control-flow-api-reference
title: API Reference
description: 'Detailed overview of the provided components.'
sidebar_position: 3
---

# API Reference

## Components

### 🧩 Show

---

`Show: FunctionComponent<ShowProps>`

---

The `Show` control flow is used to conditional render components of a view: it renders `children` when the `when` prop is truthy, an `fallback` otherwise. It is similar to the ternary operator `(when ? children : fallback)` but is ideal for templating JSX.

```tsx
<Show when={user} fallback={<div>Loading...</div>}>
  <h1>{user.name}</h1>
</Show>
```
## Types

### 📋 ShowProps

|  prop        | description                                 | type                          |
|--------------|---------------------------------------------|-------------------------------| 
| when         | If truthy, the children getting rendered.   | any                           |
| fallback?    | The element to render if when is falsy.     | ReactElement                  |
| children     | The components child elements.              | ReactElement | ReactElement[] |
