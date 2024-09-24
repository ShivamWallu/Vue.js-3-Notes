<!-- src/components/RecipeList.vue -->

<template>
  <div>
    <h1>Chinese Food Recipes</h1>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <img :src="recipe.image" alt="Recipe Image" width="100" />
        <h2>{{ recipe.title }}</h2>
        <p>Difficulty: {{ recipe.difficulty }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getRecipes } from '../services/recipeService';

export default {
  name: 'RecipeList',
  setup() {
    // Define a reactive variable to store the recipes
    const recipes = ref([]);

    // Function to fetch recipes and update the reactive variable
    const fetchRecipes = async () => {
      try {
        recipes.value = await getRecipes();
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    // Fetch recipes when the component is mounted
    onMounted(fetchRecipes);

    return {
      recipes // Return the reactive variable to use in the template
    };
  }
};
</script>

<style>
/* Add some basic styling */
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

img {
  display: block;
  margin-bottom: 10px;
}
</style>
