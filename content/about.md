---
# https://content.nuxt.com/usage/markdown#front-matter
description: "关于的描述"
# Will be used as the default value for head.image, Overrides the <meta property="og:image">, https://content.nuxt.com/composables/use-content-head#parameters
image: /images/LV.png
# https://content.nuxt.com/composables/use-content-head
head:
  meta:
    - name: 'og:image'
      content: /images/LV.png
---

# 关于

<!-- 
  https://content.nuxt.com/usage/markdown#code-highlighting
-->

## Code
```javascript
const { createApp } = Vue
const app = createApp({
  data() {
    return {
      message: 'Hello Vue 3!'
    }
  }
})
app.mount('#app')
```
