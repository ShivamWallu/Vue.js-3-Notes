// src/services/recipeService.js

import axios from 'axios';

// Base URL and API Key for the Chinese Food DB API
const API_URL = 'https://chinese-food-db.p.rapidapi.com';
const API_KEY = '275b118133msh064aab74e633a1dp1a7e23jsn07e5b4e36688'; // Replace with your RapidAPI key

// Axios request options
const options = {
  method: 'GET',
  url: API_URL,
  headers: {
    'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com',
    'X-RapidAPI-Key': API_KEY
  }
};

// Function to fetch recipes from the API
export const getRecipes = async () => {
  try {
    const response = await axios.request(options);
    return response.data; // Return the data from the API response
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error; // Throw the error to handle it in the component
  }
};
