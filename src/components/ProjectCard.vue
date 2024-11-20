<template>
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank">View Project</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Style your card */
  </style>
  