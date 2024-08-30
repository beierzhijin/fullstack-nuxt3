---
title: '文章标题'
description: 'meta description of the page'
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
    - name: 'copyright'
      content: '© 2022 NuxtLabs'
    - name: 'og:title'
      content: 'OpenGraph title'
---

<!-- 
  https://content.nuxt.com/usage/markdown
  Front-matter中不写title时，title会自动匹配 #h1
 -->

<!--  -->
<!-- https://content.nuxt.com/components/prose -->
<!-- https://tailwindcss.com/docs/plugins#typography -->
<!-- https://github.com/tailwindlabs/tailwindcss-typography -->
<!-- https://tailwindcss-typography.vercel.app/ -->

# 第一篇文章

## Introduction 
This is some text. *This is italic*.

## Second Part
Something more. **This is bold**.

### Also try lists
Unordered lists:
 - Do the work
 - Collect benefits

Numbered lists:

 1. Pay taxes
 2. Die

Todo list:
 - [ ] Buy groceries
 - [ ] Pay bills

Tables:
| Name | Surname |
|--|--|
| Piotr | Jura |

```html
<html>
	<div>Hello!</div>
</html>
```

[第二篇文章](/blog/second)
