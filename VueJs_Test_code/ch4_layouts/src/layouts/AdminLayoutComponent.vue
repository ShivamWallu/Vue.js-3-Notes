<template>
  <div>
    <header>
      <h1>Site Header</h1>
    </header>
    <main>
      <!-- Content inserted via slot will appear here -->
      <slot name="main"></slot>
    </main>
    <!-- <footer>
      <p>Site Footer</p>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'AdminLayoutComponent',
}
</script>

<style>
/* Your styles here */
header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

main {
  padding: 20px;
}
</style>
