---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
// import { FaceBook_DATA } from './data'

</script>
<style src="./index.scss"></style>

<!-- nav页面网页前半不符标题 -->

# SaleSmartly

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<!-- # Facebook

<br />
<MNavLinks v-for="{title, items} in FaceBook_DATA" :title="title" :items="items"/> -->

<br />

::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，由[666seasir666](https://github.com/666seasir666/nav)修改,保留版权声明！
:::
