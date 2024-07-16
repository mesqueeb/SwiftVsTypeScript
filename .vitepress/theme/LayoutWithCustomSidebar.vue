<script setup>
import DefaultTheme from 'vitepress/theme'
import VPDocAside from 'vitepress/dist/client/theme-default/components/VPDocAside.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <VPDocAside />
    </template>
  </Layout>
</template>

<style>
div.aside {
	display: none !important;
}
</style>
