<!-- views/About.vue -->

<template>
  <DefaultLayout>
    <h2>About Page Content</h2>
    <p>Welcome to the about page!</p>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'About',
  components: {
    DefaultLayout,
  },
}
</script>

<style>
/* Your styles here */
</style>
