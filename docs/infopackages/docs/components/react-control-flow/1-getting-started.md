---
id: react-control-flow-getting-started
title: Getting started
description: 'Quick introduction of how to use the component.'
sidebar_position: 1
---

# Getting started

Lightweight utility react package for easy and reactive control flow.

## Quick started

The react control flow components are helper components to render other components (e.g. conditions, loops). They
help to keep the react tree cleaner, because you don't need to use ternary expressions or maps.

### Show

The `Show` control flow is used to conditional render components of a view: it renders `children` when the `when` prop is truthy, an `fallback` otherwise. It is similar to the ternary operator `(when ? children : fallback)` but is ideal for templating JSX.

```tsx
<Show when={user} fallback={<div>Loading...</div>}>
  <h1>{user.name}</h1>
</Show>
```

## Installation

```bash
npm install @infotition/react-control-flow
```

Or:

```bash
yarn add @infotition/react-control-flow
```
