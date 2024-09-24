<template>
  <div>
    <!-- Display the formatted date and capitalized title -->
    <h1>{{ capitalizedTitle }}</h1>
    <p>Formatted Date: {{ formattedDate }}</p>
  </div>
</template>

<script>
// Import the utility functions
import { formatDate, capitalizeFirstLetter } from './utils';

export default {
  data() {
    return {
      title: 'hello world', // Original title
      date: '2024-07-23'    // Original date
    };
  },
  computed: {
    // Use the formatDate function to format the date
    formattedDate() {
      return formatDate(this.date);
    },
    // Use the capitalizeFirstLetter function to capitalize the title
    capitalizedTitle() {
      return capitalizeFirstLetter(this.title);
    }
  }
};
</script>
