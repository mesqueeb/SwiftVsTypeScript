<script setup>
import DefaultTheme from 'vitepress/theme'
import VPDocAside from 'vitepress/dist/client/theme-default/components/VPDocAside.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <VPDocAside class="aside-in-sidebar" />
    </template>
  </Layout>
</template>

<style>
.aside-in-sidebar {
  z-index: 0;
  position: relative;
}
div.aside {
	display: none !important;
}
</style>
