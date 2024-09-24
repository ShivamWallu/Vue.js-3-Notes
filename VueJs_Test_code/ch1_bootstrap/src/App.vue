<template>
  <div>
    <Home />
    <Products />
  </div>
</template>

<script>
import Products from './components/Products.vue';
import Home from './components/Home.vue';

export default {
  components: {
    Products,Home
  },
};
</script>
