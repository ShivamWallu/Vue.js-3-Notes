// src/utils.js
export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
