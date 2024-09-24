<!-- views/Home.vue -->

<template>
  <DefaultLayout>
    <h2>Home Page Content</h2>
    <p>Welcome to the home page!</p>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'Home',
  components: {
    DefaultLayout,
  },
}
</script>

<style>
/* Your styles here */
</style>
