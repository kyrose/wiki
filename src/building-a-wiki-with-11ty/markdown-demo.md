---
title: Markdown demo
description: Wiki entrance for 11ty 01
eleventyNavigation:
  key: Markdown demo
  order: 120
  parent: Building a wiki with 11ty
---

This page is a showcase in which to see the styles that can be generated with
markdown.

## Headings

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

## Text emphasys

```markdown
Lorem ipsum *dolor* sit _amet_, consectetur adipiscing elit. Curabitur pretium
**ligula** non __sodales__ tincidunt. Nunc semper bibendum ullamcorper. Proin
**sed ex _ullamcorper_**, sagittis sem a, molestie ~~dolor~~.
```

Lorem ipsum *dolor* sit _amet_, consectetur adipiscing elit. Curabitur pretium
**ligula** non __sodales__ tincidunt. Nunc semper bibendum ullamcorper. Proin
**sed ex _ullamcorper_**, sagittis sem a, molestie ~~dolor~~.

## Lists

### Ordered

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

### Unordered

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Links

[Lorem ipsum dolor sit amet, consectetur adipiscing elit.][1]

Lorem ipsum dolor sit amet <https://inigochoa.me/>, consectetur adipiscing elit.

> **Did you know?** All external links are configured to automatically open in a
> tab or window. If you want to disable this setting, you can remove the plugin
> from your .eleventy.js configuratioon file.

## Code

Lorem ipsum `dolor sit amet`, consectetur adipiscing elit.

```javascript
const sendAlert = message => alert(message)

sendAlert('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
```

## Tables

| Column 1          | Column 2              | Column 3         |
| ----------------- |:---------------------:| ----------------:|
| Lorem ipsum dolor | sit amet, consectetur | adipiscing elit. |
| Lorem ipsum dolor | sit amet, consectetur | adipiscing elit. |
| Lorem ipsum dolor | sit amet, consectetur | adipiscing elit. |

> Lorem ipsum dolor sit amet, **consectetur** adipiscing elit.

---

::: callout
*callout: yellow is the default color for a callout*
:::

[1]: https://inigochoa.me/ "My homepage"
