---
id: create-splash-animation-api-reference
title: API Reference
description: 'Detailed overview of the provided functions.'
sidebar_position: 2
---

# API Reference

## Functions

### 🏃‍♂️ createSplashAnimation

---

`createSplashAnimation(event: any, splashClass: string: void`

---

This function appends a span element at the clicked position an adds the provided class to play
the pre configured animation at the click position.


```tsx
const handleClick = (event: MouseEvent) => {
  createSplashAnimation(event, 'splash');
};

<div className="container" onClick={handleClick} />
```

**Parameters**
- event: `any` The user event which fired.
- splashClass: `string` The css class which should get added to the generated element.

**Returns** `void`
