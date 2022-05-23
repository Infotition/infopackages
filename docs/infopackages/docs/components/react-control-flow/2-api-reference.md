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

### 🧩 Client Portal

---

`ClientPortal: FunctionComponent<ClientPortalProps>`

---

This inserts the element in the mount node. Useful for inserting Modals outside of the page layout. Events still propagate through the Component Hierarchy. If no element was found, nothing gets rendered.

```tsx
<div id="portal"></div>
<ClientPortal selector="#portal">
  <h1>Hello World</h1>
</ClientPortal>
```

The resulting html would like like this:

```html
<div id="portal">
  <h1>Hello World</h1>
</div>
```

## Types

### 📋 ShowProps

|  prop        | description                                 | type                          |
|--------------|---------------------------------------------|-------------------------------| 
| when         | If truthy, the children getting rendered.   | any                           |
| fallback?    | The element to render if when is falsy.     | ReactElement                  |
| children     | The components child elements.              | ReactElement | ReactElement[] |

### 📋 ClientPortalProps

|  prop        | description                                      | type         |
|--------------|--------------------------------------------------|--------------| 
| selector     | The element's selector to mount the children in. | any          |
| children     | The components child elements.                   | ReactElement |
