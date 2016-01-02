---
layout: page
title: selector-no-universal
permalink: docs/src/rules/selector-no-universal/README/
---

# selector-no-universal

Disallow universal selectors.

```css
    * {}
/** ↑
 * This selector */
```

The following patterns are considered warnings:

```css
* {}
```

```css
*, .foo {}
```

```css
* > [foo] {}
```

The following patterns are *not* considered warnings:

```css
a {}
```

```css
.foo {}
```

```css
[foo] {}
```

```css
#foo {}
```

```css
.bar > #foo {}
```
