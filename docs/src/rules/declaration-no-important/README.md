---
layout: page
title: declaration-no-important
permalink: docs/src/rules/declaration-no-important/README/
---

# declaration-no-important

Disallow `!important` within declarations.

```css
    a { color: pink !important; }
/**                      ↑
 *         This !important */
```

The following patterns are considered warnings:

```css
a { color: pink !important; }
```

```css
a { color: pink ! important; }
```

```css
a { color: pink!important; }
```

The following patterns are *not* considered warnings:

```css
a { color: pink; }
```
