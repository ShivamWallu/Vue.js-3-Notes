<template>
  <AdminLayoutComponent>
    <template v-slot:main>
      <div>
        <h1>v-slot main user ker raha hu</h1>
      </div>
    </template>
    <h2>Admin Page Content</h2>
    <p>Welcome to the Admin page!</p>
  </AdminLayoutComponent>
</template>

<script>
import AdminLayoutComponent from '@/layouts/AdminLayoutComponent.vue';

export default {
  name: 'Admin',
  components: {
    AdminLayoutComponent,
  },
}
</script>

<style>
/* Your styles here */
</style>
